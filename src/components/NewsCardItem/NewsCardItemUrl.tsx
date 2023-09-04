import React from 'react';
interface NewsCardItemUrlProps {
  url: string;
}
const NewsCardItemUrl = ({ url }: NewsCardItemUrlProps) => {
  return <a href={url}>{url}</a>;
};

export default NewsCardItemUrl;
