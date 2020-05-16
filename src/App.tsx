import React from "react";
import "./App.css";

import { ShopList } from "./shopList/ShopList";
import { TodoApp } from "./TodoApp/TodoApp";
import { ClickerApp } from "./clickerApp/ClickerApp";

function App() {
  const apps = [
    // <TodoApp />,
    // <ClickerApp />,
    <ShopList />,
  ];
  return (
    <div className="App">
      <header className="App-header">{apps}</header>
    </div>
  );
}

export default App;
