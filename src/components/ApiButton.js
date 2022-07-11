const ApiButton = (props) => {
  return (
    <div>
      <button onSubmit={props.handleSubmit}>Make API Call Again</button>
      <br />
      <br />
    </div>
  );
};

export default ApiButton;
