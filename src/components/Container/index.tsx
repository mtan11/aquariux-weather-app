import { FC, ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <div
      className={`container mx-auto flex justify-center p-4 md:p-8 xl:px-0 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
