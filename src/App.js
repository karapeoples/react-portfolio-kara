import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import logo from "./images/logo.png";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import GitHub from "./components/git-hub/GitHub";
import Showcase from "./components/Showcase";
import { Button } from "reactstrap";

const navButton = {
	background: "gold",
	color: "maroon",
	border: "2px solid maroon",
	fontSize: "18px",
	fontFamily: "Forum, cursive",
};

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Link to="/">
					<img src={logo} alt="lambda-grad" className="logo" />
				</Link>

				<nav>
					<Link to="/showcase" className="link">
						<Button style={navButton}>Showcase</Button>
					</Link>

					<Link to="/about" className="link">
						<Button style={navButton}>About</Button>
					</Link>

					<Link to="/skills" className="link">
						<Button style={navButton}>Skills</Button>
					</Link>

					<Link to="/git-hub" className="link">
						<Button style={navButton}>GitHub</Button>
					</Link>

					<Link to="/contact" className="link">
						<Button style={navButton}>Contact</Button>
					</Link>
				</nav>
			</header>
			<div>
				<Route exact path="/" component={Landing} />
				<Route path="/about" component={About} />
				<Route path="/skills" component={Skills} />
				<Route path="/git-hub" component={GitHub} />
				<Route path="/contact" component={Contact} />
				<Route path="/showcase" component={Showcase} />
			</div>
		</div>
	);
}

export default App;
