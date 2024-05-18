import { IMovieQuery, IShowData } from "@show/interfaces/show.interface";
import { ShowModel } from "@show/models/show.model";

class ShowService {
  public async addShowToDB(createdShow: IShowData): Promise<IShowData> {
    const show = await ShowModel.create(createdShow);
    return show;
  }

  public async totalShows(): Promise<number> {
    const count: number = await ShowModel.find({}).countDocuments();
    return count;
  }

  public async getShow(_id: string): Promise<IShowData> {
    const show = (await ShowModel.findById(_id)) as IShowData;
    return show;
  }

  public async getShowByFilter(query: IMovieQuery): Promise<IShowData[]> {
    const { city, movieId } = query;
    if (city && !movieId && city?.length !== 24) {
      const shows = this.getShowByCity(city);
      return shows;
    } else if (city?.length === 24) {
      const shows = this.getShowByMovie(city);
      return shows;
    } else if (city && movieId) {
      const shows = (await ShowModel.find({ city, "movie._id": movieId })) as IShowData[];
      return shows;
    } else {
      const shows = this.getShows();
      return shows;
    }
  }

  public async getShows(): Promise<IShowData[]> {
    const shows = await ShowModel.find();
    return shows;
  }

  public async getShowByCity(city: string): Promise<IShowData[]> {
    const show = (await ShowModel.find({ city })) as IShowData[];
    return show;
  }

  public async getShowByMovie(movieId: string): Promise<IShowData[]> {
    const show = (await ShowModel.find({ "movie._id": movieId })) as IShowData[];
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
