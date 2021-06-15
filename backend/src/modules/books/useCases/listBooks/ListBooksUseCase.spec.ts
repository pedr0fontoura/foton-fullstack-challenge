import FakeBooksRepository from '@modules/books/repositories/fake/FakeBooksRepository';

import ListBooksUseCase from './ListBooksUseCase';

let listBooksUseCase: ListBooksUseCase;
let booksRepository: FakeBooksRepository;

describe('Create Book', () => {
  beforeEach(() => {
    booksRepository = new FakeBooksRepository();

    listBooksUseCase = new ListBooksUseCase(booksRepository);
  });

  it('should be able to list all books', async () => {
    for (let i = 1; i <= 5; i += 1) {
      booksRepository.create({
        name: `Book Test ${i}`,
        author: 'John Doe',
        description: 'Book description Test',
        image: 'Book image url Test',
      });
    }

    const books = await listBooksUseCase.execute({
      name: undefined,
      limit: undefined,
    });

    expect(books.length).toBe(5);
  });
});
