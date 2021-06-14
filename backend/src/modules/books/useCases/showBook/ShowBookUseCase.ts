import { injectable, inject } from 'tsyringe';

import Book from '@modules/books/models/Book';
import IBooksRepository from '@modules/books/repositories/IBooksRepository';

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
      throw new Error(`Book doesn't exist.`);
    }

    return book;
  }
}

export default ShowBookUseCase;
