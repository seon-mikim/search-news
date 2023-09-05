import NewsCardItem from '@components/NewsCardItem/NewsCardItem';
import useGetNews from '@hooks/useGetNews';
import React from 'react';
import { NewsData } from 'src/interface/newsListData';
import classes from './NewsCardList.module.css'
const NewsCardList = () => {
	const newsApiData = useGetNews();
	if (!newsApiData) {
	return <div>로딩중 입니다.</div>
}
  return (
		<ul className={classes['news-card-list'] }>
      {newsApiData.articles &&
        newsApiData.articles.map((newsDataItem: NewsData) => (
          <NewsCardItem newsDataItem={newsDataItem} />
        ))}
    </ul>
  );
};

export default NewsCardList;
