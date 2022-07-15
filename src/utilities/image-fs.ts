import * as fs from 'fs';
import * as path from 'path';
// Image Filesystem Utilities
const SOURCE_IMAGES_DIRECTORY_NAME = 'images';
const RESIZED_IMAGES_DIRECTORY_NAME = 'resizedImages';

const ROOT_DIRECTORY = process.cwd();
const SOURCE_IMAGES_DIRECTORY_PATH = path.join(
  ROOT_DIRECTORY,
  SOURCE_IMAGES_DIRECTORY_NAME
);
const RESIZED_IMAGES_DIRECTORY_PATH = path.join(
  ROOT_DIRECTORY,
  RESIZED_IMAGES_DIRECTORY_NAME
);

const recreateImageDirectoriesIfMissing = (): void => {
  if (!fs.existsSync(SOURCE_IMAGES_DIRECTORY_PATH)) {
    fs.mkdirSync(SOURCE_IMAGES_DIRECTORY_PATH);
  }
  if (!fs.existsSync(RESIZED_IMAGES_DIRECTORY_PATH)) {
    fs.mkdirSync(RESIZED_IMAGES_DIRECTORY_PATH);
  }
};

const getSourceImagePath = (sourceImageName: string): string => {
  return path.join(SOURCE_IMAGES_DIRECTORY_PATH, sourceImageName);
};

const getResizedImagePath = (resizedImageName: string): string => {
  return path.join(RESIZED_IMAGES_DIRECTORY_PATH, resizedImageName);
};

const checkIfSourceImageExists = (sourceImageName: string): boolean => {
  return fs.existsSync(getSourceImagePath(sourceImageName));
};

const checkIfResizedImageExists = (resizedImageName: string): boolean => {
  return fs.existsSync(getResizedImagePath(resizedImageName));
};

export {
  recreateImageDirectoriesIfMissing,
  checkIfSourceImageExists,
  checkIfResizedImageExists,
  getSourceImagePath,
  getResizedImagePath
};
