import React from 'react';
import NewsCardItemTitle from './NewsCardItemTitle';
import NewsCardItemDescription from './NewsCardItemDescription';
import NewsCardItemAuthor from './NewsCardItemAuthor';
import NewsCardItemImage from './NewsCardItemImage';
import NewsCardItemPublishedAt from './NewsCardItemPublishedAt';
import NewsCardItemSource from './NewsCardItemSource';
import NewsCardItemUrl from './NewsCardItemUrl';
import { NewsData } from 'src/interface/newsListData';
import NewsCartItemWrap from './NewsCartItemWrap';
import classes from './NewsCardItem.module.css';
import Layout from '@components/ui/Layout/Layout';

interface NewCardItemProps {
  newsDataItem: NewsData;
}
const NewsCardItem = ({ newsDataItem }: NewCardItemProps) => {
  return (
    <NewsCartItemWrap className={classes['card-item']}>
      <Layout className={classes['card-item__wrap']}>
        <NewsCardItemImage
          image={newsDataItem.urlToImage}
          title={newsDataItem.title}
          className={classes['card-item__wrap__img']}
        />
      </Layout>
      <Layout className={classes['card-item__info']}>
        <NewsCardItemTitle
          className={classes['card-item__title']}
          title={newsDataItem.title}
        />
        <NewsCardItemDescription
          className={classes['card-item__description']}
          description={newsDataItem.description}
        />
        <NewsCardItemSource source={newsDataItem.source.name} />
        {/* <NewsCardItemUrl url={newsDataItem.url} /> */}
        <NewsCardItemPublishedAt publishedAt={newsDataItem.publishedAt} />
        <NewsCardItemAuthor author={newsDataItem.author} />
      </Layout>
    </NewsCartItemWrap>
  );
};

export default NewsCardItem;
