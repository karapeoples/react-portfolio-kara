import React from 'react'
import { Card, Col, Row, Button, CardImg, CardBody } from 'reactstrap'
import MedCab from '../images/MedCab.JPG'
import npod from '../images/npod.JPG'
import keepSavvy from '../images/keepSavvy.JPG'
import ff from '../images/ff.JPG'
import errands from '../images/errands.JPG'
import Museum from '../images/artmuseum.JPG'
import GT from '../images/goldentutors.JPG'
import MiniJournal from '../images/minijournals.JPG'

const card1 = {
	height: '550px',
	padding: '1%',
	background: 'black',
	border: '5px double gold',
	borderRadius: '5%',
}
const gold = {
	color: 'gold',
	fontSize: '18px',
}
const navButton = {
	background: 'gold',
	color: 'maroon',
	border: '2px solid maroon',
	fontSize: '18px',
	fontFamily: 'Forum, cursive',
	width: '75%',
	margin: '0 auto',
}
const navButton2 = {
	background: 'gold',
	color: 'maroon',
	border: '2px solid maroon',
	fontSize: '18px',
	fontFamily: 'Forum, cursive',
	width: '15%',
	margin: '0 auto',
}
const divide = {
	border: '1px solid gold',
}

const height = {
	height: '300px',
}

const Showcase = () => {
	return (
		<div>
			<h1>Showcase</h1>
			<Button style={navButton2} href='https://codestats.net/users/kararpeoples'>
				Code Stats
			</Button>
			<div>
				<Row>
					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button style={navButton} href='https://goldentutors.netlify.com/'>
									Golden Tutors
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={GT} alt='project snapshot' style={height} />
									</div>
									<p>Advanced React and State Management</p>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href='https://github.com/BW-SchoolInTheCloud1/FrontEnd'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>

					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button style={navButton} href='https://me-journal.kararpeoples.now.sh/'>
									MiddleEarth Mini-Journals
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={MiniJournal} alt='project snapshot' style={height} />
									</div>
									<p>All My Work but the Provided DB</p>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href='https://me-journal.herokuapp.com'>
									Published BackEnd
								</Button>
								<Button style={navButton} href='https://github.com/karapeoples/node-api3-project'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>

					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button style={navButton} href='https://errandlist.now.sh/'>
									ToDoList
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={errands} alt='project snapshot' style={height} />
									</div>
									<p>All Work is Mine</p>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href='https://github.com/karapeoples/React-Todo'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>

					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button style={navButton} href='https://fishfriendsapp.netlify.com/'>
									Fish Friends
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={ff} alt='project snapshot' style={height} />
										<p>Did the Fishing Spots API Call & Style for React</p>
									</div>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href='https://github.com/Fish-Friends-Build'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>

					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button style={navButton} href='https://elegant-aryabhata-cdd64e.netlify.com/index.html'>
									Keep Savvy
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={keepSavvy} alt='project snapshot' style={height} />
									</div>
									<p>I did all the work on the About Page</p>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href='https://github.com/build-week-prisonerSkills'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>

					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button style={navButton} href='https://karanpod.netlify.com/'>
									NPOD
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={npod} alt='project snapshot' style={height} />
									</div>
									<p>All My Work</p>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href='https://github.com/karapeoples/nasa-photo-of-the-day'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>

					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button style={navButton} href='https://med-cabinet.netlify.com/'>
									Med-Cabinet
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={MedCab} alt='project snapshot' style={height} />
									</div>
									<p>Responsible for HTML and LESS Static Landing Page</p>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href='https://github.com/med-cabinet'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>

					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button style={navButton} href='https://react-redux-app-ten.now.sh/'>
									Mini Harvard Art Museum
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={Museum} alt='project snapshot' style={height} />
										<p>All my work</p>
									</div>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href='https://github.com/karapeoples/React-Redux-App'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}
export default Showcase
