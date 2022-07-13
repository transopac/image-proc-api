import sharp from 'sharp';
import * as imageFs from './image-fs';

const determineImageResizedName = (
  imageName: string,
  width: number,
  height: number
) => {
  const imageFileExtensionDotIndex = imageName.lastIndexOf('.');
  const imageNameWithoutFileExtension = imageName.substring(
    0,
    imageFileExtensionDotIndex
  );
  const imageFileExtensionIncludingDot = imageName.substring(
    imageName.lastIndexOf('.')
  );

  const imageResizedName =
    imageNameWithoutFileExtension +
    `_${width}x${height}` +
    imageFileExtensionIncludingDot;

  return imageResizedName;
};

const resizeImage = async (
  imageName: string,
  width: number,
  height: number
): Promise<string> => {
  const resizedImageName = determineImageResizedName(imageName, width, height);
  const resizedImagePath = imageFs.getResizedImagePath(resizedImageName);

  const resizedImageAlreadyExists =
    imageFs.checkIfResizedImageExists(resizedImageName);

  if (resizedImageAlreadyExists) {
    // resized image file already exists
    console.log(
      'Resized image already exists. Returning resized image file path: ' +
        resizedImagePath
    );
    return resizedImagePath;
  }

  // generate resized image file
  console.log('Generating resized image: ' + resizedImageName);
  imageFs.recreateImageDirectoriesIfMissing();
  await sharp(imageFs.getSourceImagePath(imageName))
    .resize({ width: width, height: height, fit: 'contain' })
    .toFile(resizedImagePath);

  console.log(
    'Returning generated resized image file path: ' + resizedImagePath
  );

  return resizedImagePath;
};

export default resizeImage;
