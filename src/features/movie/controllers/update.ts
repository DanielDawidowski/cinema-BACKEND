import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { UploadApiResponse } from "cloudinary";
import { movieService } from "@service/db/movie.service";
import { IMovieDocument } from "@movie/interfaces/movie.interface";
import { movieSchema } from "@movie/schemes/movie.scheme";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { BadRequestError } from "@global/helpers/error-handler";
import { uploads } from "@global/helpers/cloudinary-upload";

export class Update {
  @joiValidation(movieSchema)
  public async movie(req: Request, res: Response): Promise<void> {
    const { imgId, imgVersion } = req.body;
    if (imgId && imgVersion) {
      Update.prototype.updatedMovie(req);
    } else {
      const result: UploadApiResponse = await Update.prototype.addImageToExistingMovie(req);
      if (!result.public_id) {
        throw new BadRequestError(result.message);
      }
    }
    res.status(HTTP_STATUS.OK).json({ message: "Movie updated successfully" });
  }

  private async updatedMovie(req: Request): Promise<void> {
    const { name, category, description, director, actors, imgId, imgVersion } = req.body;
    const { movieId } = req.params;
    const updatedMovie: IMovieDocument = {
      name,
      category,
      description,
      director,
      actors,
      imgId: imgId ? imgId : "",
      imgVersion: imgVersion ? imgVersion : ""
    } as IMovieDocument;

    await movieService.updateMovie(movieId, updatedMovie);
  }

  private async addImageToExistingMovie(req: Request): Promise<UploadApiResponse> {
    const { name, category, description, director, actors, img } = req.body;
    const { movieId } = req.params;
    const result: UploadApiResponse = (await uploads(img)) as UploadApiResponse;

    if (!result?.public_id) {
      return result;
    }

    const updatedMovie: IMovieDocument = {
      name,
      category,
      description,
      director,
      actors,
      imgId: img ? result.public_id : "",
      imgVersion: img ? result.version.toString() : ""
    } as IMovieDocument;

    updatedMovie.img = `https://res.cloudinary.com/dandawid/image/upload/v${result.version}/${result.public_id}`;

    await movieService.updateMovie(movieId, updatedMovie);

    return result;
  }
}
