import React, {useState} from 'react';
import { Button, Icon } from 'semantic-ui-react'
import emailjs from 'emailjs-com'
import apiKeys from './apiKeys'

const Contact = () => {
	const bodyObj = {
			from_name: '',
		  to_name: 'Kara',
		  user_email: '',
		  message: ''
}
	const [text, setText] = useState(bodyObj)

	const handleSubmit = (e) => {
			e.preventDefault()
			text !== bodyObj
				? emailjs
					.send('kara_contact', apiKeys.TEMPLATE_ID , text, apiKeys.USER_ID)
						.then((res) => {
							console.log('SUCCESS!', res.status, res.text)
						})
						.then((res) => {
							setText(bodyObj)
						})
						.catch((err) => {
							console.log('FAILED...', err)
						})
				: console.log('No Information Supplied')
		}

	const handleChange = (e) => {
	setText({...text,[e.target.name]: e.target.value})
}
  const margin ={
    margin: "5%",
    padding: '2%',
  }




  const twitter = 'https://twitter.com/SpookRazorII'
  const linkedIn = 'https://www.linkedin.com/in/karapeoples1978'

  return (
			<section>
				<div className='contact'>
					<Button target='_blank' rel='noopener noreferrer' color='twitter' style={margin} href={twitter}>
						<Icon name='twitter' /> Twitter
					</Button>
					<Button target='_blank' rel='noopener noreferrer' color='linkedin' style={margin} href={linkedIn}>
						<Icon name='linkedin' /> LinkedIn
					</Button>
				</div>

				<form id='contact-form' onSubmit={handleSubmit}>
					<h1>Contact Me</h1>
					<label>Name</label>
					<input placeholder='Name' type='text' name='from_name' onChange={handleChange} value={text.from_name} />
					<br />
					<label>Email</label>
					<input placeholder='Email..' type='email' name='user_email' onChange={handleChange} value={text.user_email} />
					<br />
					<label>Message</label>
					<textarea placeholder='Write me a Note...' type='text' name='message' onChange={handleChange} value={text.message} />
				<br />
					<button className='btnColor' type='submit'>
						Send
					</button>
				</form>
			</section>
		)
}

export default Contact