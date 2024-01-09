import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { ObjectId } from "mongodb";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { IHallData } from "@hall/interfaces/hall.interface";
import { hallService } from "@service/db/hall.service";
import { hallSchema } from "@hall/schemes/hall.scheme";

export class Create {
  @joiValidation(hallSchema)
  public async create(req: Request, res: Response): Promise<void> {
    const { hallNumber, seats, city } = req.body;
    const hallObjectId: ObjectId = new ObjectId();

    const hallData: IHallData = {
      _id: `${hallObjectId}`,
      city,
      hallNumber,
      seats,
      createdAt: new Date()
    };
    await hallService.addHallToDB(hallData);

    res.status(HTTP_STATUS.OK).json({ message: "Hall added", hallData: hallData });
  }
}
