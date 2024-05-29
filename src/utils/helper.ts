import { AxiosError } from 'axios';
import moment from 'moment';
import { z } from 'zod';

export const kelvinToCelsius = (kelvin: number) => {
  return (kelvin - 273.15).toFixed(1);
};

export const formatDate = (dateString: string): string => {
  const date = moment(new Date(dateString));
  return date.format('DD-MM-YYYY hh:mm a');
};

interface CustomError {
  name: string;
  message: string;
  response?: { data: { message: string } };
}

export const getErrorMessage = (error: unknown): CustomError => {
  if (error instanceof z.ZodError) {
    return {
      name: 'Error',
      message: 'Something went wrong with Server. Please try again later',
    };
  }

  if (
    error instanceof Error ||
    ((error as AxiosError).isAxiosError && (error as AxiosError).response)
  ) {
    const axiosError = error as AxiosError;
    const errorMessage =
      (axiosError.response?.data as { message?: string })?.message ||
      axiosError.message;
    console.error(errorMessage);
    return { name: 'Error', message: errorMessage };
  }
  console.error('Unexpected error type:', error);
  return {
    name: 'Error',
    message: 'Something went wrong. Please try again later',
  };
};
