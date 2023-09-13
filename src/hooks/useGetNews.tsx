import { getNewsList } from '@redux/news/newsListSlice';
import { AppDispatch, RootState } from '@redux/store';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDynamicParams from './useDynamicParams';


const useGetNews = () => {
  const initialParams = {
    keyword: 'all',
    date: new Date().toString(),
    page: 1,
    pageSize: 4,
  };
  const [params, updateDynamicParams] =
    useDynamicParams<typeof initialParams>(initialParams);
  const dispatch: AppDispatch = useDispatch();
  const { entities: newsData, loading, params: newParams, error } = useSelector(
    (state: RootState) => state.news
  );

  const getNewsData = useCallback(async () => {
    if(error) return
    const combinedParams = { ...initialParams, ...params};
    dispatch(getNewsList(combinedParams));
  }, [dispatch, params]);

  useEffect(() => {


    getNewsData();
  }, [getNewsData, params]);

  return { newsData, loading, updateDynamicParams, params , newParams};
};

export default useGetNews;
