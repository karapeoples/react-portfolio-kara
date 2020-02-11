import React from "react";
import { Card, Col, Row, Button, CardImg, CardBody } from "reactstrap";
import MedCab from "../images/MedCab.JPG";
import npod from "../images/npod.JPG";
import keepSavvy from "../images/keepSavvy.JPG";
import ff from "../images/ff.JPG";
import errands from "../images/errands.JPG";
const card1 = {
	height: "450px",
	padding: "1%",
	background: "black",
	border: "5px double gold",
	borderRadius: "5%",
};
const gold = {
	color: "gold",
	fontSize: "18px",
};
const navButton = {
	background: "gold",
	color: "maroon",
	border: "2px solid maroon",
	fontSize: "18px",
	fontFamily: "Forum, cursive",
	width: "75%",
	margin: "0 auto",
};
const divide = {
	border: "1px solid gold",
};

const height = {
	height: "300px",
};

const Showcase = () => {
	return (
		<div>
			<h1>Showcase</h1>
<div>
			<Row>
				<Col lg="4">
					
						<div className="workCard">
							<Card style={card1}>
								<Button style={navButton} href="https://errandlist.now.sh/">
									ToDoList
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className="showCase">
										<CardImg src={errands} alt="project snapshot" style={height} />
									</div>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href="https://github.com/karapeoples/React-Todo">
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					
					<Col lg='4'>
						<div className="workCard">
							<Card style={card1}>
								<Button style={navButton} href="https://fishfriendsapp.netlify.com/">
									Fish Friends
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className="showCase">
										<CardImg src={ff} alt="project snapshot" style={height} />
									</div>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href="https://github.com/Fish-Friends-Build">
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					
					<Col lg='4'>
						<div className="workCard">
							<Card style={card1}>
								<Button style={navButton} href="https://elegant-aryabhata-cdd64e.netlify.com/index.html">
									Keep Savvy
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className="showCase">
										<CardImg src={keepSavvy} alt="project snapshot" style={height} />
									</div>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href="https://github.com/build-week-prisonerSkills">
									Repo
								</Button>
							</Card>
						</div>
						</Col>

						<Col lg='4'>
						<div className="workCard">
							<Card style={card1}>
								<Button style={navButton} href="https://karanpod.netlify.com/">
									NPOD
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className="showCase">
										<CardImg src={npod} alt="project snapshot" style={height} />
									</div>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href="https://github.com/karapeoples/nasa-photo-of-the-day">
									Repo
								</Button>
							</Card>
						</div>
						</Col>

						<Col lg='4'>
						<div className="workCard">
							<Card style={card1}>
								<Button style={navButton} href="https://med-cabinet.netlify.com/">
									Med-Cabinet
								</Button>
								<span style={divide} />
								<CardBody style={gold}>
									<div className="showCase">
										<CardImg src={MedCab} alt="project snapshot" style={height} />
									</div>
								</CardBody>
								<span style={divide} />
								<Button style={navButton} href="https://github.com/med-cabinet">
									Repo
								</Button>
							</Card>
						</div>
				</Col>
				</Row>
			</div>
		</div>
	);
};
export default Showcase;