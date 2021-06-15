import FakeBooksRepository from '@modules/books/repositories/fake/FakeBooksRepository';
import AppError from '@shared/errors/AppError';

import ShowBookUseCase from './ShowBookUseCase';

let showBookUseCase: ShowBookUseCase;
let booksRepository: FakeBooksRepository;

describe('Show Book', () => {
  beforeEach(() => {
    booksRepository = new FakeBooksRepository();

    showBookUseCase = new ShowBookUseCase(booksRepository);
  });

  it('should be able to show book details', async () => {
    const book = await booksRepository.create({
      name: 'Book Test',
      author: 'John Doe',
      description: 'Book description Test',
      image: 'Book image url Test',
    });

    const details = await showBookUseCase.execute({ id: book.id });

    expect(details.name).toBe('Book Test');
    expect(details.author).toBe('John Doe');
    expect(details.description).toBe('Book description Test');
    expect(details.image).toBe('Book image url Test');
  });

  it('should not be able to show book details of a non existing book', async () => {
    expect(async () => {
      await showBookUseCase.execute({ id: 'nonExistingBookId' });
    }).rejects.toBeInstanceOf(AppError);
  });
});
