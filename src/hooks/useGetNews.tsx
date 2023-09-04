import { newsData } from '@redux/actions';
import { RootState } from '@redux/reducers';
import getNewsApi from '@utils/api/getNewsApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const useGetNews = () => {
  const dispatch = useDispatch();
  const newsApiData = useSelector((state: RootState) => state.newsData);
  useEffect(() => {
    const fetchNewData = async () => {
      const getNewsData = await getNewsApi({ keyword: 'all', date: '' });
      dispatch(newsData(getNewsData));
    };
    fetchNewData();
  }, [dispatch]);
  return newsApiData;
};

export default useGetNews;
