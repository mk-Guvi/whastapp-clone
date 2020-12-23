import React from "react"
import './App.css';
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM Naming convention
    <div className="app">
      
       <div className="app__body">
       {/* sidebar section
       chat section   */}
       <Sidebar/>
       </div>
    </div>
  );
}

export default App;
