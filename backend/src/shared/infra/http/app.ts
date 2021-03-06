import 'reflect-metadata';
import { errors } from 'celebrate';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { createConnection } from 'typeorm';

import '@shared/container';
import AppError from '@shared/errors/AppError';
import rateLimiter from '@shared/infra/http/middlewares/rateLimiter';

import routes from './routes';

if (process.env.NODE_ENV !== 'test') {
  createConnection();
}

const app = express();

app.use(rateLimiter);

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error`,
    });
  },
);

export default app;
