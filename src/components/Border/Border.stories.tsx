import { Border, BorderProps } from './Border';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<BorderProps> = {
  title: 'components/Border',
  component: Border,
};
export default meta;

export const Default: StoryObj<BorderProps> = {
  argTypes: {
    color: {
      control: 'color',
    },
  },
  render: (args) => <Border {...args} />,
};
