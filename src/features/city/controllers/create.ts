import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { citySchema } from "@city/schemes/city.scheme";
import { ObjectId } from "mongodb";
import { ICityDocument } from "@city/interfaces/city.interface";
import { cityService } from "@service/db/city.service";

export class Create {
  @joiValidation(citySchema)
  public async create(req: Request, res: Response): Promise<void> {
    const { name, halls } = req.body;
    const messageObjectId: ObjectId = new ObjectId();

    const cityData: ICityDocument = {
      _id: `${messageObjectId}`,
      name,
      halls,
      createdAt: new Date()
    } as ICityDocument;
    await cityService.addCityToDB(cityData);

    res.status(HTTP_STATUS.OK).json({ message: "City added", cityData: cityData });
  }
}
