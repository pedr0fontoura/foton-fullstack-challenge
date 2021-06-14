import ICreateBookDTO from '../dtos/ICreateBookDTO';
import IFindAllByNameDTO from '../dtos/IFindAllByNameDTO';
import Book from '../models/Book';

export default interface IBooksRepository {
  create(data: ICreateBookDTO): Promise<Book>;
  findById(id: string): Promise<Book | undefined>;
  findByName(name: string): Promise<Book | undefined>;
  findAllByName(data: IFindAllByNameDTO): Promise<Book[]>;
}
