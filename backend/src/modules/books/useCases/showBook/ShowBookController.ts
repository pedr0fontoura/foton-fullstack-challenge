import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowBookUseCase from './ShowBookUseCase';

class ShowBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showBookUseCase = container.resolve(ShowBookUseCase);

    const book = await showBookUseCase.execute({ id });

    return response.status(200).json(book);
  }
}

export default ShowBookController;
