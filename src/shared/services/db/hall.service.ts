import { IHallData } from "@hall/interfaces/hall.interface";
import { HallModel } from "@hall/models/hall.model";

class HallService {
  public async addHallToDB(hallData: IHallData): Promise<IHallData> {
    const hall = await HallModel.create(hallData);
    return hall;
  }

  public async getHalls(): Promise<IHallData[]> {
    const halls = await HallModel.find();
    return halls;
  }

  public async getHall(id: string): Promise<IHallData> {
    const hall = (await HallModel.findById(id)) as IHallData;
    return hall;
  }

  public async getHallByCity(city: string): Promise<IHallData[]> {
    const hall = (await HallModel.find({ city })) as IHallData[];
    return hall;
  }

  public async updateHall(_id: string, hallData: Partial<IHallData>): Promise<IHallData | null> {
    const updatedHall: IHallData | null = await HallModel.findOneAndUpdate({ _id }, { $set: hallData }, { new: true });
    return updatedHall;
  }

  public async deleteHall(_id: string): Promise<void> {
    await HallModel.findOneAndDelete({ _id });
  }
}

export const hallService: HallService = new HallService();
