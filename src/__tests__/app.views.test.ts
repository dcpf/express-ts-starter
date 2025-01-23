import request from 'supertest';
import { app } from '../app';

describe('App view tests', () => {
  test('home page view', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatchSnapshot();
  });

  test('users page view', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatchSnapshot();
  });

  test('404', async () => {
    const response = await request(app).get('/invalid');
    expect(response.statusCode).toBe(404);
    expect(response.text).toMatchSnapshot();
  });
});
