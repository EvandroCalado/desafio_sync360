import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from '.';

export default {
  title: 'Components/Input',
  args: {
    label: 'label',
    type: 'text',
  },
  component: Input,
} as Meta;

export const Default: StoryFn<InputProps> = (args) => <Input {...args} />;
