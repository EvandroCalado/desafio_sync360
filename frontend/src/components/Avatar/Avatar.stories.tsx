import { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarProps } from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    image: 'https://avatars.githubusercontent.com/u/110628201?v=4',
  },
} as Meta;

export const Default: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;
