import {useState, useCallback } from 'react'

const useDynamicParams = <T extends object>() => {
	const [params, setParams] = useState<Partial <T>>({});

	const updateDynamicParams = useCallback((newParams: Partial<T>) => {
		setParams(prevParams => {
			const updatedParams = { ...prevParams, ...newParams };
			return updatedParams
		})
	}, [])

	return [params, updateDynamicParams] as const 
}

export default useDynamicParams;