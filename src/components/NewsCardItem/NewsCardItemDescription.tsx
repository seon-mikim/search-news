import React from 'react';

interface NewsCardItemDescriptionProps {
  description: string;
  className: string
}
const NewsCardItemDescription = ({
  description,className
}: NewsCardItemDescriptionProps) => {
  return <p className={className }>{description}</p>;
};

export default NewsCardItemDescription;
