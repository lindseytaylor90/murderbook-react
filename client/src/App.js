import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { Provider } from 'react-redux';
import { useStateValue } from './state/Provider';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  const [{ user }, dispatch] = useStateValue();
   
  //need to add provider when ready for redux.
  return (
      <div className="app">
        {
          !user ? <Login/>
          : (
            <div>
              <Header/>
              <div className="appBody">
                <Main/>
              </div>
            </div>
          )  
        }
      </div>
  );
}

export default App;
