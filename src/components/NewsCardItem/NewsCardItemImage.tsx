import React from 'react';
interface NewsCardItemImageProps {
  title: string;
  image: string;
  className: string;
}

const NewsCardItemImage = ({ image, title, className }: NewsCardItemImageProps) => {
	return <img className={className } src={image} alt={title } />;
};

export default NewsCardItemImage;
