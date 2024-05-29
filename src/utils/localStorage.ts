import { WeatherInfoDataSchema } from '@aquariux/types/schemas';
import { z } from 'zod';

export const addToArray = <T>(key: string, value: T): void => {
  const existingArray = localStorage.getItem(key);
  const array = existingArray ? JSON.parse(existingArray) : [];
  array.unshift(value);
  localStorage.setItem(key, JSON.stringify(array));
};

export const getArray = <T>(key: string, schema: z.ZodType<T>): T[] => {
  const existingArray = localStorage.getItem(key);
  if (!existingArray) {
    return [];
  }

  const parsedArray = JSON.parse(existingArray);
  return schema.array().parse(parsedArray);
};

export const deleteHistoryById = (key: string, id: string): void => {
  const existingData = localStorage.getItem(key);
  if (existingData) {
    const parsedData = JSON.parse(existingData);
    const updatedData = WeatherInfoDataSchema.array()
      .parse(parsedData)
      .filter((item) => item.uuid !== id);
    localStorage.setItem(key, JSON.stringify(updatedData));
  }
};
