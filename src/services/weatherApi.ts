import { WeatherInfo } from '@aquariux/types';
import BaseClient from './baseClient';
import { PATH_GET_WEATHER } from '@aquariux/constants';
import { WeatherInfoSchema } from '@aquariux/types/schemas';

interface Params {
  q: string;
}

export class WeatherApi extends BaseClient {
  constructor(clientOptions = {}) {
    super(clientOptions);
  }

  getWeatherByCityName = async (params: Params) => {
    const res = await this.client.get<WeatherInfo>(PATH_GET_WEATHER, {
      params,
    });

    const newRes = WeatherInfoSchema.safeParse(res.data);
    if (!newRes.success) throw Error('Some thing went wrong');
    return newRes.data;
  };
}

const weatherApi = new WeatherApi();

export default weatherApi;
