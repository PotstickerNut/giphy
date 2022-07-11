const RenderGiphy = (props) => {
  return (
    <div>
      {props.giphy.map((g) => (
        <div key={g.id}>
          <img src={g.images.original.url} alt={g.title} />
          <h3>{g.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default RenderGiphy;
