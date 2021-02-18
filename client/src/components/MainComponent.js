import React, {Component} from 'react';
import Home from './HomeComponent';

class Main extends Component {

  render() {
    const HomePage =() => {
      return (
        <Home/>
      );
    }

    return (
      <div>
        <HomePage/>
      </div>
    );
  }
}

 export default Main;
