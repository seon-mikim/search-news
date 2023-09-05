import { newsData } from '@redux/actions';
import { RootState } from '@redux/reducers';
import getNewsApi from '@utils/api/getNewsApi';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const useGetNews = () => {
  const dispatch = useDispatch();
  const newsApiData = useSelector((state: RootState) => state.newsData);
  console.log(new Date());
  const fetchNewData = useCallback(async () => {
    const getNewsData = await getNewsApi({
      keyword: 'all',
      date: `${new Date().toTimeString()}`,
      page: 1,
      pageSize: 10,
    });
    dispatch(newsData(getNewsData));
  }, [dispatch]);

  useEffect(() => {
    fetchNewData();
  }, [fetchNewData]);

  return newsApiData;
};

export default useGetNews;
