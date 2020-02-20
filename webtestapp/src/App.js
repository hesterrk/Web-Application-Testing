import React, { useState } from 'react';
import './App.css';
import DashBoard from './components/Dashboard';



  function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);



   function reset () {
    setBalls(0) && setStrikes(0)
  };

  if (balls > 4 || strikes > 3) {
    reset();
  }


  // function increment() {

  //   setBalls(oldState => 
  //     oldState + 1
  //    )};

 
  //   if(balls === 0 || strikes === 0) {
  //     increment();
  //   }

  



  return (
    <div className="App">
      <h1> Testing Ground </h1>
      <DashBoard balls={balls} strikes={strikes}
      setBalls={setBalls} setStrikes={setStrikes}
      />



    </div>
  );
}

export default App;
