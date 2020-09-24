import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const Contact = () => {
  const margin ={
    margin: "5%",
    padding: '2%',
  }
  const handleClick = (e) => {
    e.preventDefault()
  }
  const twitter = 'https://twitter.com/SpookRazorII'
  const linkedIn = 'https://www.linkedin.com/in/karapeoples1978'

  return (
			<div className='contact'>
				<Button target='_blank' rel="noopener noreferrer" color='twitter' style={margin} href={twitter}>
					<Icon name='twitter' /> Twitter
				</Button>
				<Button target='_blank' rel="noopener noreferrer" color='linkedin' style={margin} href={linkedIn}>
					<Icon name='linkedin' /> LinkedIn
				</Button>
			{/* no prevent default on email hrefs */}
				<Button  color='teal' style={margin} href={'mailTo: kararpeoples@yahoo.com'}>
					<Icon name='mail square' />
					kararpeoples@yahoo.com
				</Button>
				<Button disabled positive style={margin}>
					<Icon name='phone' />
					(918)967-9010
				</Button>
				<Button disabled secondary onClick={handleClick} style={margin}>
					<Icon name='phone square' />
					(918)707-0529
				</Button>
			</div>
		)
}

export default Contact