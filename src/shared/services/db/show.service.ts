import { IMovieQuery, IShowData } from "@show/interfaces/show.interface";
import { ShowModel } from "@show/models/show.model";

class ShowService {
  public async addShowToDB(createdShow: IShowData): Promise<IShowData> {
    const show = await ShowModel.create(createdShow);
    return show;
  }

  public async getShows(): Promise<IShowData[]> {
    const halls = await ShowModel.find();
    return halls;
  }

  public async totalShows(): Promise<number> {
    const count: number = await ShowModel.find({}).countDocuments();
    return count;
  }

  public async getShow(_id: string): Promise<IShowData> {
    const show = (await ShowModel.findById(_id)) as IShowData;
    return show;
  }

  public async getShowByFilter(filter: IMovieQuery): Promise<IShowData[]> {
    const { city, movieId } = filter;
    if (filter) {
      const show = (await ShowModel.find({ city, movie: movieId })) as IShowData[];
      return show;
    } else {
      const show = (await ShowModel.find()) as IShowData[];
      return show;
    }
  }

  public async getShowByCity(city: string): Promise<IShowData[]> {
    const show = (await ShowModel.find({ city })) as IShowData[];
    return show;
  }

  public async getShowByMovie(movieId: string): Promise<IShowData[]> {
    const show = (await ShowModel.find({ movie: movieId })) as IShowData[];
    return show;
  }

  public async updateShow(_id: string, showData: Partial<IShowData>): Promise<IShowData | null> {
    const updatedShow: IShowData | null = await ShowModel.findOneAndUpdate({ _id }, { $set: showData }, { new: true });
    return updatedShow;
  }

  public async deleteShow(_id: string): Promise<void> {
    await ShowModel.findOneAndDelete({ _id });
  }
}

export const showService: ShowService = new ShowService();
