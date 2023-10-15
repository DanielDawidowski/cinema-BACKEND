import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { hallService } from "@service/db/hall.service";

export class Delete {
  public async hall(req: Request, res: Response): Promise<void> {
    const { hallId } = req.params;
    await hallService.deleteHall(hallId);
    res.status(HTTP_STATUS.OK).json({ message: "Hall deleted" });
  }
}
