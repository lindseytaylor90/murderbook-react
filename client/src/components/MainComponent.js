import React from 'react';
import Home from './HomeComponent';
import { useStateValue } from '../state/Provider';

function Main() {
  const [{ posts }] = useStateValue();
   
  
    const HomePage =() => {
      return (
        <Home posts={posts} />
      );
    }

    return (
      <div>
        <HomePage/>
      </div>
    );
}

 export default Main;
