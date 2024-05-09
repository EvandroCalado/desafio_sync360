import { FC } from 'react';

export interface AvatarProps {
  image: string;
}

export const Avatar: FC<AvatarProps> = ({ image }) => {
  return (
    <img
      className="w-60 h-60 md:w-72 md:h-72 xl:w-80 xl:h-80 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
      alt="avatar"
      src={image}
    />
  );
};
