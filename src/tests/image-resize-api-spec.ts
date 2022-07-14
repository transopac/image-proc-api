import supertest from 'supertest';
import app from '../index';
import { StatusCodes } from 'http-status-codes';

const WIDTH = 300;
const HEIGHT = 200;
const IMAGE_FILE_EXISTENT = 'fjord.jpg';
const IMAGE_FILE_NON_EXISTENT = 'doesnotexist.nope';
const IMAGE_FILE_UNSUPPORTED_FORMAT = 'not-image.txt';
const API_URL_ENDPOINT = '/api/image-resize?name=';
const QUERY_PARAMS_RESIZE_DIMENSIONS = `&width=${WIDTH}&height=${HEIGHT}`;

const request = supertest(app);

describe('Test Image Resize API endpoint responses', () => {
  it('Call Image Resize API with existing image file name', async () => {
    const response = await request.get(
      API_URL_ENDPOINT + IMAGE_FILE_EXISTENT + QUERY_PARAMS_RESIZE_DIMENSIONS
    );
    expect(response.status).toBe(StatusCodes.OK);
  });

  it('Call Image Resize API with non-existent image file name', async () => {
    const response = await request.get(
      API_URL_ENDPOINT +
        IMAGE_FILE_NON_EXISTENT +
        QUERY_PARAMS_RESIZE_DIMENSIONS
    );
    expect(response.status).toBe(StatusCodes.NOT_FOUND);
  });

  it('Call Image Resize API with unsupported-format image file name', async () => {
    const response = await request.get(
      API_URL_ENDPOINT +
        IMAGE_FILE_UNSUPPORTED_FORMAT +
        QUERY_PARAMS_RESIZE_DIMENSIONS
    );
    expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
  });
});
