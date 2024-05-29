import { KeyboardEvent, useMemo, useState } from 'react';
import Layout from '@aquariux/layout';
import { Container, ErrorMessage, Spinner } from '@aquariux/components';
import {
  getErrorMessage,
} from '@aquariux/utils/helper';
import useGetWeatherInfo from '@aquariux/hooks/useGetWeatherInfo';
import BgImgLight from '@aquariux/assets/images/bg-light.png';
import BgImgDark from '@aquariux/assets/images/bg-dark.png';
import SunImg from '@aquariux/assets/images/sun.png';
import SearchIcon from '@aquariux/assets/images/search-icon.png';

import Input from '@aquariux/components/Input';
import { HISTORY_QUERY } from '@aquariux/constants';
import {
  addToArray,
  deleteHistoryById,
  getArray,
} from '@aquariux/utils/localStorage';
import { WeatherInfoData } from '@aquariux/types';
import { WeatherInfoDataSchema } from '@aquariux/types/schemas';
import { HistoryItem } from './components/HistoryItem';
import { useBrowserMode } from '@aquariux/hooks/useBrowserMode';
import SwitchButton from './components/SwitchButton';
import WeatherTable from './components/WeatherTable';

const Home = () => {
  const [colorTheme, setTheme] = useBrowserMode();
  const [historyItems, setHistoryItems] = useState(
    getArray(HISTORY_QUERY, WeatherInfoDataSchema)
  );
  const [searchText, setSearchText] = useState('');
  const handleSuccess = (weatherData: WeatherInfoData) => {
    addToArray(HISTORY_QUERY, weatherData);
    setHistoryItems((prev) => [weatherData, ...prev]);
    setSearchText('');
  };
  const { data, isLoading, error, isError, triggerSearch } =
    useGetWeatherInfo(handleSuccess);

  const currentWeather = data ?? historyItems[0];

  const errorMessage = useMemo(
    () =>
      isError
        ? getErrorMessage(error)
        : {
          name: 'Error',
          message: 'Something went wrong with Server. Please try again later',
        },
    [error, isError]
  );

  const handleSearch = () => {
    triggerSearch(searchText);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchText.toString().trim() !== '') {
      handleSearch();
    }
  };

  const handleDeleteHistory = (id: string) => {
    deleteHistoryById(HISTORY_QUERY, id);
    setHistoryItems((prevHistory) =>
      prevHistory.filter((item) => item.uuid !== id)
    );
  };

  return (
    <Layout>
      <div
        className="h-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${colorTheme === 'dark' ? BgImgLight : BgImgDark})`,
        }}
      >
        <Container>
          <div className="mt-20 w-full max-w-[700px]">
            <div className="mb-2 flex w-full justify-end">
              <SwitchButton
                onClick={() =>
                  setTheme((prev) => {
                    return prev === 'dark' ? 'light' : 'dark';
                  })
                }
              />
            </div>
            <div className="mb-16 flex w-full gap-2 md:mb-24 md:gap-5">
              <Input
                value={searchText}
                handleKeyDown={handleKeyDown}
                handleInputChange={setSearchText}
                placeHolder="Enter City Or Country Name"
                label="Country"
              />
              <button
                onClick={handleSearch}
                className="flex size-10 min-w-10 items-center justify-center rounded-lg bg-purple-1 dark:bg-purple-2 md:size-[60px] md:min-w-[60px] md:rounded-2xl"
                name='search button'
              >
                <img
                  className="size-6 md:size-[34px]"
                  src={SearchIcon}
                  alt="search"
                />
              </button>
            </div>
            <div className="relative min-h-[500px] w-full rounded-[20px] border border-solid border-white/50 bg-white/20 p-4 dark:border-none dark:bg-dark-1/30 lg:rounded-[40px] lg:p-12">
              <img
                src={SunImg}
                className="absolute -top-16 right-0 w-[157px] md:-top-24 md:w-[281px]"
                alt="header"
              />
              <div className="flex flex-col gap-1 dark:text-white md:gap-3">
                {isLoading ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <Spinner />
                  </div>
                ) : (
                  currentWeather && (
                    <WeatherTable
                      temp={currentWeather?.main.temp}
                      main={currentWeather?.weather[0].main}
                      maxTemp={currentWeather?.main.temp_max}
                      minTemp={currentWeather?.main.temp_min}
                      humidity={currentWeather?.main.humidity}
                      cityName={currentWeather?.name}
                      country={currentWeather?.sys.country}
                      dateTime={currentWeather.dateTime ?? ''}
                    />
                  )
                )}
                {isError && <ErrorMessage message={errorMessage.message} />}
                {historyItems.length > 0 ? (
                  <div className="w-full rounded-3xl bg-white/20 p-5 dark:bg-dark-1/30">
                    <h4 className="mb-6 font-semibold">Search History</h4>
                    <div className="flex w-full flex-col gap-3">
                      {historyItems.map((history: WeatherInfoData) => {
                        return (
                          <HistoryItem
                            key={history.uuid}
                            history={history}
                            triggerSearch={triggerSearch}
                            handleDelete={handleDeleteHistory}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="h-full w-full">
                    <h3 className="text-center text-xl">No data</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
