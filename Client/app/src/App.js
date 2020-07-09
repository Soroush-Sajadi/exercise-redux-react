import React from 'react';
import './App.css';
import Container from './components/Container'
import { Provider } from 'react-redux';
import store from './redux/store'
import Movie from './components/Movie'
import Data from './components/Data'
function App() {
 
  return (
    <div className="App">
      <Provider store={store}>
        <Container />
      </Provider>
      
    </div>
  );
}

export default App;
