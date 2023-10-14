import { ICityData } from "@city/interfaces/city.interface";
import { CityModel } from "@city/models/city.model";

class CityService {
  public async addCityToDB(cityData: ICityData): Promise<void> {
    await CityModel.create(cityData);
  }

  public async getCities(): Promise<ICityData[]> {
    const cities = await CityModel.find();
    return cities;
  }

  public async getCity(id: string): Promise<ICityData> {
    const city = (await CityModel.findById(id)) as ICityData;
    return city;
  }

  public async updateCity(_id: string, cityData: Partial<ICityData>): Promise<ICityData | null> {
    const updatedCity: ICityData | null = await CityModel.findOneAndUpdate({ _id }, { $set: cityData }, { new: true });
    return updatedCity;
  }

  public async deleteCity(_id: string): Promise<void> {
    await CityModel.findOneAndDelete({ _id });
  }
}

export const cityService: CityService = new CityService();
