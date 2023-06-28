export type OpenHimHeaders = Record<string, string>;

export type OpenHimRequestDefinition = {
  path: string;
  headers: OpenHimHeaders;
  querystring: string;
  body: string;
  method: string;
  timestamp: Date;
};

export type OpenHimResponseDefinition = {
  status: number;
  headers: OpenHimHeaders;
  body: string;
  timestamp: Date;
};

export type OpenHimOrchestration = {
  name: string;
  request: OpenHimRequestDefinition;
  response?: OpenHimResponseDefinition;
};

export type OpenHimStatus = 'Processing' | 'Failed' | 'Completed' | 'Successful' | 'Completed with error(s)';

export type OpenHimError = {
  message: string;
  stack: string;
};

export type OpenHimResponse = {
  'x-mediator-urn': string;
  status: OpenHimStatus;
  response: OpenHimResponseDefinition;
  orchestrations?: OpenHimOrchestration[];
  properties?: Record<string, string>;
  error?: OpenHimError;
};
