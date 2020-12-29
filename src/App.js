import React from "react"
import './App.css';
import Sidebar from "./Sidebar";
import Chat from  "./Chat"
function App() {
  return (
    //BEM Naming convention
    <div className="app">
      
       <div className="app__body">
       {/* sidebar section
       chat section   */}
       <Sidebar/>
       <Chat/>
       </div>
    </div>
  );
}

export default App;
