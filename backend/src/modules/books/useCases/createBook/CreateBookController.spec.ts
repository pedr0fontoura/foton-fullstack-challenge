import request from 'supertest';
import { Connection, createConnection } from 'typeorm';

import app from '@shared/infra/http/app';

let connection: Connection;

describe('Create Book Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to create a new book', async () => {
    const response = await request(app).post('/books').send({
      name: 'Book Test',
      author: 'John Doe',
      description: 'Book description Test',
      image: 'Book image url Test',
    });

    expect(response.status).toBe(201);
  });

  it('should not be able to create a new book with a name that is already used', async () => {
    await request(app).post('/books').send({
      name: 'Book Test',
      author: 'John Doe',
      description: 'Book description Test',
      image: 'Book image url Test',
    });

    const response = await request(app).post('/books').send({
      name: 'Book Test',
      author: 'John Doe',
      description: 'Book description Test',
      image: 'Book image url Test',
    });

    expect(response.status).toBe(400);
  });
});
