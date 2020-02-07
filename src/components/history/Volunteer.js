import React from 'react';
import { Card, Row, Col, CardBody} from 'reactstrap';


const card1 = {
  height: '450px',
  padding: '1%',
  background: 'black',
  border: '5px double gold',
  borderRadius: '5%'
}
const gold = {
color: 'gold',
fontSize: '18px',
}
const gold2 = {
  color: 'gold',
}
const divide = {
  border: '1px solid gold'
}

const Volunteer = () => {
  
  return (
    <div>
      <h1>Volunteer Work</h1>
      <div>
      <Row>
        
         <Col lg='4'> 
        <div className='workCard' >
              <Card style={card1}>
                <h1 style={gold2}>Lambda Tutor</h1>
                <span style={divide}/>
        <CardBody style={gold}>
        <h3 >Current</h3>
        <p>Duties: I have a peer-coding group I lead. I tutor them in the subjects and peer code and learn from them in the subjects I am currently studying. I also help out with peer-coding group one course behind me. </p>
        </CardBody>
          </Card>
            </div>
          </Col> 
          <Col lg='4'>
          <div className='workCard'>
      <Card style={card1}>
                <h1 style={gold2}>In2Books</h1>
                <span style={divide}/>
        <CardBody style={gold}>
        <p>Duties: In2Books.org Penpal program to help students learn to read. Correspondence and Questions about assigned books for their class which I read when sent to me. </p>
        </CardBody>
          </Card>
         </div>
           </Col>
      </Row>
      </div>
       </div>
  )
}

export default Volunteer;