import React from 'react';
import coverPage from '../images/coverPage.jpg';


const Landing = () => {
  

  return (
    <div >
      

   <div className='design'>

     <img src={coverPage} alt='graphic-design' className='coverPage'/>

<div className='rotatedBorder'></div>

<div className='grid'><div data-white></div><div></div><div></div><div data-white></div></div>

<div className='blend'>
    <img src={coverPage} alt='graphic-design' className='coverPage'/>
    <div className='grid'><div></div><div data-white></div><div data-white></div><div></div></div>
</div>

      </div> 
      <br/>
      <section className='landWrapper'>
      <h1>Kara R. Peoples</h1>
      <h2>Full Stack Web Developer</h2>
        <h3>Student</h3>
      </section>
    </div>
  )
}

export default Landing;