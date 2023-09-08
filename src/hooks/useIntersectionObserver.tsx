import { useState, useRef, useEffect } from 'react';


const useIntersectionObserver = (callback: () => void) => {

  const [observationTarget, setObservationTarget] =
    useState<HTMLLIElement | null>(null);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
     console.log("Is intersecting:", entry.isIntersecting); // 로그 추가
        if (!entry.isIntersecting) return;
				console.log("Callback is about to be called"); // 로그 추가
				callback()
			},
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const currentTarget = observationTarget;
		const currentObserver = observer.current;
		 if (currentTarget) {
       currentObserver.observe(currentTarget);
     }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);
  return (element: HTMLLIElement | null) => setObservationTarget(element);
};

export default useIntersectionObserver;
