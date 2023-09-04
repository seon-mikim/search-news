import React from 'react';
interface NewsCardItemImageProps {
  image: string;
}

const NewsCardItemImage = ({ image }: NewsCardItemImageProps) => {
  return <div>{image}</div>;
};

export default NewsCardItemImage;
