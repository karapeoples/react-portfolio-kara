import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserCard = ({ name, img, github, files, area, repoNum, followed, followers, iconGH, iconB }) => {
  

  return (
    <section className='userCardSection'>
      <div>
        <div className='back'>
        <div>

       <div className='imgDiv'>
          <span className='border'><img src={img} alt="avatar" avatar className='img' /></span>
        <span><h1 className='userCardSection'>{name}</h1></span>
          </div>
          
        <div className='ucicons'>
          <span className='ucspan'><a href={github}><FontAwesomeIcon icon={iconGH} href={github} className='gh'/></a></span>
          <span className='ucspan'><a href={files}><FontAwesomeIcon icon={iconB} className='branch'/></a></span>
          </div>
          
        </div>
        
      <div className="ul">
        <ul>
        <li> Location: {area}</li>
        <li>Public Repos: {repoNum}</li>
        <li> Following: {followed}</li> 
        <li> Followers: {followers}</li>
        </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default UserCard;