import { SetNewsAction } from "src/interface/newsDataAction";
import { SET_NEWS_DATA } from "./types";
import { NewsListData } from "src/interface/newsListData";

export const newsData = (newsData: NewsListData): SetNewsAction => {
	return {
		type: SET_NEWS_DATA,
		payload: newsData
	}
	
}