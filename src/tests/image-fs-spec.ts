import * as imageFs from '../utilities/image-fs';

const imageFileExistent = 'fjord.jpg';
const imageFileNonExistent = 'doesnotexist.nope';

describe('Test image filesystem related utility functions', () => {
  it('checkIfSourceImageExists with image file that exists', () => {
    const exists = imageFs.checkIfSourceImageExists(imageFileExistent);
    expect(exists).toBeTrue();
  });
  it('checkIfSourceImageExists with image file that does not exist', () => {
    const exists = imageFs.checkIfSourceImageExists(imageFileNonExistent);
    expect(exists).toBeFalse();
  });
});
