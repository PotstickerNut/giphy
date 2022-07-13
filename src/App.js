import "./App.css";
import GiphyList from "./components/GiphyList";
import About from "./components/pages/About";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  // sets up our app state
  const [giphys, setGiphys] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=yIooyDxILHyVMvOrMOc6FvIWMCN6Tjzc&limit=25&rating=g"
    )
      .then((res) => res.json())
      .then((json) => setGiphys(json.data));
  }, []);

  return (
    <div className="App">
      <h1>Giphy App</h1>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          {giphys && <GiphyList giphys={giphys} msg="GIPHYS COMPONENT" />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
