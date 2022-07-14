import * as imageFs from '../utilities/image-fs';
import * as fs from 'fs';
import * as path from 'path';

const RESIZED_IMAGES_DIRECTORY_NAME = 'resizedImages';
const ROOT_DIRECTORY = process.cwd();
const RESIZED_IMAGES_DIRECTORY_PATH = path.join(
  ROOT_DIRECTORY,
  RESIZED_IMAGES_DIRECTORY_NAME
);

const imageFileExistent = 'fjord.jpg';
const imageFileNonExistent = 'doesnotexist.nope';

describe('Test image filesystem related utility functions', () => {
  it('checkIfSourceImageExists with source image file that exists', () => {
    const exists = imageFs.checkIfSourceImageExists(imageFileExistent);
    expect(exists).toBeTrue();
  });

  it('checkIfSourceImageExists with source image file that does not exist', () => {
    const exists = imageFs.checkIfSourceImageExists(imageFileNonExistent);
    expect(exists).toBeFalse();
  });

  it('getSourceImagePath should build path to source image file', () => {
    const sourceImagePath = imageFs.getSourceImagePath(imageFileExistent);
    expect(sourceImagePath).toContain(imageFileExistent);
  });

  it('recreateImageDirectoriesIfMissing should recreate deleted resized images directory', () => {
    // Deleting resized images directory
    fs.rmSync(RESIZED_IMAGES_DIRECTORY_PATH, { recursive: true });
    expect(fs.existsSync(RESIZED_IMAGES_DIRECTORY_PATH)).toBeFalse();

    imageFs.recreateImageDirectoriesIfMissing();

    // resized images directory should have been recreated
    expect(fs.existsSync(RESIZED_IMAGES_DIRECTORY_PATH)).toBeTrue();
  });
});
