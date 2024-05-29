import { AxiosError, AxiosRequestHeaders } from 'axios';
import { z } from 'zod';
import { kelvinToCelsius, getErrorMessage } from '../helper';

describe('Utility Functions', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('kelvinToCelsius', () => {
    it('converts Kelvin to Celsius correctly', () => {
      expect(kelvinToCelsius(300)).toBe('26.9');
      expect(kelvinToCelsius(0)).toBe('-273.1');
    });
  });

  describe('getErrorMessage', () => {
    it('returns custom error message for ZodError', () => {
      const zodError = new z.ZodError([]);
      const errorMessage = getErrorMessage(zodError);
      expect(errorMessage.message).toBe(
        'Something went wrong with Server. Please try again later'
      );
    });

    it('returns custom error message for AxiosError', () => {
      const axiosError: AxiosError = {
        isAxiosError: true,
        message: 'Axios error message',
        name: 'AxiosError',
        toJSON: jest.fn(),
        response: {
          data: {
            message: 'Error from server',
          },
          status: 500,
          statusText: 'Internal Server Error',
          headers: {},
          config: {
            headers: {} as AxiosRequestHeaders,
          },
        },
      };
      const errorMessage = getErrorMessage(axiosError);
      expect(errorMessage.message).toBe('Error from server');
    });

    it('returns default error message for unexpected error types', () => {
      const errorMessage = getErrorMessage(new Error('Unexpected error'));
      expect(errorMessage.message).toBe('Unexpected error');
    });
  });
});
