export interface NewsData {
	author: string,
	content: string,
	description: string,
	publishedAt: string,
	source: {id: null, name:string},
	url: string,
	urlToImage: string,
}


export type NewsListData = NewsData[] 
