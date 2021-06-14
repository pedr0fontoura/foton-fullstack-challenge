import ICreateBookDTO from '@modules/books/dtos/ICreateBookDTO';
import IFindAllByNameDTO from '@modules/books/dtos/IFindAllByNameDTO';
import Book from '@modules/books/models/Book';

import IBooksRepository from '../IBooksRepository';

class BooksRepository implements IBooksRepository {
  private books: Book[] = [];

  public async findById(id: string): Promise<Book | undefined> {
    return this.books.find(book => id === book.id);
  }

  public async findByName(name: string): Promise<Book | undefined> {
    return this.books.find(book => name === book.name);
  }

  public async findAllByName({
    name,
    limit,
  }: IFindAllByNameDTO): Promise<Book[] | undefined> {
    const filteredBooks = this.books.filter(book => book.name.includes(name));

    const isFilteredGreaterThanLimit = filteredBooks.length > limit;

    return isFilteredGreaterThanLimit
      ? filteredBooks.slice(0, limit)
      : filteredBooks;
  }

  public async create({
    name,
    author,
    description,
    image,
  }: ICreateBookDTO): Promise<Book> {
    const book = new Book({ name, author, description, image });

    this.books.push(book);

    return book;
  }
}

export default BooksRepository;
