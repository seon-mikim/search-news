import NewsApi from 'src/interface/newApiInterface';


const getNewsApi = async (params: NewsApi) => {
  const {keyword ='all', date = new Date().toString(), page =1, pageSize=8} = params
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
