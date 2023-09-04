import React from 'react';

interface NewsCardItemPublishedAtProps {
  publishedAt: string;
}

const NewsCardItemPublishedAt = ({
  publishedAt,
}: NewsCardItemPublishedAtProps) => {
  return <div>{publishedAt}</div>;
};

export default NewsCardItemPublishedAt;
