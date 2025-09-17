const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('should return hello message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Hello from Azure DevOps CI/CD Pipeline!');
    });
});

describe('GET /health', () => {
    it('should return health status', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('healthy');
    });
});