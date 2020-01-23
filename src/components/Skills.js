import React from "react";
import programs from "../images/programs.jpeg";
import languages from "../images/computerlanguages.jpeg";
import adobe from "../images/otherskills.jpeg";

let computer = ["Word", "Excel", "PowerPoint", 'VSCode Editor', ];
let adobeArr = ["Photoshop", "InDesign", "Illustrator", "Bridge"];
let language = ["HTML", "CSS", "LESS", "JS", "React"];
const Skills = () => {
	return (
		<div>
			<h1>Skills</h1>

			<section className="language">
				<div>
					<img src={languages} alt="computer languages" />
				</div>
				<div>
          <ul>
          {language.map(info => {
         return(
           <li> {info} </li>
        )})}
          </ul>
				</div>
			</section>

			<section className="adobe">
				<div>
					<img src={adobe} alt="adobe skills" />
				</div>
				<div>
          <ul>
          {adobeArr.map(info => {
         return(
           <li> {info} </li>
        )})}
          </ul>
				</div>
			</section>

			<section className="computer">
				<div>
					<img src={programs} alt="computer programs" />
				</div>
				<div>
          <ul>
          {computer.map(info => {
         return(
           <li> {info} </li>
        )})}
          </ul>
				</div>
			</section>
		</div>
	);
};

export default Skills;
