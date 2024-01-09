import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { showService } from "@service/db/show.service";

export class Get {
  public async shows(req: Request, res: Response): Promise<void> {
    const list = await showService.getShows();
    res.status(HTTP_STATUS.OK).json({ message: "Shows list", total: list.length, list });
  }

  public async show(req: Request, res: Response): Promise<void> {
    const { showId } = req.params;
    const show = await showService.getShow(showId);
    res.status(HTTP_STATUS.OK).json({ message: "Show", show });
  }
}
