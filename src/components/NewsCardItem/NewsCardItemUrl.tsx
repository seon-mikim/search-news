import React from 'react'
interface NewsCardItemUrlProps {
	url: string
}
const NewsCardItemUrl = ({url }:NewsCardItemUrlProps) => {
	return (
		<div>{url }</div>
	)
}

export default NewsCardItemUrl