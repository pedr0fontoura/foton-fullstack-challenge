import { injectable, inject } from 'tsyringe';

import Book from '@modules/books/models/Book';
import IBooksRepository from '@modules/books/repositories/IBooksRepository';

interface IRequest {
  name: string;
  limit: number;
}

@injectable()
class ListBooksUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) {}

  async execute({ name, limit }: IRequest): Promise<Book[]> {
    return this.booksRepository.findAllByName({ name, limit });
  }
}

export default ListBooksUseCase;
