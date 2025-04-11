import { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'components/Text',
  component: Text,
};
export default meta;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: '동해물과 백두산이 마르고 닳도록',
  },
  render: (args) => <Text as="label" {...args} />,
};
