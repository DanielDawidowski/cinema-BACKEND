import { IShowDocument } from "@show/interfaces/show.interface";
import { ShowModel } from "@show/models/show.model";

class ShowService {
  public async addShowToDB(createdShow: IShowDocument): Promise<IShowDocument> {
    const show = await ShowModel.create(createdShow);
    return show;
  }

  public async getShows(): Promise<IShowDocument[]> {
    const shows = await ShowModel.find();
    return shows;
  }

  public async getShow(_id: string): Promise<IShowDocument> {
    const show = (await ShowModel.findById(_id)) as IShowDocument;
    return show;
  }

  public async updateShow(_id: string, showData: Partial<IShowDocument>): Promise<IShowDocument | null> {
    const updatedShow: IShowDocument | null = await ShowModel.findOneAndUpdate({ _id }, { $set: showData }, { new: true });
    return updatedShow;
  }

  public async deleteShow(_id: string): Promise<void> {
    await ShowModel.findOneAndDelete({ _id });
  }
}

export const showService: ShowService = new ShowService();
