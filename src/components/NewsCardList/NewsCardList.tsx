import NewsCardItem from '@components/NewsCardItem/NewsCardItem';
import useGetNews from '@hooks/useGetNews';
import { useMemo, useCallback, } from 'react';
import { NewsListData } from 'src/interface/newsListData';
import classes from './NewsCardList.module.css';
import SkeletonNewsCardItem from '@components/SkeletonNewsCardItem/SkeletonNewsCardItem';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
const NewsCardList = () => {
  const { newsData, loading, updateDynamicParams, params } = useGetNews();
  const fetchMoreNews = useCallback(() => {
    updateDynamicParams({ page: (params.page ?? 1) + 1 });
    
  }, [updateDynamicParams, params]);
  
  const setObservationTarget = useIntersectionObserver(fetchMoreNews);
  const filterRemovedNewsData = useMemo(() => {
    if (newsData) {
      return newsData.articles.filter(
        (newsApiDataItem: NewsListData) => newsApiDataItem.title !== '[Removed]'
        );
      }
    }, [newsData]);

  return (
    <ul className={classes['news-card-list']}>
      {filterRemovedNewsData &&
        filterRemovedNewsData.map(
          (newsDataItem: NewsListData, index: number) => (
            <NewsCardItem key={index + 1} newsDataItem={newsDataItem} />
          )
        )}
      {loading
        ? new Array(4).fill(1).map((_, i) => <SkeletonNewsCardItem key={i} />)
        : ''}
      {!loading && <li ref={setObservationTarget} style={{ height: "40px", width: "100%"}}></li>}
    </ul>
  );
};

export default NewsCardList;
