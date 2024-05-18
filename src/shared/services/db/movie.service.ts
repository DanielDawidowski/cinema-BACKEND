import { IMovieDocument } from "@movie/interfaces/movie.interface";
import { MovieModel } from "@movie/models/movie.model";

class MovieService {
  public async addMovieToDB(createdMovie: IMovieDocument): Promise<IMovieDocument> {
    const movie = await MovieModel.create(createdMovie);
    return movie;
  }

  public async getMovies(): Promise<IMovieDocument[]> {
    const movies = await MovieModel.find();
    return movies;
  }

  public async getMovie(id: string): Promise<IMovieDocument> {
    const movie = (await MovieModel.findOne({ name: id })) as IMovieDocument;
    return movie;
  }

  public async updateMovie(_id: string, hallData: Partial<IMovieDocument>): Promise<IMovieDocument | null> {
    const updatedHall: IMovieDocument | null = await MovieModel.findOneAndUpdate({ _id }, { $set: hallData }, { new: true });
    return updatedHall;
  }

  public async deleteMovie(_id: string): Promise<void> {
    await MovieModel.findOneAndDelete({ _id });
  }
}

export const movieService: MovieService = new MovieService();
