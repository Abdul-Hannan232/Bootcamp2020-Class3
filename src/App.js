import React from "react";
import Dinner from "./Dinner";

function App() {
  return (
    <div className="App">
      
      <Dinner dish="Nihari" sweet="Kheer" />

      <hr />
      
      <Dinner dish="Biryani" sweet="Jalebi" />

      <hr />
      
      <Dinner dish="Karahi" sweet="Gajar Ka Halwa" />

    </div>
  );
}

export default App;
