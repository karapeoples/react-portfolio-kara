import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FollowerCard = ({ name, img, github, files, iconGH, iconB }) => {
  

  return (
    <section>
      <div className='back'>
      <div className='imgDiv'>
       <span className='border'><img src={img} alt="avatar" avatar className='img' /></span> 
        <span className='fctitle'><h1>{name}</h1></span>
        </div>
        <div className='ficons'>
          <span className='fspan'><a href={github}><FontAwesomeIcon icon={iconGH} href={github} className='gh' /></a></span>
            <span className='fspan'><a href={files}><FontAwesomeIcon icon={iconB} className='branch'/></a></span>
          </div>
        </div>
      
    </section>
  )
}
export default FollowerCard;