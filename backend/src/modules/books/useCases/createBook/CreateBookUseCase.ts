import { injectable, inject } from 'tsyringe';

import Book from '@modules/books/models/Book';
import IBooksRepository from '@modules/books/repositories/IBooksRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  author: string;
  description: string;
  image: string;
}

@injectable()
class CreateBookUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) {}

  async execute({ name, author, description, image }: IRequest): Promise<Book> {
    const bookAlreadyExists = await this.booksRepository.findByName(name);

    if (bookAlreadyExists) {
      throw new AppError('A book with the same name already exists.');
    }

    const book = await this.booksRepository.create({
      name,
      author,
      description,
      image,
    });

    return book;
  }
}

export default CreateBookUseCase;
