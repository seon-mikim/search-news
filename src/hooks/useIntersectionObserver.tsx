import { useState, useRef, useEffect } from 'react';


const useIntersectionObserver = (callback: () => void) => {

  const [observationTarget, setObservationTarget] =
    useState<HTMLDivElement | null>(null);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback();
      },
			{threshold: 1}
    )
	);
	
	useEffect(() => {
		const currentTarget = observationTarget
		const currentObserver = observer.current
		return () => {
			if (currentTarget) {
				currentObserver.unobserve(currentTarget)
			}
		}
	}, [observationTarget])
	return (element: HTMLDivElement | null) => setObservationTarget(element);
};

export default useIntersectionObserver;
