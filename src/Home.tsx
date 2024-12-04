import React from 'react';
import logo from './logo.svg';
import heart from './heart.png'
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi Ronnie</h1>
        <img src={heart} className="App-logo" alt="logo" />
        <Link className='App-link' to='/date-picker'>Click me</Link>
      </header>
    </div>
  );
}

export default Home;
