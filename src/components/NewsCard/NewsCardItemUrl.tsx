import React from 'react';
interface NewsCardItemUrlProps {
  url: string;
  className: string,
  children: React.ReactNode
}
const NewsCardItemUrl = ({ url,className, children }: NewsCardItemUrlProps) => {
  return <a className={className } href={url}>{children}</a>;
};

export default NewsCardItemUrl;
