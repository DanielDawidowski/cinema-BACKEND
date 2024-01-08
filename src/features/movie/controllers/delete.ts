import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { movieService } from "@service/db/movie.service";

export class Delete {
  public async movie(req: Request, res: Response): Promise<void> {
    const { movieId } = req.params;
    await movieService.deleteMovie(movieId);
    res.status(HTTP_STATUS.OK).json({ message: "Movie deleted" });
  }
}
