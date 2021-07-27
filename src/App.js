import React from "react";
import Dinner from "./Dinner";

function App() {
  return (
    <div className="App">
      
      <Dinner dish="Nihari" sweet="Kheer" name="Sir Muhammad Rizwan" />

      <hr />
      
      <Dinner dish="Biryani" sweet="Jalebi" name="Sir Attari" />

      <hr />
      
      <Dinner dish="Karahi" sweet="Gajar Ka Halwa" name="Sir Mandkulli" />

    </div>
  );
}

export default App;
