import React from "react";
import programs from "../images/programs.jpeg";
import languages from "../images/computerlanguages.jpeg";
import adobe from "../images/otherskills.jpeg";
import { Card, Image } from 'semantic-ui-react'

let computer = ["Word", "Excel", "PowerPoint", 'VSCode Editor', ];
let adobeArr = ["Photoshop", "InDesign", "Illustrator", "Bridge"];
let language = ["HTML", "CSS", "LESS", "JS", "React"];
const Skills = () => {

	const card1 = {
    width: '80%',
    margin: '1% auto',
    padding: '1%',
		background: 'black',
		border: '5px double gold',
		borderRadius: '5%'
}
const gold = {
  color: 'gold',
  fontSize: '18px',
}
	return (
		<div>
			<h1>Skills</h1>

			<Card style={card1}>
				<div>
					<Image className='image'src={languages} alt="computer languages" />
				</div>
				<div style={gold}>
          <ul className='ulB'>
          {language.map(info => {
         return(
           <li className='list'> {info} </li>
        )})}
          </ul>
				</div>
			</Card>

			<Card style={card1}>
				<div>
					<Image className='image'src={adobe} alt="adobe skills" />
				</div>
				<div style={gold}>
          <ul className='ulB'>
          {adobeArr.map(info => {
         return(
           <li className="list"> {info} </li>
        )})}
          </ul>
				</div>
			</Card>

			<Card style={card1}>
				<div>
					<Image className='image' src={programs} alt="computer programs" />
				</div>
				<div style={gold}>
          <ul className='ulB'>
          {computer.map(info => {
         return(
           <li className='list'> {info} </li>
        )})}
          </ul>
				</div>
			</Card>
		</div>
	);
};

export default Skills;
