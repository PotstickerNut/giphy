import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    giphy: [],
  };

  componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=yIooyDxILHyVMvOrMOc6FvIWMCN6Tjzc&limit=25&rating=g"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        this.setState({ giphy: json.data });
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(
      {
        URL: "https://api.giphy.com/v1/gifs/random?api_key=yIooyDxILHyVMvOrMOc6FvIWMCN6Tjzc&tag=&rating=g",
      },
      () => {
        fetch(this.state.URL)
          .then((res) => res.json())
          .then((json) => this.setState({ giphy: json.data }));
      }
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Giphy</h1>
        <button onSubmit={this.handleSubmit}>Make API Call Again</button>
        <br />
        <br />
        {this.state.giphy.map((g) => (
          <div key={g.id}>
            <img src={g.images.original.url} alt={g.title} />
            <h3>{g.title}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
