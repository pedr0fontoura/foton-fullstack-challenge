import { injectable, inject } from 'tsyringe';

import Book from '@modules/books/models/Book';
import IBooksRepository from '@modules/books/repositories/IBooksRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
class ShowBookUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Book> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new AppError(`Book doesn't exist.`, 404);
    }

    return book;
  }
}

export default ShowBookUseCase;
