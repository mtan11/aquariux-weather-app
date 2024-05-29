import { z } from 'zod';

export const MainSchema = z.object({
  temp: z.number(),
  temp_min: z.number(),
  temp_max: z.number(),
  humidity: z.number(),
});

export const SysSchema = z.object({
  country: z.string(),
  sunrise: z.number(),
  sunset: z.number(),
});

export const WeatherSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

export const WindSchema = z.object({
  speed: z.number(),
  deg: z.number(),
});

export const WeatherInfoSchema = z.object({
  weather: z.array(WeatherSchema),
  base: z.string(),
  main: MainSchema,
  visibility: z.number(),
  wind: WindSchema,
  sys: SysSchema,
  timezone: z.number(),
  id: z.number(),
  name: z.string(),
  cod: z.number(),
});

export const WeatherInfoDataSchema = WeatherInfoSchema.extend({
  dateTime: z.string().optional(),
  uuid: z.string().uuid(),
});
