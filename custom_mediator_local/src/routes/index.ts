import express from 'express';
import mappingRoute from './mapper.route';

const router = express.Router();

const routes = [
  {
    path: '/map',
    route: mappingRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
