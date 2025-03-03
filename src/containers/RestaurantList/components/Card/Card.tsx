import { CSSProperties } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { RestaurantMetaType } from '../../type';
import { DistanceIcon } from '../Icons/DistanceIcon';
import { Spacing } from '@/components/Spacing';
import 'keen-slider/keen-slider.min.css';

interface Props extends RestaurantMetaType {}

export function Card({ name, distance, menu, prices, recommends, imageSrcs, comments }: Props) {
  const [imageSlideRef] = useKeenSlider({
    mode: 'free',
    slides: {
      perView: 3,
      spacing: 8,
    },
  });
  const [commentSlideRef] = useKeenSlider({
    mode: 'free',
    slides: {
      perView: 2,
      spacing: 8,
    },
  });

  return (
    <div style={containerStyle}>
      <div style={topStyle}>
        <div style={topLeftStyle}>
          <span style={nameStyle}>{name}</span>
          <span style={menuStyle}>{menu}</span>
        </div>
        <div style={topRightStyle}>
          <DistanceIcon />
          <span style={distanceStyle}>{distance}m</span>
        </div>
      </div>
      <Spacing size={12} />
      <ul style={tagListStyle}>
        {prices.map((price) => (
          <li key={price} style={priceTagStyle}>
            {price}
          </li>
        ))}
        {recommends.map((recommend) => (
          <li key={recommend} style={recommendTagStyle}>
            {recommend}
          </li>
        ))}
      </ul>
      <Spacing size={12} />
      <ul style={imgListStyle} ref={imageSlideRef} className="keen-slider">
        {imageSrcs.map((imgSrc) => (
          <li style={imgItemStyle} className="keen-slider__slide">
            <img src={imgSrc} alt="" />
          </li>
        ))}
      </ul>
      <Spacing size={12} />
      <ul style={commentListStyle} ref={commentSlideRef}>
        {comments.map((comment, index) => (
          <li key={index} style={commentItemStyle}>
            <div style={commentItemTopStyle}>
              <img src={comment.profileImg} style={commentImgStyle} />
              <span style={commentProfileStyle}>{comment.nickname}</span>
            </div>
            <Spacing size={6} />
            <span style={commentContentStyle}>{comment.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle: CSSProperties = {
  width: '100%',
  paddingBottom: 20,
  borderBottom: '1px solid #EAEBEE',
};

const topStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const topLeftStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const topRightStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
};

const nameStyle: CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
};

const menuStyle: CSSProperties = {
  fontSize: 16,
  fontWeight: 500,
  color: '#868B94',
};

const distanceStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 400,
  color: '#868B94',
};

const tagListStyle: CSSProperties = {
  gap: 4,
  display: 'flex',
  flexWrap: 'wrap',
  borderRadius: 6,
};

const priceTagStyle: CSSProperties = {
  padding: '4px 8px',
  borderRadius: 6,
  fontWeight: 700,
  fontSize: 12,
  color: '#4D5159',
  backgroundColor: '#F2F3F6',
};

const recommendTagStyle: CSSProperties = {
  padding: '4px 8px',
  borderRadius: 6,
  fontWeight: 700,
  fontSize: 12,
  color: '#FE6F0F',
  backgroundColor: '#FFF5F0',
};

const imgListStyle: CSSProperties = {
  padding: 0,
  margin: 0,
  display: 'flex',
};

const imgItemStyle: CSSProperties = {
  width: 164,
  height: 120,
  backgroundColor: 'gray',
  borderRadius: 8,
};

const commentListStyle: CSSProperties = {
  padding: 0,
  margin: 0,
  display: 'flex',
  overflow: 'auto',
  gap: 8,
};

const commentItemStyle: CSSProperties = {
  width: 278,
  backgroundColor: '#F7F8FA',
  borderRadius: 8,
  padding: '10px 12px 12px 12px',
};

const commentItemTopStyle: CSSProperties = {
  display: 'flex',
  gap: 4,
};

const commentImgStyle: CSSProperties = {
  width: 18,
  height: 18,
  borderRadius: 18,
};

const commentProfileStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: '#4D5159',
};

const commentContentStyle: CSSProperties = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 1,
  color: '#212124',
  fontSize: 14,
  fontWeight: 400,
};
