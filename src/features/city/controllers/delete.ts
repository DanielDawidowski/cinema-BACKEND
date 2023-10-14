import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { cityService } from "@service/db/city.service";

export class Delete {
  public async city(req: Request, res: Response): Promise<void> {
    const { cityId } = req.params;
    await cityService.deleteCity(cityId);
    res.status(HTTP_STATUS.OK).json({ message: "City deleted" });
  }
}
