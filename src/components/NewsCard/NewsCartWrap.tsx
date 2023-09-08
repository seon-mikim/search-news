import React from 'react';

interface NewsCardWrapProps {
  children: React.ReactNode;
  className: string;
}
const NewsCartWrap = ({ children, className }: NewsCardWrapProps) => {
  return <li className={className}>{children}</li>;
};

export default NewsCartWrap;
