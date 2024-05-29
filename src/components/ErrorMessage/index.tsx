import classNames from 'classnames';
import { memo } from 'react';

const ErrorMessage = memo(
  ({
    title,
    message,
    className,
  }: {
    title?: string;
    message: string;
    className?: string;
  }) => {
    return (
      <div
        className={classNames(
          ['flex h-full w-full flex-col items-center justify-center gap-4'],
          className
        )}
      >
        {title && (
          <h4 className="text-4xl font-extrabold text-red-500">{title}</h4>
        )}
        <p className="text-xl font-medium text-red-500">
          {message.toUpperCase()}
        </p>
      </div>
    );
  }
);

export default ErrorMessage;
