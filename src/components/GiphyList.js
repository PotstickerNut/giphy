import Giphy from "./Giphy";

const GiphyList = (props) => {
  const { giphys, msg } = props;
  return (
    <div>
      <h1>{msg}</h1>

      {giphys.map((item) => (
        <Giphy key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GiphyList;
