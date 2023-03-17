import React from 'react'
import "./Style/Home.css"
import Side from './Side';
import Dashboard from './Dashboard';
import RightSide from './RightSide';

export const Home = () => {


  return (
    <>
     <div className='Home-container'>

     <div className='Side-left'> 
        <Side/>
      </div> 

      <div className='Dashboard'> 
       <Dashboard/>
       </div>

       <div className='Side-Right'> 
        <RightSide/>
        </div>

     </div>
    </>
  )
}
