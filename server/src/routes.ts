import { Router } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsControllers';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send(
    '<h1 style="font-family: Arial, sans-serif; color: #333;">API ECOLETA</h1>'
  );
});

routes.get('/items', ItemsController.index);

routes.post('/points', PointsController.create);

routes.get('/points', PointsController.index);

routes.get('/points/:id', PointsController.show);

export default routes;
