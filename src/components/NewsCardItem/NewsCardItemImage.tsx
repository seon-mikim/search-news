import React from 'react';
interface NewsCardItemImageProps {
	title:string
  image: string;
}

const NewsCardItemImage = ({ image, title }: NewsCardItemImageProps) => {
	return <img src={image} alt={title } />;
};

export default NewsCardItemImage;
