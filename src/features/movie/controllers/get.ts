import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { movieService } from "@service/db/movie.service";

export class Get {
  public async movies(req: Request, res: Response): Promise<void> {
    const list = await movieService.getMovies();
    res.status(HTTP_STATUS.OK).json({ total: list.length, list });
  }

  public async movie(req: Request, res: Response): Promise<void> {
    const { movieId } = req.params;
    const movie = await movieService.getMovie(movieId);
    res.status(HTTP_STATUS.OK).json({ movie });
  }
}
