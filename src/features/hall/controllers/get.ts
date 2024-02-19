import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { hallService } from "@service/db/hall.service";

export class Get {
  public async halls(req: Request, res: Response): Promise<void> {
    const list = await hallService.getHalls();
    const totalHalls = list.length;
    res.status(HTTP_STATUS.OK).json({ totalHalls, list });
  }

  public async hall(req: Request, res: Response): Promise<void> {
    const { hallId } = req.params;
    const hall = await hallService.getHall(hallId);
    res.status(HTTP_STATUS.OK).json({ hall });
  }

  public async hallByCity(req: Request, res: Response): Promise<void> {
    const { city } = req.params;
    const list = await hallService.getHallByCity(city);
    const totalHalls = list.length;
    res.status(HTTP_STATUS.OK).json({ totalHalls, list });
  }
}
