import React from 'react'
import { Card, Col, Row, Button, CardImg, CardBody } from 'reactstrap'
import MedCab from '../images/MedCab.JPG'
import keepSavvy from '../images/keepSavvy.JPG'
import ff from '../images/ff.JPG'
import GT from '../images/goldentutors.JPG'
import SFR from '../images/SFR.JPG'
import TH from '../images/TH.JPG'
import CM from '../images/CM.JPG'


const card1 = {
	height: '525px',
	padding: '1%',
	background: '#1f5c70',
	border: '5px double #e3d6c9',
	borderRadius: '5%',
}
const gold = {
	color: '#e3d6c9',
	fontSize: '18px',
	fontFamily: 'Quicksand, sans-serif'
}
const navButton = {
	background: '#e3d6c9',
	color: '#1f5c70',
	border: '2px solid #1f5c70',
	fontSize: '18px',
	fontFamily: 'Poiret One, cursive',
	width: '75%',
	margin: '0 auto',
}
const navButton2 = {
	background: '#e3d6c9',
	color: '#1f5c70',
	border: '2px solid #1f5c70',
	fontSize: '18px',
	fontFamily: 'Poiret One, cursive',
	width: '15%',
	margin: '0 auto',
}
const divide = {
	border: '1px solid #e3d6c9',
}

const height = {
	height: '300px',
}

const Showcase = () => {
	return (
		<div>
			<h1>Showcase</h1>
			<Button target="_blank" style={navButton2} href='https://codestats.net/users/kararpeoples'>
				Code Stats
			</Button>
			<div>
				<Row>
					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button target="_blank"  style={navButton} href='https://med-cabinet.netlify.com/'>
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
								<Button target="_blank"  style={navButton} href='https://github.com/med-cabinet'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button target="_blank"  style={navButton} href='https://elegant-aryabhata-cdd64e.netlify.com/index.html'>
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
								<Button target="_blank"  style={navButton} href='https://github.com/build-week-prisonerSkills'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button target="_blank"  style={navButton} href='https://fishfriendsapp.netlify.com/'>
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
								<Button target="_blank"  style={navButton} href='https://github.com/Fish-Friends-Build'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button target="_blank"  style={navButton} href='https://goldentutors.netlify.com/'>
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
								<Button target="_blank"  style={navButton} href='https://github.com/BW-SchoolInTheCloud1/FrontEnd'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button target="_blank"  style={navButton} href='https://sfr-pearl.vercel.app/'>
									Secret Family Recipes
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={SFR} alt='project snapshot' style={height} />
									</div>
									<p>Advanced React and State Management</p>
								</CardBody>
								<span style={divide} />
								<Button target="_blank"  style={navButton} href='https://github.com/karapeoples/cherished-recipes-fe'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button target="_blank"  style={navButton} href='https://optimistic-chandrasekhar-c6d265.netlify.app/'>
									Troll Hub
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={TH} alt='project snapshot' style={height} />
									</div>
									<p>Consumed Data Science API and Built RestAPI</p>
								</CardBody>
								<span style={divide} />
								<Button target="_blank"  style={navButton} href='https://github.com/Build-Week-SaltiestHackerNewsTrolls2/back-end'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4'>
						<div className='workCard'>
							<Card style={card1}>
								<Button target="_blank"  style={navButton} href='https://co-make.chitowncoder.vercel.app/'>
									Co-Make
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className='showCase'>
										<CardImg src={CM} alt='project snapshot' style={height} />
									</div>
									<p>Built RestAPI and Helped Guide React Portion</p>
								</CardBody>
								<span style={divide} />
								<Button target="_blank"  style={navButton} href='https://github.com/karapeoples/be_cm'>
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
