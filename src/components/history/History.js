import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';

const navButton = {
	background: 'gold',
	color: 'maroon',
	border: '2px solid maroon',
	fontSize: '18px',
	fontFamily: 'Forum, cursive',
}

const History = () => {

return(
  <div className="App">
    <header className="App-header">
      <section className="bg2">
      <nav className='navHistory'>
					<Button.Group>
        <Link to="/workhistory" className="link2">
          <Button style={navButton}>Work</Button>
        </Link>

        <Link to="/education" className="link2">
          <Button style={navButton}>Education</Button>
        </Link>

        <Link to='/volunteer' className='link2'>
          <Button style={navButton}>Extra</Button>
        </Link>

          <Link to='/showcase' className='link2'><Button style={navButton}>Showcase</Button></Link>
        </Button.Group>
        </nav>
      </section>
    </header>
  </div>
 )
}
export default History;