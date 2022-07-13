import express from 'express';
import imageRoutes from './api/image-api';
import imageResizeRoutes from './api/image-resize-api';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).send('API route');
});

// API for viewing the source images
routes.use('/image', imageRoutes);
// API for generating and viewing the resized versions of the source images
routes.use('/image-resize', imageResizeRoutes);

export default routes;
