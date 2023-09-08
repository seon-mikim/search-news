import { getNewsList } from '@redux/news/newsListSlice';
import { AppDispatch, RootState } from '@redux/store';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDynamicParams from './useDynamicParams';
import NewsApi from 'src/interface/newApiInterface';

const useGetNews = () => {
  const initialParams = {
    keyword: 'all',
    date: new Date().toString(),
    page: 1,
    pageSize: 8,
  };
  const [params, updateDynamicParams] =
    useDynamicParams<typeof initialParams>(initialParams);
  const dispatch: AppDispatch = useDispatch();
  const { entities: newsData, loading } = useSelector(
    (state: RootState) => state.news
  );

  const getNewsData = useCallback(async () => {
    const combinedParams = { ...initialParams, ...params };

    dispatch(getNewsList(combinedParams));
  }, [dispatch, params]);

  useEffect(() => {
    console.log('Current Params:', params);

    getNewsData();
  }, [getNewsData, params]);

  return { newsData, loading, updateDynamicParams, params };
};

export default useGetNews;
