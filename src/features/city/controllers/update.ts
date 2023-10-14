import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { cityService } from "@service/db/city.service";
import { ICityData } from "@city/interfaces/city.interface";

export class Update {
  public async city(req: Request, res: Response): Promise<void> {
    const { cityId } = req.params;
    const { name, halls } = req.body;
    const updatedCity: ICityData = {
      _id: cityId,
      name,
      halls
    } as ICityData;
    await cityService.updateCity(cityId, updatedCity);
    res.status(HTTP_STATUS.OK).json({ message: "City updated", updatedCity });
  }
}
