import React from 'react';
import './App.css';
import Data from './components/Data'
import { Provider } from 'react-redux';
import store from './redux/store'
function App() {
 
  return (
    <div className="App">
      <Provider store={store}>
        <Data />
      </Provider>
      
    </div>
  );
}

export default App;
