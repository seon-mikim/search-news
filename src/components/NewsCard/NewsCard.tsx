import {
  NewsCardUrl,
  NewsCartWrap,
  NewsCardImage,
  NewsCardMetaText,
  NewsCardTextualContent,
} from '@components/NewsCard'
import { NewsListData } from '@interface/newsListData';
import classes from './NewsCard.module.css';
import Layout from '@components/ui/Layout/Layout';

interface NewCardProps {
  newsDataItem: NewsListData;
}
const NewsCard = ({ newsDataItem }: NewCardProps) => {

  return (
    <NewsCartWrap className={classes['card-item']}>
      <NewsCardUrl
        className={classes['card-item--active']}
        url={newsDataItem.url}
      >
        <Layout className={classes['card-item__wrap']}>
          <NewsCardImage
            image={newsDataItem.urlToImage}
            title={newsDataItem.title}
            className={classes['card-item__wrap__img']}
          />
        </Layout>
      </NewsCardUrl>
      <Layout className={classes['card-item__news']}>
        <NewsCardUrl
          className={classes['card-item--active']}
          url={newsDataItem.url}
        >
          <NewsCardTextualContent
            className={classes['card-item__title']}
            text={newsDataItem.title}
          />
        </NewsCardUrl>
        <NewsCardUrl
          className={classes['card-item--active']}
          url={newsDataItem.url}
        >
          <NewsCardTextualContent
            className={classes['card-item__description']}
            text={newsDataItem.description}
          />
        </NewsCardUrl>
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
    </NewsCartWrap>
  );
};

export default NewsCard;
