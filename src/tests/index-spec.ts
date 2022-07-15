import supertest from 'supertest';
import app from '../index';
import { StatusCodes } from 'http-status-codes';

const request = supertest(app);

describe('Test endpoint responses', (): void => {
  it('gets the base endpoint', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.status).toBe(StatusCodes.OK);
  });
});
