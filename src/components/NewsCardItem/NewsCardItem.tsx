import React from 'react'
import NewsCardItemTitle from './NewsCardItemTitle'
import NewsCardItemDescription from './NewsCardItemDescription'
import NewsCardItemAuthor from './NewsCardItemAuthor'
import NewsCardItemImage from './NewsCardItemImage'
import NewsCardItemPublishedAt from './NewsCardItemPublishedAt'
import NewsCardItemSource from './NewsCardItemSource'
import NewsCardItemUrl from './NewsCardItemUrl'

const NewsCardItem = () => {
	return (
		<div>
			<NewsCardItemTitle/>
			<NewsCardItemDescription />
			<NewsCardItemAuthor/>
			<NewsCardItemImage />
			<NewsCardItemPublishedAt />
			<NewsCardItemSource />
			<NewsCardItemUrl/>
		</div>
	)
}

export default NewsCardItem