import { FC } from 'react';

export interface AvatarProps {
  image: string;
}

export const Avatar: FC<AvatarProps> = ({ image }) => {
  return (
    <img
      className="w-80 h-80 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
      src={image}
      alt="Bordered avatar"
    />
  );
};
