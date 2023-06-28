// The OpenHIM config is controlled via Environment Variables to prevent ever having to
// risk committing sensitive data to source control
import config from '@server/config';

// The OpenHIM Mediator Utils is an essential package for quick mediator setup.
// It handles the OpenHIM authentication, mediator registration, and mediator heartbeat.
import { activateHeartbeat, fetchConfig, registerMediator } from 'openhim-mediator-utils';

import { logger } from '@config/logger';
import mediatorConfig from '@config/mediatorConfig.json';
import {
  OpenHimError,
  OpenHimStatus,
  OpenHimOrchestration,
  OpenHimResponse,
  OpenHimHeaders,
} from '@server/types/openhim';

export default function setupMediator() {
  const openhimConfig = {
    ...config.openhimConfig,
    urn: mediatorConfig.urn,
  };

  // The purpose of registering the mediator is to allow easy communication between the mediator and the OpenHIM.
  // The details received by the OpenHIM will allow quick channel setup which will allow tracking of requests from
  // the client through any number of mediators involved and all the responses along the way(if the mediators are
  // properly configured). Moreover, if the request fails for any reason all the details are recorded and it can
  // be replayed at a later date to prevent data loss.
  registerMediator(openhimConfig, mediatorConfig, (error) => {
    if (error) {
      throw new Error(`Failed to register mediator. Check your Config: ${error.message}`);
    }

    logger.info('Successfully registered mediator!');

    fetchConfig(openhimConfig, (error) => {
      if (error) {
        throw new Error(`Failed to fetch initial config. ${error}`);
      }

      // The activateHeartbeat method returns an Event Emitter which allows the mediator to attach listeners waiting
      // for specific events triggered by OpenHIM responses to the mediator posting its heartbeat.
      const emitter = activateHeartbeat(openhimConfig);
      emitter.on('error', (error) => {
        logger.error(`Heartbeat failed: ${JSON.stringify(error)}`);
      });

      // The config events is emitted when the heartbeat request posted by the mediator returns data from the OpenHIM.
      emitter.on('config', (newConfig) => {
        logger.debug('Received updated config:', JSON.stringify(newConfig));
      });
    });
  });
}

export const buildOpenHimHeaders = (headers: Headers): OpenHimHeaders => {
  const openHimHeaders = {};
  for (const [key, value] of headers) {
    openHimHeaders[key] = value;
  }
  return openHimHeaders;
};

export const buildOpenHimResponse = (
  status: OpenHimStatus,
  statusCode: number,
  body: unknown,
  orchestrations: OpenHimOrchestration[] = [],
  error?: OpenHimError,
  properties?: Record<string, string>,
  headers?: OpenHimHeaders,
): OpenHimResponse => {
  return {
    'x-mediator-urn': mediatorConfig.urn,
    status,
    response: {
      status: statusCode,
      headers: headers || {},
      body: JSON.stringify(body),
      timestamp: new Date(),
    },
    orchestrations,
    properties,
    error,
  };
};
