import React from 'react';

interface NewsCardItemAuthorProps {
  author: string;
}
const NewsCardItemAuthor = ({ author }: NewsCardItemAuthorProps) => {
  return <div>{author}</div>;
};

export default NewsCardItemAuthor;
