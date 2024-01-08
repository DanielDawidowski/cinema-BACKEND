import { ICityDocument } from "@city/interfaces/city.interface";
import { CityModel } from "@city/models/city.model";

class CityService {
  public async addCityToDB(cityData: ICityDocument): Promise<void> {
    await CityModel.create(cityData);
  }

  public async getCities(): Promise<ICityDocument[]> {
    const cities = await CityModel.find();
    return cities;
  }

  public async getCity(id: string): Promise<ICityDocument> {
    const city = (await CityModel.findById(id)) as ICityDocument;
    return city;
  }

  public async updateCity(_id: string, cityData: Partial<ICityDocument>): Promise<ICityDocument | null> {
    const updatedCity: ICityDocument | null = await CityModel.findOneAndUpdate({ _id }, { $set: cityData }, { new: true });
    return updatedCity;
  }

  public async deleteCity(_id: string): Promise<void> {
    await CityModel.findOneAndDelete({ _id });
  }
}

export const cityService: CityService = new CityService();
