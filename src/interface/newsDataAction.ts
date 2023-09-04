import {SET_NEWS_DATA } from '@redux/actions/types'
import { NewsListData } from './newsListData'
export interface SetNewsAction {
	type: typeof SET_NEWS_DATA,
	payload:NewsListData
}