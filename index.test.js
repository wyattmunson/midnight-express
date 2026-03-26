const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Welcome to your Express Server! 🚀');
  });
});

describe('GET /api/status', () => {
  it('should return a JSON object with success status', async () => {
    const res = await request(app).get('/api/status');

    expect(res.statusCode).toEqual(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('status', 'success');
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('timestamp');
  });
});