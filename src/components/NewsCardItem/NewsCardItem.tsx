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
      <NewsCardItemUrl
        className={classes['card-item--active']}
        url={newsDataItem.url}
      >
        <Layout className={classes['card-item__wrap']}>
          <NewsCardItemImage
            image={newsDataItem.urlToImage}
            title={newsDataItem.title}
            className={classes['card-item__wrap__img']}
          />
        </Layout>
      </NewsCardItemUrl>
      <Layout className={classes['card-item__news']}>
        <NewsCardItemUrl
          className={classes['card-item--active']}
          url={newsDataItem.url}
        >
          <NewsCardItemTitle
            className={classes['card-item__title']}
            title={newsDataItem.title}
          />
        </NewsCardItemUrl>
        <NewsCardItemUrl
          className={classes['card-item--active']}
          url={newsDataItem.url}
        >
          <NewsCardItemDescription
            className={classes['card-item__description']}
            description={newsDataItem.description}
          />
        </NewsCardItemUrl>
        <Layout className={classes['card-item__info']}>
          <NewsCardItemSource
            className={classes['card-item__source']}
            source={newsDataItem.source.name}
          />
          <NewsCardItemAuthor
            className={classes['card-item__author']}
            author={newsDataItem.author}
          />
        </Layout>
        <NewsCardItemPublishedAt
          className={classes['card-item__published-at']}
          publishedAt={newsDataItem.publishedAt}
        />
      </Layout>
    </NewsCartItemWrap>
  );
};

export default NewsCardItem;
