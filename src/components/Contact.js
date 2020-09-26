import React, {useState} from 'react';
import { Button, Icon } from 'semantic-ui-react'
import emailjs from 'emailjs-com'

const Contact = () => {

	const [text, setText] = useState({
		from_name: '',
		to_name: 'Kara',
		user_email: '',
		message: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault()

		emailjs
			.send('kara_contact', 'template_1pq3c8a', text)
			.then((res) => {
				console.log('SUCCESS!', res.status, res.text)
			})
			.catch((err) => {
				console.log('FAILED...', err)
			})
		setText({
				from_name: '',
				to_name:'Kara',
				user_email: '',
				message: ''
		 })
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
				<input placeholder='Name' type='text' name='from_name' onChange={handleChange} value={text.from_name}/>
				<br/>
					<label>Email</label>
				<input placeholder='Email..' type='email' name='user_email' onChange={handleChange} value={text.user_email} />
				<br/>
					<label>Message</label>
					<textarea placeholder="Write me a Note..." name='message' onChange={handleChange} value={text.message} />
					<input type='submit' value='Send' />
				</form>
			</section>
		)
}

export default Contact