import React from 'react';

interface NewsCardItemSourceProps {
  source: string;
  className:string
}

const NewsCardItemSource = ({ source, className }: NewsCardItemSourceProps) => {
  return <span className={className }>{source}</span>;
};

export default NewsCardItemSource;
