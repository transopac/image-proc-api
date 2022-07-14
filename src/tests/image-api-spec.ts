import supertest from 'supertest';
import app from '../index';
import { StatusCodes } from 'http-status-codes';

const IMAGE_FILE_EXISTENT = 'fjord.jpg';
const IMAGE_FILE_NON_EXISTENT = 'doesnotexist.nope';
const API_URL_ENDPOINT = '/api/image?name=';

const request = supertest(app);

describe('Test Image API endpoint responses', () => {
  it('Call Image API with existing image file name', async () => {
    const response = await request.get(API_URL_ENDPOINT + IMAGE_FILE_EXISTENT);
    expect(response.status).toBe(StatusCodes.OK);
  });

  it('Call Image API with non-existent image file name', async () => {
    const response = await request.get(
      API_URL_ENDPOINT + IMAGE_FILE_NON_EXISTENT
    );
    expect(response.status).toBe(StatusCodes.NOT_FOUND);
  });
});
