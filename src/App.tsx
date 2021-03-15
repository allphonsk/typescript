import React, { useState } from 'react';
import TextField from './TextField'
import Person from './TextField'
import Props from './Props'
import UseState from './UseState'
import UseRef from './UseRef'
import UseReducer from './UseReducer'
//
interface Car {
  color: string;
}

export interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}



const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log("input ", e.target.value);
}


const App: React.FC = () => {

 
  return (
    <div className="App">
      <Props />
      <UseState />
      <UseRef fun={handleChange} /> {/* */}

      <UseReducer />
    </div>
  );
}

export default App;
