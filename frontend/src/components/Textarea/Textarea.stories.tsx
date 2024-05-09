import { Meta, StoryFn } from '@storybook/react';
import { Textarea, TextareaProps } from '.';

export default {
  title: 'Components/ Textarea',
  component: Textarea,
  args: {
    label: 'Label',
  },
} as Meta;

export const Default: StoryFn<TextareaProps> = (args) => <Textarea {...args} />;
