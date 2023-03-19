import React from 'react'
import "./Style/cutom.css"
import {data} from "./data.js"
 
const task = data[0].tasks[0].assets
console.log("data",task)


const Customdecription = () => {
  return (
    <>
    {
      task.length > 0 && task.map((el) =>{
        return  <div className="customdescription"> 
            <div className="Heading-top">
              {/* <p> Technical Project Management </p> */}
               {el.asset_title}
              <div className="elipis">
                <p> i </p>
              </div>
            </div>
            <div className="Description">
              <p>
                {" "}
                <span> Description : </span>Story of Alignment Scope of Agility
                Specific Accountable Staggering Approach{" "}
              </p>
            </div>
          </div>
      })

    }
    
    </>
  )
}

export default Customdecription