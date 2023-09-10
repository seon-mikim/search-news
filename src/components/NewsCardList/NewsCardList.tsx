import { useMemo, useCallback, useRef } from 'react';
import { NewsCard } from '@components/NewsCard';
import { NewsListData } from '@interface/newsListData';
import classes from './NewsCardList.module.css';
import SkeletonNewsCardItem from '@components/SkeletonNewsCardItem/SkeletonNewsCardItem';
import useGetNews from '@hooks/useGetNews';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { useDispatch } from 'react-redux';
import { getNewsList } from '@redux/news/newsListSlice';
import { AppDispatch } from '@redux/store';

const NewsCardList = () => {
  const { newsData, loading } = useGetNews();
  const dispatch = useDispatch<AppDispatch>();
  const pageRef = useRef(1);

  const ref = useIntersectionObserver(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      pageRef.current += 1;
      if (pageRef.current > 1) {
        dispatch(getNewsList({ trigger: 'scroll', page: pageRef.current }));
      }
    },
    { root: null, rootMargin: '0px', threshold: 1 }
  );

  const filterRemovedNewsData = useMemo(() => {
    if (newsData.length !== 0 ) {
      return newsData.filter(
        (newsApiDataItem: NewsListData) => newsApiDataItem.title !== '[Removed]'
      );
    }
  }, [newsData]);

  return (
    <ul className={classes['news-card-list']}>
      {filterRemovedNewsData?.map((newsDataItem: NewsListData) => (
        <NewsCard key={newsDataItem.source.name} newsDataItem={newsDataItem} />
      ))}
      {loading
        ? new Array(4).fill(1).map((_, i) => <SkeletonNewsCardItem key={i} />)
        : ''}
      {!loading && (
        <div ref={ref} style={{ height: '100px', width: '100%' }}></div>
      )}
    </ul>
  );
};

export default NewsCardList;
