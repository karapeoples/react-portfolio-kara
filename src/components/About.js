import React from 'react';
import avatar from '../images/avatar.jpg';


let oSkills = ['Fast Learner', 'Good Attitude', 'Friendly', 'Hard-Worker', 'Honest', "Creative"]
let computer = ['Word', 'Excel', 'PowerPoint', 'VSCode Editor','Photoshop', 'InDesign', 'Illustrator', 'Bridge']
let language = ['HTML', 'CSS', 'LESS', 'JS', 'React', 'Redux']


const About = () => {

  return (
    <section className='section'>
      <span className='left-right'>
				<div className='imageDiv'>
          <img className='image' src={avatar} alt='Kara R. Peoples' />
          <h1 class='aboutH1'>Kara R. Peoples</h1>
				</div>

				<section className='lists'>
				<div class='ui styled accordion' animate children  >
					<div class='active title' >
						I am
					</div>
					<div class='active content'>
						<ul>
							{oSkills.map((info) => {
								return <li> {info} </li>
							})}
						</ul>
					</div>
					<div class=' active title'>
						A Full Stack Web Developer
					</div>
					<div class='active content'>
						<ul>
							{language.map((info) => {
								return <li> {info} </li>
							})}
						</ul>
					</div>
					<div class='active title'>
						Who Dabbles In
					</div>
					<div class='active content'>
						<ul>
							{computer.map((info) => {
								return <li> {info} </li>
							})}
						</ul>
					</div>
          </div>
        </section>
        </span>
        
				<p className='about-p'>
					Being Disabled has taught me to appreciate the social experience that a job brings, while being thankful for being
					able to be a productive member of society. It has also allowed me the opportunity to craft and hone my programming
					skills. Crafting applies to my programming because it has taught a distinct attention for detail allowing me to
					pinpoint syntax errors with some comfort and patience. It also helps in allowing parts of a whole too make a
					complete picture in my mind. It has taught me both how to follow directions and make my own path. Honing my
					programming skills, with an education at Lambda School which provides much guided learning and project apps that
					could become marketable someday. Please checkout my GitHub Link to see all my progress and projects.
				</p>
			</section>
		)
}

export default About;