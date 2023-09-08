import Layout from '@components/ui/Layout/Layout';
import SkeletonElement from '@components/ui/SkeletonElement/SkeletonElement';
import React from 'react';
import classes from './SkeletonNewsCardItem.module.css'
const SkeletonNewsCardItem = () => {
  return (
    <div className={classes['skeleton-card-wrap']}>
      <Layout className={classes['skeleton-card__img-wrap']}>
        <SkeletonElement type="img" />
      </Layout>
      <Layout className={classes['skeleton-card__news-wrap']}>
        <SkeletonElement type="title" />
        <SkeletonElement type="description" />
        <Layout className={classes['skeleton-card__secure']}>
          <SkeletonElement type="source-name" />
          <SkeletonElement type="author" />
        </Layout>
        <SkeletonElement type="published-at" />
      </Layout>
    </div>
  );
};

export default SkeletonNewsCardItem;
