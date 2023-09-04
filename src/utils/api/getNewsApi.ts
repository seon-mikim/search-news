import NewsApi from 'src/interface/newApiInterface';

const getNewsApi = async ({ keyword, date }: NewsApi) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error(err);
  }
};

export default getNewsApi;
