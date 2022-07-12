import "./App.css";
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
    </div>
  );
};

export default App;
