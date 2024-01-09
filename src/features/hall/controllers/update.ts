import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { hallService } from "@service/db/hall.service";
import { IHallData } from "@hall/interfaces/hall.interface";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { hallSchema } from "@hall/schemes/hall.scheme";

export class Update {
  @joiValidation(hallSchema)
  public async hall(req: Request, res: Response): Promise<void> {
    const { hallId } = req.params;
    const { hallNumber, seats, city } = req.body;
    const updatedHall: IHallData = {
      _id: hallId,
      hallNumber,
      seats,
      city,
      createdAt: new Date()
    } as IHallData;

    await hallService.updateHall(hallId, updatedHall);
    res.status(HTTP_STATUS.OK).json({ message: "Hall updated", updatedHall });
  }
}
