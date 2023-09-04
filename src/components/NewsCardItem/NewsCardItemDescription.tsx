import React from 'react';

interface NewsCardItemDescriptionProps {
  description: string;
}
const NewsCardItemDescription = ({
  description,
}: NewsCardItemDescriptionProps) => {
  return <div>{description}</div>;
};

export default NewsCardItemDescription;
