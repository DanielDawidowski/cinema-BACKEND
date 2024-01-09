import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { cityService } from "@service/db/city.service";
import { ICityDocument } from "@city/interfaces/city.interface";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { citySchema } from "@city/schemes/city.scheme";

export class Update {
  @joiValidation(citySchema)
  public async city(req: Request, res: Response): Promise<void> {
    const { cityId } = req.params;
    const { name } = req.body;
    const updatedCity: ICityDocument = {
      _id: cityId,
      name
    } as ICityDocument;
    await cityService.updateCity(cityId, updatedCity);
    res.status(HTTP_STATUS.OK).json({ message: "City updated", updatedCity });
  }
}
