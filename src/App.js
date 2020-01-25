import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import logo from "./images/logo.png";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import GitHub from "./components/git-hub/GitHub";


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Link to="/">
					<img src={logo} alt="lambda-grad" className="logo" />
				</Link>

				<nav>
					
					<Link to="/about" className="link">
						<button className='navButton'>About</button>
					</Link>

					<Link to="/skills" className="link">
					<button className='navButton'>Skills</button>
					</Link>

					<Link to="/git-hub" className="link">
						<button className='navButton'>GitHub</button>
					</Link>

					<Link to="/contact" className="link">
						<button className='navButton'>Contact</button>
					</Link>

				</nav>
			</header>
			<div>
				<Route exact path="/" component={Landing} />
				<Route path="/about" component={About} />
				<Route path="/skills" component={Skills} />
				<Route path="/git-hub" component={GitHub} />
				<Route path="/contact" component={Contact} />
			</div>
		</div>
	);
}

export default App;
