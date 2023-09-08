import getTimeDifferenceString from '@utils/timeLocalization/getTimeDifferenceString';
import React from 'react';

interface NewsCardItemPublishedAtProps {
  publishedAt: string;
  className:string
}

const NewsCardItemPublishedAt = ({
  publishedAt, className
}: NewsCardItemPublishedAtProps) => {
  const getLocalDate = getTimeDifferenceString(publishedAt);
 
  return <span className={className }>{getLocalDate}</span>;
};

export default NewsCardItemPublishedAt;
