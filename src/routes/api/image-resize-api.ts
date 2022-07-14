import express from 'express';
import resizeImage from '../../utilities/image-resize';
import * as imageFs from '../../utilities/image-fs';
import { StatusCodes } from 'http-status-codes';

const imageResizeRoutes = express.Router();

imageResizeRoutes.get('/', (req, res) => {
  console.debug('Image Resize API route: query =', req.query);
  const name: string = req.query.name as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);

  if (name === undefined) {
    const errMsg = 'Image name not specified!';
    console.error(errMsg);
    res.status(StatusCodes.BAD_REQUEST).send(errMsg);
    return;
  } else if (!imageFs.checkIfSourceImageExists(name)) {
    const errMsg = `Image '${name}' not found!`;
    console.error(errMsg);
    res.status(StatusCodes.NOT_FOUND).send(errMsg);
    return;
  }

  resizeImage(name as string, width, height)
    .then((resizedImageFilePath) => {
      console.log(
        'Sending resized image file in response: ' + resizedImageFilePath
      );
      res.sendFile(resizedImageFilePath);
    })
    .catch((e) => {
      const errMsg = 'Error occurred while processing image: ' + e;
      console.error(errMsg);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errMsg);
    });
});

export default imageResizeRoutes;
