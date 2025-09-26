import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get("/api/jokes").then((response) => {
      setJokes(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h1>fronted for jokes backend</h1>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h3 className="title">{joke.title}</h3>
            <p className="description">{joke.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
