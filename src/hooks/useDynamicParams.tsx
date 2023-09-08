import {useState, useCallback } from 'react'

const useDynamicParams = <T extends object>(initialParams?:Partial <T> ) => {
	const [params, setParams] = useState<Partial<T>>(initialParams ?? {});

	const updateDynamicParams = useCallback((newParams: Partial<T>) => {
		setParams((prevParams) => ({...prevParams, ...newParams}))
	}, [])

	return [params, updateDynamicParams] as const 
}

export default useDynamicParams;