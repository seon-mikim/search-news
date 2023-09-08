export interface NewsListData {
  author: string;
  title: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null; name: string };
  url: string;
  urlToImage: string;
}



export interface NewsData {
  status: string;
  totalResults: number;
  articles: NewsListData[];
}
