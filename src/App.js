import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import logo from "./images/logo.png";
import Contact from "./components/Contact";
import GitHub from "./components/git-hub/GitHub";
import Showcase from "./components/Showcase";
import { bubble as Menu } from 'react-burger-menu'


function App() {


	return (
		<div className='App'>
			<header className='App-header'>
				<Link to='/'>
					<img src={logo} alt='lambda-grad' className='logo' />
				</Link>

				<Menu id='hambrgbtn' right>
					<Link to='/showcase' className='menu-item'>
						Showcase
					</Link>
					<Link to='/about' className='menu-item'>
						About
					</Link>
					<Link to='/git-hub' className='menu-item'>
						GitHub
					</Link>
					<Link className='menu-item' to='/contact'>
						Contact
					</Link>
				</Menu>
			</header>
			<div>
				<Route exact path='/' component={Landing} />
				<Route path='/about' component={About} />
				<Route path='/git-hub' component={GitHub} />
				<Route path='/contact' component={Contact} />
				<Route path='/showcase' component={Showcase} />
			</div>
		</div>
	)
}

export default App;
