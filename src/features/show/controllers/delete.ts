import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { showService } from "@service/db/show.service";

export class Delete {
  public async show(req: Request, res: Response): Promise<void> {
    const { showId } = req.params;
    await showService.deleteShow(showId);
    res.status(HTTP_STATUS.OK).json({ message: "Show deleted" });
  }
}
