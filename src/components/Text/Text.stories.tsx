import { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'components/Text',
  component: Text,
};
export default meta;

export const Default: StoryObj<typeof Text> = {
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'div'],
    },
    fontWeight: {
      control: 'inline-radio',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'color',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: '동해물과 백두산이 마르고 닳도록',
  },
  render: (args) => <Text {...args} />,
};

export const TextSnapshot: StoryObj<typeof Text> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          title-24
        </Text>
        <Text variant="title-24">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          title-20
        </Text>
        <Text variant="title-20">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          title-18
        </Text>
        <Text variant="title-18">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          subtitle-16
        </Text>
        <Text variant="subtitle-16">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          subtitle-14
        </Text>
        <Text variant="subtitle-14">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          body-16
        </Text>
        <Text variant="body-16">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          body-14
        </Text>
        <Text variant="body-14">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          caption-13
        </Text>
        <Text variant="caption-13">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          caption-12
        </Text>
        <Text variant="caption-12">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          label-16
        </Text>
        <Text variant="label-16">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          label-14
        </Text>
        <Text variant="label-14">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          label-12
        </Text>
        <Text variant="label-12">동해물과 백두산이 마르고 닳도록</Text>
      </div>
      <div className="flex items-center gap-4">
        <Text variant="label-14" className="w-24">
          label-11
        </Text>
        <Text variant="label-11">동해물과 백두산이 마르고 닳도록</Text>
      </div>
    </div>
  ),
};
