import React from 'react';

interface NewsCardItemSourceProps {
  source: string;
}

const NewsCardItemSource = ({ source }: NewsCardItemSourceProps) => {
  return <div>{source}</div>;
};

export default NewsCardItemSource;
