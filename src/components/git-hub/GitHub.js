import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { Row } from "reactstrap";
import FollowerCard from "./FollowerCard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
library.add(faCodeBranch, faGithubSquare);

const GitHub = () => {
	const [user, setUser] = useState([]);
	const [followersList, setFollowersList] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		axios
			.get("https://api.github.com/users/karapeoples")
			.then(info => {
				console.log(info);
				setUser(info.data);
			})
			.catch(error => {
				console.log("None for You", error);
			});

		axios
			.get("https://api.github.com/users/karapeoples/followers")
			.then(info => {
				console.log(info);
				setFollowersList(info.data);
			})
			.catch(error => {
				console.log("No Follower Info", error);
			});
	}, []);

	const results = followersList.filter(character => {
			return character.login.toLowerCase().includes(searchTerm.toLowerCase());
	})

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<h1>GitHub User Info</h1>

			<UserCard
				name={user.name}
				login={user.login}
				img={user.avatar_url}
				github={user.html_url}
				files={user.repos_url}
				area={user.location}
				repoNum={user.public_repos}
				followed={user.following}
				followers={user.followers}
				iconGH={faGithubSquare}
				iconB={faCodeBranch}
			/>
			<div>
				<form>
					<section className="frame">
						<h3 className="font">{user.name}' Followers:</h3>
						<h5 className="font">Search Bar</h5>
						<input placeholder="Search..." onChange={handleChange} type="text" name="searchTerm" value={searchTerm} />
					</section>
				</form>
			</div>
			<div>
						<Row>
							{results.map(info => {
								return (
									<FollowerCard
										name={info.login}
										img={info.avatar_url}
										github={info.html_url}
										files={info.repos_url}
										iconGH={faGithubSquare}
										iconB={faCodeBranch}
									/>
								);
							})}
						</Row>
					</div>
		</div>
	);
};

export default GitHub;
