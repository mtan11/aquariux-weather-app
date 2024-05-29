import { WeatherInfoData } from '@aquariux/types';
import { formatDate } from '@aquariux/utils/helper';
import SearchIconLight from '@aquariux/assets/images/search-icon-gray.png';
import DeleteIconLight from '@aquariux/assets/images/delete-icon-gray.png';
import SearchIconDark from '@aquariux/assets/images/search-icon-dark.png';
import DeleteIconDark from '@aquariux/assets/images/delete-icon-dark.png';

interface HistoryItemProps {
  history: WeatherInfoData;
  triggerSearch: (name: string) => void;
  handleDelete: (id: string) => void;
}
export const HistoryItem = ({
  history,
  triggerSearch,
  handleDelete,
}: HistoryItemProps) => {
  return (
    <div
      key={history.uuid}
      className="flex items-center justify-between rounded-2xl bg-white/40 p-3 dark:bg-dark-1/50"
    >
      <div className="mr-2 flex w-full flex-col justify-between gap-1 md:flex-row">
        <p>
          {history?.name}, {history?.sys.country}
        </p>
        <p className="dark:text-white/50">
          {formatDate(history.dateTime ?? '')}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => triggerSearch(history.name)}
          className="flex size-[34px] items-center justify-center rounded-full bg-white dark:border-2 dark:border-solid dark:border-white/40 dark:bg-transparent"
        >
          <img src={SearchIconLight} className="dark:hidden" alt="search" />
          <img
            src={SearchIconDark}
            className="hidden dark:block"
            alt="search"
          />
        </button>
        <button
          onClick={() => handleDelete(history.uuid)}
          className="flex size-[34px] items-center justify-center rounded-full bg-white dark:border-2 dark:border-solid dark:border-white/40 dark:bg-transparent"
        >
          <img src={DeleteIconLight} className="dark:hidden" alt="delete" />
          <img
            src={DeleteIconDark}
            className="hidden dark:block"
            alt="delete"
          />
        </button>
      </div>
    </div>
  );
};
