import NewsCardItem from '@components/NewsCardItem/NewsCardItem';
import useGetNews from '@hooks/useGetNews';
import React from 'react';
import { NewsData } from 'src/interface/newsListData';

const NewsCardList = () => {
	const newsApiData = useGetNews();

  return (
    <div>
      {newsApiData.articles &&
        newsApiData.articles.map((newsDataItem: NewsData) => (
          <NewsCardItem newsDataItem={newsDataItem} />
        ))}
    </div>
  );
};

export default NewsCardList;
