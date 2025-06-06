import { Meta, StoryObj } from '@storybook/react';
import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetContent,
  BottomSheetFooter,
  BottomSheetRootProps,
  BottomSheetTitle,
  BottomSheetTrigger,
} from './BottomSheet';
import { BottomSheetContentProps } from './compound/Content';
import { BottomSheetCloseIconButton } from './compound/CloseIconButton';

const meta: Meta<BottomSheetRootProps> = {
  title: 'components/BottomSheet',
  component: BottomSheet,
};
export default meta;

const CONTENT = `
Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse
quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat
elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
`;

export const Default: StoryObj<BottomSheetContentProps> = {
  argTypes: {
    handleBar: {
      control: 'boolean',
    },
    handleClose: {
      control: 'inline-radio',
      options: ['true', 'false', '제공하는 CloseIconButton을 커스텀', '완전히 커스텀'],
      mapping: {
        true: true,
        false: false,
        '제공하는 CloseIconButton을 커스텀': (
          <BottomSheetCloseIconButton style={{ backgroundColor: 'red' }} onClick={() => alert('눌렀을 때 액션도 !!')} />
        ),
        '완전히 커스텀': (
          <img
            src="https://img1.daumcdn.net/thumb/C500x500/?fname=http://t1.daumcdn.net/brunch/service/user/7w5g/image/faefAuXAL7_eOVC7GpDI4BQwbaY.png"
            width={24}
          />
        ),
      },
    },
  },
  render: (args) => (
    <BottomSheet>
      <BottomSheetTrigger>
        <button className="bg-gray-100 px-[12px] py-[8px] rounded-10">누르면 바텀시트가 열려요</button>
      </BottomSheetTrigger>
      <BottomSheetContent {...args}>
        <BottomSheetBody style={{ paddingBottom: 100 }}>
          <BottomSheetTitle>이건 타이틀이에요</BottomSheetTitle>
          {CONTENT}
        </BottomSheetBody>
        <BottomSheetFooter>
          <button>버튼1</button>
          <button>버튼2</button>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  ),
};

export const Scrollable = () => {
  return (
    <BottomSheet>
      <BottomSheetTrigger>
        <button className="bg-gray-100 px-[12px] py-[8px] rounded-10">누르면 Scrollable 바텀시트가 열려요</button>
      </BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetBody style={{ paddingBottom: 100 }}>
          <BottomSheetTitle>이건 타이틀이에요</BottomSheetTitle>
          {CONTENT.repeat(10)}
        </BottomSheetBody>
        <BottomSheetFooter>
          <button>버튼1</button>
          <button>버튼2</button>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  );
};
