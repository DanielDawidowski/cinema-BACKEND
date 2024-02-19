import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { ObjectId } from "mongodb";
import { UploadApiResponse } from "cloudinary";
import { IMovieDocument } from "@movie/interfaces/movie.interface";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { movieSchema } from "@movie/schemes/movie.scheme";
import { BadRequestError } from "@global/helpers/error-handler";
import { uploads } from "@global/helpers/cloudinary-upload";
import { movieService } from "@service/db/movie.service";

export class Create {
  @joiValidation(movieSchema)
  public async movie(req: Request, res: Response): Promise<void> {
    const { name, img, category, description, director, actors } = req.body;

    const result: UploadApiResponse = (await uploads(img)) as UploadApiResponse;
    if (!result?.public_id) {
      throw new BadRequestError(result.message);
    }

    const movieObjectId: ObjectId = new ObjectId();
    const createdMovie: IMovieDocument = {
      _id: movieObjectId,
      userId: req.currentUser!.userId,
      username: req.currentUser!.username,
      name,
      category,
      description,
      director,
      actors,
      img: `https://res.cloudinary.com/dandawid/image/upload/v${result.version}/${result.public_id}`,
      imgVersion: result.version.toString(),
      imgId: result.public_id,
      createdAt: new Date()
    } as IMovieDocument;

    const movieDataForDB: IMovieDocument = Create.prototype.movieData(createdMovie, movieObjectId);
    movieDataForDB.img = `https://res.cloudinary.com/dandawid/image/upload/v${result.version}/${result.public_id}`;

    await movieService.addMovieToDB(createdMovie);
    res.status(HTTP_STATUS.CREATED).json({ message: "Movie added", createdMovie });
  }

  private movieData(data: IMovieDocument, movieObjectId: ObjectId): IMovieDocument {
    const { name, category, description, director, actors, img } = data;
    const createdMovie: IMovieDocument = {
      _id: movieObjectId,
      userId: data.userId,
      username: data.username,
      name,
      category,
      description,
      director,
      actors,
      img,
      imgId: "",
      imgVersion: "",
      createdAt: new Date()
    } as IMovieDocument;

    return createdMovie;
  }
}
