import { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProps } from './Icon';

const meta: Meta = {
  title: 'components/Icon',
  component: Icon,
};
export default meta;

export const Basic: StoryObj<IconProps> = {
  argTypes: {
    name: {
      description: 'SVG 폴더에서 아이콘 컴포넌트를 선언한 후 name을 맵핑 처리하여 사용해주세요',
    },
  },
  args: {
    name: 'X',
  },
  render: (args) => <Icon {...args} />,
};
