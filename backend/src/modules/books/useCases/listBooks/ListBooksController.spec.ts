import request from 'supertest';
import { Connection, createConnection } from 'typeorm';

import app from '@shared/infra/http/app';

let connection: Connection;

describe('List Books Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to list all books', async () => {
    await request(app).post('/books').send({
      name: 'Book Test 1',
      author: 'John Doe',
      description: 'Book description Test',
      image: 'Book image url Test',
    });

    await request(app).post('/books').send({
      name: 'Book Test 2',
      author: 'John Doe',
      description: 'Book description Test',
      image: 'Book image url Test',
    });

    const response = await request(app).get('/books');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});
