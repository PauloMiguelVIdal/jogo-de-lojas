import React from "react";
import {CentraldeDadosProvider } from "./centralDeDadosContext";
import Interface from "./Inteface";


function App() {
  return (
    <CentraldeDadosProvider>
    <div>
      <Interface/>
    </div>
    </CentraldeDadosProvider>
  );
}

export default App;
