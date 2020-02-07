import React from "react";
import { Card, Col, Row, CardBody } from "reactstrap";
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
const gold2 = {
	color: "gold",
};
const divide = {
	border: "1px solid gold",
};

const Education = () => {
	return (
		<div>
			<h1>Education</h1>
<div>
			<Row>
				
					<Col lg="4">
						<div className="workCard">
							<Card style={card1}>
								<h1 style={gold2}>Lambda School</h1>
								<span style={divide} />
								<CardBody style={gold}>
									<h3>Attended: 2019-Current</h3>
									<h4>Status: Current Student</h4>
									<h5>Location: Online</h5>
									<p>Course Info: Full-Stack Web Development, HTML, CSS, React </p>
								</CardBody>
							</Card>
            </div>
            </Col>

            <Col lg='4'>
						<div className="workCard">
							<Card style={card1}>
								<h1 style={gold2}>The Art Institute</h1>
								<span style={divide} />
								<CardBody style={gold}>
									<h6>Full Name: The Art Institute-Online</h6>
									<h3>Attended: 2010-2012</h3>
									<h4>Status: Withdrawn</h4>
									<h5>Location: Online-Division</h5>
									<p>Course Info: Interior Design, Drawing, Color Theory, Gaming Design </p>
								</CardBody>
							</Card>
						</div>
</Col>
            <Col lg='4'>
						<div className="workCard">
							<Card style={card1}>
								<h1 style={gold2}>RSU</h1>
								<span style={divide} />
								<CardBody style={gold}>
									<h6>Full Name: Rogers State University</h6>
									<h3>Attended: 2003-2003</h3>
									<h4>Status: Withdrawn</h4>
									<h5>Location: Claremore, OK</h5>
									<p>Course Info: Psychology, Sociology, Psychology Club, Liberal Arts </p>
								</CardBody>
							</Card>
            </div>
            </Col>

            <Col lg='4'>
						<div className="workCard">
							<Card style={card1}>
								<h1 style={gold2}>OSU</h1>
								<span style={divide} />
								<CardBody style={gold}>
									<h6>Full Name: Oklahoma State University</h6>
									<h3>Attended: 2000-2001</h3>
									<h4>Status: Quit</h4>
									<h5>Location: Okmulgee, OK</h5>
									<p>Course Info: Medical Terminology, Liberal Art Courses, Information Technology, Office Skills </p>
								</CardBody>
							</Card>
						</div>
          </Col>
          
					<Col lg="4">
						<div className="workCard">
							<Card style={card1}>
								<h1 style={gold2}>Pinnacles Highschool</h1>
								<span style={divide} />
								<CardBody style={gold}>
									<h3>Attended: 1996</h3>
									<h4>Status: Graduated</h4>
									<h5>Location: Soledad, CA</h5>
									<p>Course Info: Highschool, Floristry, Office Skills </p>
								</CardBody>
							</Card>
						</div>
					</Col>
        </Row>
      </div>
		</div>
	);
};
export default Education;
