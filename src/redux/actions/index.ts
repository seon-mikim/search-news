import { SetNewsAction } from "src/interface/newsDataAction";
import { SET_NEWS_DATA } from "./types";

export const newsData = (newsData: any): SetNewsAction => {
	return {
		type: SET_NEWS_DATA,
		payload: newsData
	}
	
}