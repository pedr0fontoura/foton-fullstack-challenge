import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateBookUseCase from './CreateBookUseCase';

class CreateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, author, description, image } = request.body;

    const createBookUseCase = container.resolve(CreateBookUseCase);

    const book = await createBookUseCase.execute({
      name,
      author,
      description,
      image,
    });

    return response.status(201).json(book);
  }
}

export default CreateBookController;
