import NewsApi from 'src/interface/newApiInterface';

const getNewsApi = async ({ keyword, date }: NewsApi) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
		);
		console.log(response.json())
		return response.json();
		
  } catch (err) {
    console.error(err);
  }
};

export default getNewsApi;
