import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubCalendar from "react-github-calendar";
import { Image } from "semantic-ui-react";
import { Card } from "reactstrap";

const UserCard = ({ name, login, img, github, files, area, repoNum, followed, followers, iconGH, iconB }) => {
	return (
		<section className='userCardSection'>
			<Card>
				<div className='back'>
					<div>
						<div className='imgDiv'>
							<span className='border'>
								<Image src={img} alt='avatar' avatar className='img' />
							</span>
						</div>
						<span>
							<h1 className='userCardSection'>{name}</h1>
						</span>
						<div className='ucicons'>
							<span className='ucspan'>
								<a href={github}>
									<FontAwesomeIcon icon={iconGH} href={github} target='_blank' rel='noopener noreferrer' className='gh' />
								</a>
							</span>
							<span className='ucspan'>
								<a href={files} target='_blank' rel='noopener noreferrer'>
									<FontAwesomeIcon icon={iconB} className='branch' />
								</a>
							</span>
						</div>
					</div>

					<div className='ulA'>
						<ul className='bullet'>
							<li> Location: {area}</li>
							<li>Public Repos: {repoNum}</li>
							<li> Following: {followed}</li>
							<li> Followers: {followers}</li>
						</ul>
					</div>
					<div className='userCalendar'>
						<GitHubCalendar username={login} />
					</div>
				</div>
			</Card>
		</section>
	)
};
export default UserCard;
