//query some text in this file 
//use 'toBeInTheDocument' method 
import React from 'react';


export default function Dashboard(props) {


    return (



        <div>
        <h3 data-testid="h3tag" className="h3">Welcome to the Dashboard</h3>
        <a
        
          href="https://en.wikipedia.org/wiki/Football"
          target="_blank"
          rel="noopener noreferrer"
 
        >
            Football Link 
            </a>
            <br>
            </br>
            <br>
            </br>

            <div className="top">
          <div className="balls">
            <h2>Balls:</h2>
            <div>{props.balls}</div>
          </div>
          <div className="strikes">
            <h2>Strikes</h2>
            <div>{props.strikes}</div>
          </div>
        </div>


            <div className="buttons">

        <button onClick={() => props.setBalls(props.balls +1)}>Increment Ball By One</button>
        <button onClick={() => props.setStrikes(props.strikes +1)}>Increment Strike By One</button>

</div>
<br>
</br>
<form>
<input 
label="username"
placeholder="Send Your Name Here..."
/> 
</form>




        </div>
    )



}