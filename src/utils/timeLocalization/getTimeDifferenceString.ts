const secondsToMinutes = (seconds: number): number => seconds / 60;
const minutesToHours = (minutes: number): number => minutes / 60;
const hoursToDays = (hours: number): number => hours / 24;
const daysToMonths = (days: number): number => days / 30;

const formatTimeDifference = (timeDifference: number): string => {
  if (timeDifference < 60) {
    return `${Math.floor(timeDifference)}초 전`;
  }

  const minutes = secondsToMinutes(timeDifference);
  if (minutes < 60) {
    return `${Math.floor(minutes)}분 전`;
  }

  const hours = minutesToHours(minutes);
  if (hours < 24) {
    return `${Math.floor(hours)}시간 전`;
  }

  const days = hoursToDays(hours);
  if (days < 30) {
    return `${Math.floor(days)}일 전`;
  }

  const months = daysToMonths(days);
  return `${Math.floor(months)}개월 전`;
};

const getTimeDifferenceString = (publishedDate: string): string => {
  const currentTime = Date.now();
  const timeOfPublishedDate = new Date(publishedDate).getTime();
  const timeDifferenceInSeconds = (currentTime - timeOfPublishedDate) / 1000; // 밀리초를 초로 변환

  return formatTimeDifference(timeDifferenceInSeconds);
};

export default getTimeDifferenceString;
