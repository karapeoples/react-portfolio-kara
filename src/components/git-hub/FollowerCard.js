import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubCalendar from "react-github-calendar";
import { Col, Card } from "reactstrap";
import { Image } from "semantic-ui-react";

const margin = {
	margin: "1%",
};
const FollowerCard = ({ name, img, github, files, iconGH, iconB }) => {
	return (
		<Col lg="4" md="12" sm="12" className="fcContainer">
			<Card style={margin}>
				<div className="back">
					<div className="imgDiv">
						<span className="border">
							<Image src={img} alt="avatar" avatar className="img" />
						</span>
						<span className="fctitle">
							<h1>{name}</h1>
						</span>
					</div>
					<div className="ficons">
						<span className="fspan">
							<a href={github}>
								<FontAwesomeIcon icon={iconGH} href={github} className="gh" />
							</a>
						</span>
						<span className="fspan">
							<a href={files}>
								<FontAwesomeIcon icon={iconB} className="branch" />
							</a>
						</span>
					</div>
					<div className="followerCalendar">
						<GitHubCalendar username={name} />
					</div>
				</div>
			</Card>
		</Col>
	);
};
export default FollowerCard;
