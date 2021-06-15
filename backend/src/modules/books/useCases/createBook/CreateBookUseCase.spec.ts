import FakeBooksRepository from '@modules/books/repositories/fake/FakeBooksRepository';
import AppError from '@shared/errors/AppError';

import CreateBookUseCase from './CreateBookUseCase';

let createBookUseCase: CreateBookUseCase;
let booksRepository: FakeBooksRepository;

describe('Create Book', () => {
  beforeEach(() => {
    booksRepository = new FakeBooksRepository();

    createBookUseCase = new CreateBookUseCase(booksRepository);
  });

  it('should be able to create a new book', async () => {
    const book = {
      name: 'Book Test',
      author: 'John Doe',
      description: 'Book description Test',
      image: 'Book image url Test',
    };

    await createBookUseCase.execute(book);

    const createdBook = await booksRepository.findByName(book.name);

    expect(createdBook).toHaveProperty('id');
  });

  it('should not be able to create a new book with a name that is already used', async () => {
    expect(async () => {
      const book = {
        name: 'Book Test',
        author: 'John Doe',
        description: 'Book description Test',
        image: 'Book image url Test',
      };

      await createBookUseCase.execute(book);

      await createBookUseCase.execute(book);
    }).rejects.toBeInstanceOf(AppError);
  });
});
