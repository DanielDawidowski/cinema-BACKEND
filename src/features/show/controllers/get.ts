import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { showService } from "@service/db/show.service";

export class Get {
  public async shows(req: Request, res: Response): Promise<void> {
    const list = await showService.getShows();
    const totalShows = await showService.totalShows();
    res.status(HTTP_STATUS.OK).json({ totalShows, list });
  }

  public async show(req: Request, res: Response): Promise<void> {
    const { showId } = req.params;
    const show = await showService.getShow(showId);
    res.status(HTTP_STATUS.OK).json({ show });
  }

  public async showByFilter(req: Request, res: Response): Promise<void> {
    const { city, movieId } = req.params;

    const list = await showService.getShowByFilter({ city, movieId });

    res.status(HTTP_STATUS.OK).json({ totalShows: list.length, list });
  }

  public async getShowByCity(req: Request, res: Response): Promise<void> {
    const { city } = req.params;
    const list = await showService.getShowByCity(city);
    const totalShows = list.length;
    res.status(HTTP_STATUS.OK).json({ totalShows, list });
  }

  public async getShowsByMovie(req: Request, res: Response): Promise<void> {
    const { movieId } = req.params;

    const list = await showService.getShowByMovie(movieId);
    const totalShows = list.length;
    res.status(HTTP_STATUS.OK).json({ totalShows, list });
  }
}
