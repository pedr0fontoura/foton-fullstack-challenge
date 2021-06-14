import Book from '@modules/books/models/Book';
import IBooksRepository from '@modules/books/repositories/IBooksRepository';

interface IRequest {
  name: string;
  author: string;
  description: string;
  image: string;
}

class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({ name, author, description, image }: IRequest): Promise<Book> {
    const bookAlreadyExists = await this.booksRepository.findByName(name);

    if (bookAlreadyExists) {
      throw new Error('A book with the same name already exists.');
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
