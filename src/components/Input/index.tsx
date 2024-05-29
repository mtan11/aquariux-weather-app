import { FC, KeyboardEvent } from 'react';

interface InputProps {
  placeHolder: string;
  label: string;
  value: string;
  handleInputChange: (value: string) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  placeHolder,
  label,
  value,
  handleInputChange,
  handleKeyDown,
}) => {
  return (
    <div className="relative h-10 w-full min-w-[200px] rounded-lg bg-white/40 px-4 dark:bg-black/50 md:h-[60px] md:rounded-2xl">
      <input
        onChange={(e) => handleInputChange(e?.target?.value)}
        onKeyDown={handleKeyDown}
        value={value}
        placeholder={placeHolder}
        className="= disabled:bg-blue-gray-50 peer h-full w-full bg-transparent pb-1.5 pt-1.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder:opacity-0 focus:outline-0 focus:placeholder:opacity-100 dark:text-white"
      />
      <label className="after:content[''] peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1 left-0 flex h-full w-full select-none !overflow-visible truncate px-4 text-[11px] font-normal leading-tight text-black/40 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0  after:transition-transform after:duration-300 peer-placeholder-shown:-top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:top-0 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black/40 peer-focus:after:scale-x-100 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black/40 dark:text-white/40 dark:peer-focus:text-white/40 md:top-1 md:peer-placeholder-shown:top-0 md:peer-focus:top-1">
        {label}
      </label>
    </div>
  );
};

export default Input;
