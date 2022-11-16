// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("/coffees")
    .then(response => response.json())
    .then(coffeeData => console.log(coffeeData))
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/coffee_list">
            <h1>Coffee List:</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;