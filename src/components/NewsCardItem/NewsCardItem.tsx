import React from 'react'
import NewsCardItemTitle from './NewsCardItemTitle'
import NewsCardItemDescription from './NewsCardItemDescription'
import NewsCardItemAuthor from './NewsCardItemAuthor'
import NewsCardItemImage from './NewsCardItemImage'
import NewsCardItemPublishedAt from './NewsCardItemPublishedAt'
import NewsCardItemSource from './NewsCardItemSource'
import NewsCardItemUrl from './NewsCardItemUrl'
import { NewsData } from 'src/interface/newsListData'

const NewsCardItem = ({newDataItem }: NewsData) => {
	return (
		<div>
			<NewsCardItemTitle title={newDataItem.title } />
			<NewsCardItemDescription description={newDataItem.description } />
			<NewsCardItemAuthor author={newDataItem.author } />
			<NewsCardItemImage image={newDataItem.image } />
			<NewsCardItemPublishedAt publishedAt={newDataItem.publishedAt } />
			<NewsCardItemSource source={newDataItem.source.name } />
			<NewsCardItemUrl url={newDataItem.url } />
		</div>
	)
}

export default NewsCardItem