import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListBooksUseCase from './ListBooksUseCase';

class ListBooksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name_like, _limit } = request.query;

    const listBooksUseCase = container.resolve(ListBooksUseCase);

    const books = await listBooksUseCase.execute({
      name: name_like as string,
      limit: parseInt(_limit as string, 10),
    });

    return response.status(200).json(books);
  }
}

export default ListBooksController;
