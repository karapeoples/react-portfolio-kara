import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const Contact = () => {
  const margin ={
    margin: "5%",
  }
  const handleClick = (e) => {
    e.preventDefault()
  }
  const twitter = 'https://twitter.com/SpookRazorII'
  const linkedIn = 'https://www.linkedin.com/in/karapeoples1978'

  return (
    
    <div className='contact'>
      <Button color='twitter' style={margin} href={twitter}>
      <Icon name='twitter' /> Twitter
      </Button>
      <Button color='linkedin' style={margin} href={linkedIn}>
      <Icon name='linkedin' /> LinkedIn
      </Button>
      <Button positive style={margin}><Icon name='phone'/>(918)967-9010</Button>
      <Button secondary onClick={handleClick} style={margin}><Icon name='phone square'/>(918)707-0529</Button>
    </div>
    
    
  )
}

export default Contact