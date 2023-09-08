import React from 'react';
import NewsCardTextualContent from './NewsCardTextualContent';
import NewsCardItemImage from './NewsCardItemImage';
import NewsCardItemUrl from './NewsCardItemUrl';
import { NewsListData } from 'src/interface/newsListData';
import NewsCartItemWrap from './NewsCartItemWrap';
import classes from './NewsCardItem.module.css';
import Layout from '@components/ui/Layout/Layout';
import NewsCardMetaText from './NewsCardMetaText';

interface NewCardProps {
  newsDataItem: NewsListData;
}
const NewsCard = ({ newsDataItem }: NewCardProps) => {
  
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
          <NewsCardTextualContent
            className={classes['card-item__title']}
            text={newsDataItem.title}
          />
        </NewsCardItemUrl>

        <NewsCardItemUrl
          className={classes['card-item--active']}
          url={newsDataItem.url}
        >
          <NewsCardTextualContent
            className={classes['card-item__description']}
            text={newsDataItem.description}
          />
        </NewsCardItemUrl>

        <Layout className={classes['card-item__info']}>
          <NewsCardTextualContent
            className={classes['card-item__source']}
            text={newsDataItem.source.name}
          />
          <NewsCardMetaText
            className={classes['card-item__author']}
            text={newsDataItem.author}
          />
        </Layout>

        <NewsCardMetaText
          className={classes['card-item__published-at']}
          text={newsDataItem.publishedAt}
        />
      </Layout>
    </NewsCartItemWrap>
  );
};

export default NewsCard;
