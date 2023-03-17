import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {BsTools} from "react-icons/bs"
import {IoIosNotificationsOutline} from "react-icons/io"
import {CgProfile} from "react-icons/cg"


const Navbar = () => {

  return (
    <>
     <nav className='Continer-nav'>

        <div className='nav-icon'>
            <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="deep"/>
        </div>

         <div className='Nav-icons'> 
         <div className='nav-home'> 
            <AiOutlineHome className='home'/>
         </div>
         <div
         className='nav-home'> 
          <BsTools className='home'/>
          </div>

         <div className='nav-home'> 
           <IoIosNotificationsOutline  className='home'/>
         </div>
         <div className='nav-home'> 
          <CgProfile className='home'/>
          </div>

         </div>

     </nav>
    </>
  )
}

export default Navbar