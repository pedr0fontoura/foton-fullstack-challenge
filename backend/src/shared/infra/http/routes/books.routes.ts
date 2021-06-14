import { Router } from 'express';

const booksRouter = Router();

booksRouter.post('/', (request, response) => {
  return response.json({ message: 'Create book' });
});

booksRouter.get('/', (request, response) => {
  const { name_like, _limit } = request.query;

  return response.json({ message: 'Index books' });
});

booksRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  return response.json({ message: `Show book ${id}` });
});

export default booksRouter;
