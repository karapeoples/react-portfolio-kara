import React from 'react';
import { Card, Grid } from 'semantic-ui-react';


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

const Work = () => {
  
  return (
    <div>
      <h1>Work History</h1>
      
      <Grid.Column>
        <div>
         <Grid.Row> 
        <div className='workCard' >
              <Card style={card1}>
                <h1 style={gold2}>Subway</h1>
                <span style={divide}/>
        <Card.Content style={gold}>
        <h3 >2003-2004</h3>
        <h4>Title: Assistant Manager</h4>
        <h5>Location: Bixby, OK</h5>
        <p>Duties: Open/Close Store, Count Deposits, Take Inventory, Regular Employee Duties(i.e. Making Sandwiches, Cleaning the Store etc.) </p>
        </Card.Content>
          </Card>
            </div>
            
          <div className='workCard'>
      <Card style={card1}>
                <h1 style={gold2}>Disabled</h1>
                <span style={divide}/>
        <Card.Content style={gold}>
        <h3>2004-Present</h3>
        <h4>Title: None</h4>
        <h5>Location: Stigler, OK</h5>
        <p>Duties: Approved for SSI in 2006-Present </p>
        </Card.Content>
          </Card>
         </div>
          </Grid.Row>
        </div>    
      </Grid.Column>
      
       </div>
  )
}

export default Work;