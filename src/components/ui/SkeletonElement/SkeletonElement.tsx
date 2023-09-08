import React from 'react'
import classes from './SkeletonElement.module.css'
interface SkeletonElementProps {
  type: string
}

const SkeletonElement = ({ type }: SkeletonElementProps) => {
  return <div className={classes[`${type}`] }></div>;
};

export default SkeletonElement