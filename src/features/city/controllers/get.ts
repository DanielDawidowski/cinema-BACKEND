import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { cityService } from "@service/db/city.service";

export class Get {
  public async cities(req: Request, res: Response): Promise<void> {
    const list = await cityService.getCities();
    res.status(HTTP_STATUS.OK).json({ message: "Cities list", list });
  }

  public async city(req: Request, res: Response): Promise<void> {
    const { cityId } = req.params;
    const city = await cityService.getCity(cityId);
    res.status(HTTP_STATUS.OK).json({ message: "City", city });
  }
}
