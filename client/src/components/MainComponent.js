import React from 'react';
import Home from './HomeComponent';
import { useStateValue } from '../state/Provider';

function Main() {
  const [{ posts, user }] = useStateValue();
   
  
    const HomePage =() => {
      return (
        <Home posts={posts} user={user} />
      );
    }

    return (
      <div>
        <HomePage/>
      </div>
    );
}

 export default Main;
