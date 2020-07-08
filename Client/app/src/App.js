import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>{counter}</h1>
     <input type="submit" value="INCREAMENT" onClick={()=> dispatch({type: 'INCREMENT'})} />
     <input type="submit" value="DECREAMENT" onClick={()=> dispatch({type: 'DECREMENT'})} />

    </div>
  );
}

export default App;
