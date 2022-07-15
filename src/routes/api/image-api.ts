import express, { Request, Response } from 'express';
import * as imageFs from '../../utilities/image-fs';
import { StatusCodes } from 'http-status-codes';

const imageRoutes = express.Router();

imageRoutes.get('/', (req: Request, res: Response): void => {
  console.debug('Image API route: query =', req.query);
  const name: string = req.query.name as string;

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

  const imageFilePath = imageFs.getSourceImagePath(name);
  console.log('Sending image file in response: ' + imageFilePath);
  res.sendFile(imageFilePath);
});

export default imageRoutes;
