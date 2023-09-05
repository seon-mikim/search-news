import NewsCardItem from '@components/NewsCardItem/NewsCardItem';
import useGetNews from '@hooks/useGetNews';
import { useMemo } from 'react';
import { NewsData } from 'src/interface/newsListData';
import classes from './NewsCardList.module.css';
const NewsCardList = () => {
  const newsApiData = useGetNews();
  const filterRemovedNewsData = useMemo(() => {
    if (newsApiData) {
      return newsApiData.articles.filter(
        (newsApiDataItem: NewsData) =>
          newsApiDataItem.urlToImage !== '[Removed]'
      );
    }
  }, [newsApiData]);
 if (!newsApiData) {
    return <div>로딩중 입니다.</div>;
  }

  return (
    <ul className={classes['news-card-list']}>
      {filterRemovedNewsData &&
        filterRemovedNewsData.map((newsDataItem: NewsData) => (
          <NewsCardItem newsDataItem={newsDataItem} />
        ))}
    </ul>
  );
};

export default NewsCardList;
