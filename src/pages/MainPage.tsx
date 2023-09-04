import getNewsApi from '@utils/api/getNewsApi'
import React from 'react'

const MainPage = () => {
	getNewsApi({ keyword: 'apple', date: '2023-09-05' })
	return (
		<div>MainPage</div>
	)
}

export default MainPage