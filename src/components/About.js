import React, {useState} from 'react';
import { Accordion, Icon } from 'semantic-ui-react'

let oSkills = ['Fast Learner', 'Good Attitude', 'Friendly', 'Hard-Worker', 'Honest', "Creative"]
let computer = ['Word', 'Excel', 'PowerPoint', 'VSCode Editor','Photoshop', 'InDesign', 'Illustrator', 'Bridge']
let language = ['HTML', 'CSS', 'LESS', 'JS', 'React', 'Redux', 'NodeJS', 'Express', 'SQLite', 'PostgreSQL', 'Knex', 'Python']


const About = () => {
const [acc , setAcc]= useState({activeIndex:0})
const { activeIndex } = acc

const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = acc
    const newIndex = activeIndex === index ? -1 : index

    setAcc({ activeIndex: newIndex })
  }


  return (
			<section className='section'>
			 <span className='left-right'>
					<section className='lists'>
						<Accordion styled>
							<Accordion.Title className='active title' active={activeIndex === 0} index={0} onClick={handleClick}>
								I am a<Icon name='dropdown' />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 0}>
								<ul>
									{oSkills.map((info, index) => {
										return <li key={index}> {info} </li>
									})}
								</ul>
							</Accordion.Content>
							<Accordion.Title active={activeIndex === 1} index={1} onClick={handleClick}>
								Full Stack Web Developer
								<Icon name='dropdown' />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 1}>
								<ul>
									{language.map((info, index) => {
										return <li key={index}> {info} </li>
									})}
								</ul>
							</Accordion.Content>
							<Accordion.Title active={activeIndex === 2} index={2} onClick={handleClick}>
							Who Dabbles In
							<Icon name='dropdown' />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 2}>
								<ul>
									{computer.map((info, index) => {
										return <li key={index}> {info} </li>
									})}
								</ul>
							</Accordion.Content>
						</Accordion>
					</section>


				<p className='about-p'>
					Being Disabled has taught me to appreciate the social experience that a job brings, while being thankful for being
					able to be a productive member of society. It has also allowed me the opportunity to craft and hone my programming
					skills. Crafting applies to my programming because it has taught a distinct attention for detail allowing me to
					pinpoint syntax errors with some comfort and patience. It also helps in allowing parts of a whole too make a
					complete picture in my mind. It has taught me both how to follow directions and make my own path. Honing my
					programming skills, with an education at Lambda School which provides much guided learning and project apps that
					could become marketable someday. Please checkout my GitHub Link to see all my progress and projects.
				</p>
			</span>
			</section>
		)
}

export default About;