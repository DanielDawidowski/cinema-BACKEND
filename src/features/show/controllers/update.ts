import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { IShowDocument } from "@show/interfaces/show.interface";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { showSchema } from "@show/schemes/show.scheme";
import { showService } from "@service/db/show.service";

export class Update {
  @joiValidation(showSchema)
  public async show(req: Request, res: Response): Promise<void> {
    const { showId } = req.params;
    const { time, hall, movie, city } = req.body;
    const updatedShow: IShowDocument = {
      _id: showId,
      userId: req.currentUser!.userId,
      username: req.currentUser!.username,
      hall,
      movie,
      city,
      time,
      createdAt: new Date()
    } as IShowDocument;

    await showService.updateShow(showId, updatedShow);
    res.status(HTTP_STATUS.OK).json({ message: "Show updated", updatedShow });
  }
}
