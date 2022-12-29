import React from 'react';
import Map from './Map';
import './App.css';

function App() {


    function handleClick(event: Event) {
        console.log(event.target)
    }

    document.addEventListener("click", handleClick);


  return (
    <div className="App">
      <header className="App-header">
          <Map />
      </header>
    </div>
  );
}

export default App;
