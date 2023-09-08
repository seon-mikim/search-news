import NewsApi from 'src/interface/newApiInterface';

const getNewsApi = async ({ keyword, date, page=1, pageSize=10 }: NewsApi) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&sortBy=publishedAt&page=${page}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error(err);
  }
};

export default getNewsApi;
