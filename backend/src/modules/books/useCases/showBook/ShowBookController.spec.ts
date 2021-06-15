import request from 'supertest';
import { Connection } from 'typeorm';

import app from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create Book Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to show book details', async () => {
    const { body } = await request(app).post('/books').send({
      name: 'Book Test',
      author: 'John Doe',
      description: 'Book description Test',
      image: 'Book image url Test',
    });

    const response = await request(app).get(`/books/${body.id}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Book Test');
  });

  it('should not be able to show book details of a non existing book', async () => {
    const response = await request(app).get(`/books/nonExistingId}`);

    expect(response.status).toBe(404);
  });
});
