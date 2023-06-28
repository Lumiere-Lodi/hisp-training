import * as moduleAlias from 'module-alias';

if (process.env.NODE_ENV !== 'production') {
  const sourcePath = 'src';
  moduleAlias.addAliases({
    '@server': sourcePath,
    '@config': `${sourcePath}/config`,
    '@domain': `${sourcePath}/domain`,
  });
}

import { logger } from '@config/logger';
import { createServer } from '@config/express';

import { AddressInfo } from 'net';
import http from 'http';
import setupMediator from '@server/openhim';
import config from '@config/index';

async function startServer() {
  const app = createServer();
  const server = http.createServer(app).listen({ host: config.host, port: config.port }, () => {
    const addressInfo = server.address() as AddressInfo;
    logger.info(`Server ready at http://${addressInfo.address}:${addressInfo.port} (${config.env} environment)`);

    setupMediator();
  });

  const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
  signalTraps.forEach((type) => {
    process.once(type, async () => {
      logger.info(`process.once ${type}`);

      server.close(() => {
        logger.debug('HTTP server closed');
      });
    });
  });
}

startServer();
