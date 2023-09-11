interface NewsCardTextualContentProps {
  text: string;
  className: string;
}

const NewsCardTextualContent = ({
  text,
  className,
}: NewsCardTextualContentProps) => {
  return <p className={className}>{text}</p>;
};

export default NewsCardTextualContent;
