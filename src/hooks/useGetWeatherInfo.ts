import weatherApi from '@aquariux/services/weatherApi';
import { WeatherInfoData } from '@aquariux/types';
import { useMutation } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

const useGetWeatherInfo = (
  handleOnSuccess: (data: WeatherInfoData) => void
) => {
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: async (name: string) => {
      const result = await weatherApi.getWeatherByCityName({ q: name });
      return {
        ...result,
        dateTime: new Date().toString(),
        uuid: uuidv4(),
      };
    },
    onSuccess: (data) => {
      handleOnSuccess(data);
    },
  });

  return { data, isLoading: isPending, isError, error, triggerSearch: mutate };
};

export default useGetWeatherInfo;
