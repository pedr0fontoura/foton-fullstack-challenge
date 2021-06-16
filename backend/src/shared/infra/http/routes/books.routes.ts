import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import CreateBookController from '@modules/books/useCases/createBook/CreateBookController';
import ListBooksController from '@modules/books/useCases/listBooks/ListBooksController';
import ShowBookController from '@modules/books/useCases/showBook/ShowBookController';

const booksRouter = Router();

const createBookController = new CreateBookController();
const listBooksController = new ListBooksController();
const showBookController = new ShowBookController();

booksRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().max(100).required(),
      author: Joi.string().max(100).required(),
      description: Joi.string().max(1000).required(),
      image: Joi.string().uri().required(),
    },
  }),
  createBookController.handle,
);

booksRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      name_like: Joi.string(),
      _limit: Joi.number(),
    },
  }),
  listBooksController.handle,
);

booksRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().hex().required(),
    },
  }),
  showBookController.handle,
);

export default booksRouter;
