import request from 'supertest';
import { app } from '../app';

describe('App view tests', () => {
  test('home page view', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});
