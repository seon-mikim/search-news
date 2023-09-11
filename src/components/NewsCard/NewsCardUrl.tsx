import React from 'react';
interface NewsCardUrlProps {
  url: string;
  className: string;
  children: React.ReactNode;
}
const NewsCardUrl = ({ url, className, children }: NewsCardUrlProps) => {
  return (
    <a className={className} href={url}>
      {children}
    </a>
  );
};

export default NewsCardUrl;
