import resizeImage from '../utilities/image-resize';

const WIDTH = 300;
const HEIGHT = 200;
const IMAGE_FILE_EXISTENT = 'fjord.jpg';
const RESIZED_IMAGE_FILE_EXISTENT = 'fjord_300x200.jpg';
const IMAGE_FILE_NON_EXISTENT = 'doesnotexist.nope';
const IMAGE_FILE_UNSUPPORTED_FORMAT = 'not-image.txt';

describe('Test image resize utility functions', (): void => {
  it('resizeImage with source image file that exists', async (): Promise<void> => {
    resizeImage(IMAGE_FILE_EXISTENT, WIDTH, HEIGHT).then(
      (resizedImageFilePath: string): void => {
        expect(resizedImageFilePath).toContain(RESIZED_IMAGE_FILE_EXISTENT);
      }
    );
  });

  it('resizeImage with source image file that does not exist', async (): Promise<void> => {
    resizeImage(IMAGE_FILE_NON_EXISTENT, WIDTH, HEIGHT).catch(
      (error: Error): void => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain('Input file is missing');
      }
    );
  });

  it('resizeImage with source image file of unsupported format', async (): Promise<void> => {
    resizeImage(IMAGE_FILE_UNSUPPORTED_FORMAT, WIDTH, HEIGHT).catch(
      (error: Error): void => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain(
          'Input file contains unsupported image format'
        );
      }
    );
  });
});
