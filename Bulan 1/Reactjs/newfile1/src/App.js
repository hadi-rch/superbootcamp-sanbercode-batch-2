import './App.css';
import React from 'react';
import CustomHeader from "./Header"
import Body from "./pages/Body"


function App()  {
  // let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]
  
 return (
    <div className="App">
    <CustomHeader/>
      <Body/>
    </div>
  );

}
export default App;
