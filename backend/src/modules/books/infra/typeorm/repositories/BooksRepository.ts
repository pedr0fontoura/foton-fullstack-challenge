import { ObjectId } from 'mongodb';
import { getMongoRepository, MongoRepository, ObjectID } from 'typeorm';

import ICreateBookDTO from '@modules/books/dtos/ICreateBookDTO';
import IFindAllByNameDTO from '@modules/books/dtos/IFindAllByNameDTO';
import Book from '@modules/books/models/Book';
import IBooksRepository from '@modules/books/repositories/IBooksRepository';

import BookSchema from '../schemas/BookSchema';

class BooksRepository implements IBooksRepository {
  private ormRepository: MongoRepository<BookSchema>;

  constructor() {
    this.ormRepository = getMongoRepository(BookSchema);
  }

  public async findById(id: string): Promise<Book | undefined> {
    let objectId: ObjectId;

    try {
      objectId = new ObjectId(id);
    } catch {
      objectId = undefined;
    }

    const bookSchema = await this.ormRepository.findOne(objectId as ObjectID);

    return (
      objectId &&
      bookSchema &&
      new Book({ ...bookSchema, id: bookSchema.id.toString() })
    );
  }

  public async findByName(name: string): Promise<Book | undefined> {
    const bookSchema = await this.ormRepository.findOne({ where: { name } });

    return (
      bookSchema && new Book({ ...bookSchema, id: bookSchema.id.toString() })
    );
  }

  public async findAllByName({
    name,
    limit,
  }: IFindAllByNameDTO): Promise<Book[] | undefined> {
    let bookSchemas: BookSchema[];

    if (name) {
      bookSchemas = await this.ormRepository.find({
        where: {
          name: new RegExp(`^.*${name}.*$`, 'i'),
        },
        take: limit,
      });
    } else {
      bookSchemas = await this.ormRepository.find({
        take: limit,
      });
    }

    return bookSchemas.map(
      bookSchema => new Book({ ...bookSchema, id: bookSchema.id.toString() }),
    );
  }

  public async create({
    name,
    author,
    description,
    image,
  }: ICreateBookDTO): Promise<Book> {
    const bookSchema = this.ormRepository.create({
      name,
      author,
      description,
      image,
    });

    await this.ormRepository.save(bookSchema);

    return new Book({ ...bookSchema, id: bookSchema.id.toString() });
  }
}

export default BooksRepository;
