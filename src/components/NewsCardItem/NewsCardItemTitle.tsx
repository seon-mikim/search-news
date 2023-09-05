import React from 'react';

interface NewsCardItemTitleProps {
  title: string;
  className: string
}

const NewsCardItemTitle = ({ title, className }: NewsCardItemTitleProps) => {
  return <div className={className }>{title}</div>;
};

export default NewsCardItemTitle;
