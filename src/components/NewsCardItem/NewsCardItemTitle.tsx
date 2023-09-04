import React from 'react';

interface NewsCardItemTitleProps {
  title: string;
}

const NewsCardItemTitle = ({ title }: NewsCardItemTitleProps) => {
  return <div>{title}</div>;
};

export default NewsCardItemTitle;
