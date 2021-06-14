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
    let books: Book[];

    if (name) {
      const lowerCasedName = name.toLowerCase();

      books = this.books.filter(book =>
        book.name.toLowerCase().includes(lowerCasedName),
      );
    } else {
      books = this.books;
    }

    if (limit && limit <= books.length) {
      books.slice(0, limit);
    }

    return books;
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
