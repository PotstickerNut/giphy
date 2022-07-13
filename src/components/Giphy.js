const Giphy = (props) => {
  const {
    item: { title, images },
  } = props;
  // const { title } = item;

  return (
    <div>
      <h2>{title}</h2>
      <img src={images.original.url} alt={title} />
    </div>
  );
};

export default Giphy;
