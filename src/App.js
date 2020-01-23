import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/' ><img src={logo} alt='lambda-grad' className='logo' /></Link>
        <nav>
          <Link to='/about'>About</Link>
          
        </nav>
      </header>
      <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/about" component={About}/>
</div>
    </div>
   
  );
}

export default App;
