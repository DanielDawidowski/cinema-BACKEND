import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { ObjectId } from "mongodb";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { showSchema } from "@show/schemes/show.scheme";
import { IShowDocument } from "@show/interfaces/show.interface";
import { showService } from "@service/db/show.service";

export class Create {
  @joiValidation(showSchema)
  public async show(req: Request, res: Response): Promise<void> {
    const { time, hall, movie, date } = req.body;
    const showObjectId: ObjectId = new ObjectId();
    const createdShow: IShowDocument = {
      _id: showObjectId,
      userId: req.currentUser!.userId,
      username: req.currentUser!.username,
      hall,
      movie,
      time,
      date,
      createdAt: new Date()
    } as IShowDocument;

    await showService.addShowToDB(createdShow);
    res.status(HTTP_STATUS.CREATED).json({ message: "Show added", createdShow });
  }
}
