import React from 'react';

interface NewsCardItemWrapProps {
  children: React.ReactNode;
  className: string;
}
const NewsCartItemWrap = ({ children, className }: NewsCardItemWrapProps) => {
  return <li className={className}>{children}</li>;
};

export default NewsCartItemWrap;
