import { Meta, StoryObj } from '@storybook/react';
import { Map, MapMarker, MapProps } from './Map';
import { KakKaoMapProvider } from '@/contexts/KaKaoMapProvider';
import { getCenterPosition } from './utils';

const meta: Meta = {
  title: 'components/Map',
  component: Map,
  decorators: [
    (Story) => (
      <KakKaoMapProvider>
        <Story />
      </KakKaoMapProvider>
    ),
  ],
};
export default meta;

export const Default: StoryObj<MapProps> = {
  name: 'Default',
  argTypes: {
    size: {
      control: 'number',
    },
    level: {
      control: 'number',
    },
    draggable: {
      control: 'boolean',
    },
    disableDoubleClickZoom: {
      control: 'boolean',
    },
  },
  args: {
    size: 350,
    level: 3,
    draggable: true,
  },
  render: (args) => <Map {...args} />,
};

const pins = [
  {
    imageSrc: 'https://grepp-programmers.s3.amazonaws.com/production/company/logo/2767/toss.png',
    lat: 37.4997419,
    lng: 127.0348105,
  },
  {
    imageSrc:
      'https://about.daangn.com/static/63d3abb868d7a650b4c0383be7891252/e9ec68d0-e49d-4071-bf92-78ed3355003f_profile_daangn.png',
    lat: 37.5037208,
    lng: 127.0240967,
  },
];

export const PinInMap: StoryObj = {
  name: 'Pin in Map',
  render: () => (
    <Map size={350} level={5} center={getCenterPosition(pins.map(({ lat, lng }) => ({ lat, lng })))}>
      {pins.map(({ imageSrc, lat, lng }) => (
        <MapMarker position={{ lat, lng }} image={{ src: imageSrc, size: 40 }} />
      ))}
    </Map>
  ),
};
