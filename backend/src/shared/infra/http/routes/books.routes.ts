import { Router } from 'express';

import CreateBookController from '@modules/books/useCases/createBook/CreateBookController';
import ListBooksController from '@modules/books/useCases/listBooks/ListBooksController';
import ShowBookController from '@modules/books/useCases/showBook/ShowBookController';

const booksRouter = Router();

const createBookController = new CreateBookController();
const listBooksController = new ListBooksController();
const showBookController = new ShowBookController();

booksRouter.post('/', createBookController.handle);

booksRouter.get('/', listBooksController.handle);

booksRouter.get('/:id', showBookController.handle);

export default booksRouter;
