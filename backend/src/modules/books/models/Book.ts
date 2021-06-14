import { v4 as uuid } from 'uuid';

interface IBook {
  id?: string;
  name: string;
  author: string;
  description: string;
  image: string;
}

class Book {
  public id: string;
  public name: string;
  public author: string;
  public description: string;
  public image: string;

  constructor({ id, name, author, description, image }: IBook) {
    this.id = id || uuid();
    this.name = name;
    this.author = author;
    this.description = description;
    this.image = image;
  }
}

export default Book;
