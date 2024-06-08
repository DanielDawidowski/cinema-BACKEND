import mongoose from "mongoose";
import { IShowData } from "@show/interfaces/show.interface";
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

  public async getShowByFilter(movieId?: string, city?: string): Promise<IShowData[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matchCriteria: any = {};

    if (movieId) {
      matchCriteria["movie._id"] = new mongoose.Types.ObjectId(movieId);
    }

    if (city) {
      matchCriteria.city = city;
    }

    const result = await ShowModel.aggregate([
      {
        $match: matchCriteria
      },
      {
        $group: {
          _id: "$movie._id",
          movie: { $first: "$movie" },
          shows: {
            $push: {
              _id: "$_id",
              userId: "$userId",
              username: "$username",
              city: "$city",
              hall: "$hall",
              time: "$time",
              createdAt: "$createdAt",
              __v: "$__v"
            }
          }
        }
      }
    ]);
    return result;
  }
  // const shows = await ShowModel.aggregate([
  //   {
  //     $group: {
  //       _id: "$movie._id",
  //       showtimes: {
  //         $push: {
  //           time: "$time"
  //         }
  //       }
  //     }
  //   }
  // ]);
  // return shows;

  public async getShows(movieId?: string, city?: string): Promise<IShowData[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matchCriteria: any = {};

    if (movieId) {
      matchCriteria["movie._id"] = new mongoose.Types.ObjectId(movieId);
    }

    if (city) {
      matchCriteria.city = city;
    }
    const result = await ShowModel.aggregate([
      {
        $match: matchCriteria
      }
    ]);
    return result;
  }

  public async getShowByCity(city: string): Promise<IShowData[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matchCriteria: any = {};

    if (city) {
      matchCriteria.city = city;
    }
    const result = await ShowModel.aggregate([
      {
        $match: matchCriteria
      },
      {
        $sort: { time: 1 }
      },
      {
        $group: {
          _id: "$movie._id",
          movie: { $first: "$movie" },
          shows: {
            $push: {
              _id: "$_id",
              userId: "$userId",
              username: "$username",
              city: "$city",
              hall: "$hall",
              time: "$time",
              createdAt: "$createdAt",
              __v: "$__v"
            }
          }
        }
      }
    ]);
    return result;
  }

  public async getShowByMovie(city: string, movieId: string): Promise<IShowData[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matchCriteria: any = {};

    if (movieId) {
      matchCriteria["movie.name"] = movieId;
    }

    if (city) {
      matchCriteria.city = city;
    }

    const result = await ShowModel.aggregate([
      {
        $match: matchCriteria
      },
      {
        $sort: { time: 1 }
      },
      {
        $group: {
          _id: "$movie._id",
          movie: { $first: "$movie" },
          shows: {
            $push: {
              _id: "$_id",
              userId: "$userId",
              username: "$username",
              city: "$city",
              hall: "$hall",
              time: "$time",
              createdAt: "$createdAt",
              __v: "$__v"
            }
          }
        }
      }
    ]);
    return result;
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
