import React from "react";
import wands from './data';
import WandList from "./WandList";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="content col-10">
              <WandList wands = {wands} />
        </div>
      </div>
    </div>
  );
}

export default App;
