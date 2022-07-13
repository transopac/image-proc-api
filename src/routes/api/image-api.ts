import express from 'express';
import * as imageFs from '../../utilities/image-fs';

const imageRoutes = express.Router();

imageRoutes.get('/', (req, res) => {
  console.debug('Image API route: query =', req.query);
  const name: string = req.query.name as string;

  if (name === undefined) {
    const errMsg = 'Image name not specified!';
    console.error(errMsg);
    res.status(400).send(errMsg);
    return;
  } else if (!imageFs.checkIfSourceImageExists(name)) {
    const errMsg = `Image '${name}' not found!`;
    console.error(errMsg);
    res.status(400).send(errMsg);
    return;
  }

  const imageFilePath = imageFs.getSourceImagePath(name);
  console.log('Sending image file in response: ' + imageFilePath);
  res.sendFile(imageFilePath);
});

export default imageRoutes;
