import "./App.css";
import { Component } from "react";

import ApiButton from "./components/ApiButton";
import RenderGiphy from "./components/RenderGiphy";

class AppClass extends Component {
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
        URL: "https://api.giphy.com/v1/gifs/random?api_key=yIooyDxILHyVMvOrMOc6FvIWMCN6Tjzc&tag=25&rating=g",
      },
      () => {
        fetch(this.state.URL)
          .then((res) => res.json())
          .then((json) => {
            console.log(json.data);
            this.setState({ giphy: json.data });
          });
      }
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Giphy</h1>
        <ApiButton handleSubmit={this.handleSubmit} />
        <RenderGiphy giphy={this.state.giphy} />
      </div>
    );
  }
}

export default AppClass;
