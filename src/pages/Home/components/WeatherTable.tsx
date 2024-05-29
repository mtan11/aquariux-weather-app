import { formatDate, kelvinToCelsius } from '@aquariux/utils/helper';

interface WeatherTableProps {
  temp: number;
  main: string;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  cityName: string;
  country: string;
  dateTime: string;
}

const WeatherTable = ({
  temp,
  main,
  maxTemp,
  minTemp,
  humidity,
  cityName,
  country,
  dateTime,
}: WeatherTableProps) => {
  return (
    <>
      <p className="text-sm font-semibold md:text-base">Today’s Weather</p>
      <div className="flex items-end justify-between">
        <h3 className="text-5xl font-bold text-purple-1 dark:text-white md:text-7xl">
          {kelvinToCelsius(temp)}°
        </h3>
        <p className="block text-sm md:hidden">{main}</p>
      </div>
      <div className="flex items-end justify-between text-sm md:text-base">
        <p className="font-semibold">
          H: {kelvinToCelsius(maxTemp)}° L: {kelvinToCelsius(minTemp)}°
        </p>
        <p className="block text-sm md:hidden">Humidity: {humidity}%</p>
      </div>
      <div className="flex justify-between text-sm text-gray-1 dark:text-white md:text-base">
        <p className="font-bold">
          {cityName}, {country}
        </p>
        <p>{formatDate(dateTime ?? '')}</p>
        <p className="hidden md:block">Humidity: {humidity}%</p>
        <p className="hidden md:block">{main}</p>
      </div>
    </>
  );
};

export default WeatherTable;
