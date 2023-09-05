import React from 'react';
interface NewsCardItemImageProps {
  title: string;
  image: string;
  className: string;
}

const NewsCardItemImage = ({
  image,
  title,
  className,
}: NewsCardItemImageProps) => {
  return (
    <img
      src={image !== null ? image : '/images/no-image.svg'}
      alt={title}
      className={className}
    />
  );
};

export default NewsCardItemImage;
