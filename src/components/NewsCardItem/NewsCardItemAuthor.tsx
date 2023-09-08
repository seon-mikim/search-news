import React from 'react';

interface NewsCardItemAuthorProps {
  author: string;
  className: string;
}
const NewsCardItemAuthor = ({ author, className }: NewsCardItemAuthorProps) => {
  return <div className={className}>{author}</div>;
};

export default NewsCardItemAuthor;
