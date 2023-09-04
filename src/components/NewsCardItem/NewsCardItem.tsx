import React from 'react'
import NewsCardItemTitle from './NewsCardItemTitle'
import NewsCardItemDescription from './NewsCardItemDescription'
import NewsCardItemAuthor from './NewsCardItemAuthor'
import NewsCardItemImage from './NewsCardItemImage'
import NewsCardItemPublishedAt from './NewsCardItemPublishedAt'
import NewsCardItemSource from './NewsCardItemSource'
import NewsCardItemUrl from './NewsCardItemUrl'
import { NewsData } from 'src/interface/newsListData'


interface NewCardItemProps {
	newsDataItem: NewsData
}
const NewsCardItem = ({newsDataItem }: NewCardItemProps) => {
	return (
    <div>
      <NewsCardItemTitle title={newsDataItem.title} />
      <NewsCardItemDescription description={newsDataItem.description} />
      <NewsCardItemAuthor author={newsDataItem.author} />
      <NewsCardItemImage
        image={newsDataItem.urlToImage}
        title={newsDataItem.title}
      />
      <NewsCardItemPublishedAt publishedAt={newsDataItem.publishedAt} />
      <NewsCardItemSource source={newsDataItem.source.name} />
      <NewsCardItemUrl url={newsDataItem.url} />
    </div>
  );
}

export default NewsCardItem