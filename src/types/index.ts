import { z } from 'zod';
import {
  WeatherInfoSchema,
  WeatherInfoDataSchema,
  WindSchema,
  WeatherSchema,
  SysSchema,
  MainSchema,
} from './schemas';

export type WeatherInfo = z.infer<typeof WeatherInfoSchema>;
export type WeatherInfoData = z.infer<typeof WeatherInfoDataSchema>;
export type Wind = z.infer<typeof WindSchema>;
export type Weather = z.infer<typeof WeatherSchema>;
export type Sys = z.infer<typeof SysSchema>;
export type Main = z.infer<typeof MainSchema>;

export type Function = () => void;
