import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { useStateValue } from './state/Provider';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  const [{ user }] = useStateValue();
   
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
