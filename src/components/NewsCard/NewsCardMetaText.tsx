
interface NewsCardMetaTextProps {
	text: string;
  className: string;
}

const NewsCardMetaText = ({ text, className }: NewsCardMetaTextProps) => {
  return <span className={className}>{text}</span>;
};

export default NewsCardMetaText;
