import React from 'react';
interface NewsCardImageProps {
  title: string;
  image: string;
  className: string;
}

const NewsCardImage = ({
  image,
  title,
  className,
}: NewsCardImageProps) => {
  return (
    <img
      src={image !== null ? image : '/images/no-image.svg'}
      alt={title}
      className={className}
    />
  );
};

export default NewsCardImage;
