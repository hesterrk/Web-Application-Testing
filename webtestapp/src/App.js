import React, { useState } from 'react';
import './App.css';



  function App() {

  const [balls, setBalls] = useState();
  const [strikes, setStrikes] = useState();

   function reset () {
    setBalls(0) && setStrikes(0)
  };



  if (balls > 4 || strikes > 3) {
    reset();
  }


  function increment() {

    setBalls(oldState => 
      oldState + 1
     )};

 
    if(balls === 0 || strikes === 0) {
      increment();
    }

  



  return (
    <div className="App">
      <h1> Testing Ground </h1>








    </div>
  );
}

export default App;
