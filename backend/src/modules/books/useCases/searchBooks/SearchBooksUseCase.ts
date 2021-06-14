import Book from '@modules/books/models/Book';
import IBooksRepository from '@modules/books/repositories/IBooksRepository';

interface IRequest {
  name: string;
  limit: number;
}

class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({ name, limit }: IRequest): Promise<Book[]> {
    return this.booksRepository.findAllByName({ name, limit });
  }
}

export default CreateBookUseCase;
