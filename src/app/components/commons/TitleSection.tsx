const TitleSection = ({ title, description }: { title: string, description: string }) => {
  return <div className="my-9 mx-5">
    <h3 className=" font-bold text-lg pb-3">{title}</h3>
    <p className="text-center" dangerouslySetInnerHTML={{ __html: description }} />
  </div>;
};

export default TitleSection;