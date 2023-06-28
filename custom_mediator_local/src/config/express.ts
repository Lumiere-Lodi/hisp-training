import express from 'express';

import routes from '@server/routes';
import config from '.';
import morgan from './morgan';
import ApiError from '@server/utils/ApiError';
import httpStatus from 'http-status';
import { errorConverter, errorHandler } from '@server/middlewares/error';

const createServer = (): express.Application => {
  const app = express();

  if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
  }

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.disable('x-powered-by');

  // api routes
  app.use('/hisp', routes);

  app.get('/health', (_req, res) => {
    res.send('UP');
  });

  // send back a 404 error for any unknown api request
  app.use((_req, _res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Unknown API endpoint'));
  });

  // convert error to ApiError, if needed
  app.use(errorConverter);

  // handle error
  app.use(errorHandler);

  return app;
};

export { createServer };
