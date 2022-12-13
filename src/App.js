import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Home />
      <About />
      <Members />
      <SongList />
    </div>
  );
};

export default App;
