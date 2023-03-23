import React from "react";
import "./Style/dash.css";
import first from "../Assets/first.png";
import { IoIosArrowUp } from "react-icons/io";
import {
  BsArrow90DegLeft,
  BsArrow90DegRight,
  BsFillLightbulbFill,
  BsFillQuestionSquareFill,
} from "react-icons/bs";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import { RiMessage2Fill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import {data} from "./data.js"
 import {task1} from "./data.js"
 console.log(task1)
 console.log(task1.asset_title)

const Dashboard = () => {
  return (
    <>
      <div className="Container-Dashboard">
        <div className="techline">
          <div className="left">
            <h1> Technical Project Management </h1>
          </div>

          <div className="Right">
            <h1> Submit Task </h1>
          </div>
        </div>

        {/* ---------------- */}

        <div className="Exploredata">
          <div className="mid">
            <h1> Explore the world of management </h1>
          </div>

          <div className="bottom">
            <p>
              As a project manager, you play an important reole in leading a
              project through initiation, planning, execution, monitoring,
              controlling and completion. How? Do you want to manage each and
              every step of your life?
            </p>
          </div>
        </div>

        {/* --------------------------- */}
         
               <div className="technical-project">
          <div className="left-tech">
         
            <div className="Heading-top">
              <p> Technical Project Management </p>
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
            

            <div className="image-section">
              <img src={first} alt="firstimag" />
            </div>
          </div>

          <div className="Right-tech">
            <div className="Heading-top">
              <p> Threadbuild </p>
              <div className="elipis">
                <p> i </p>
              </div>
            </div>
            <div className="Description">
              <p>
                {" "}
                <span> Description : </span> Watch the video and threadbuild,
                and jot out key threads while watching the video
              </p>
            </div>
            <div className="thred">
              <div className="arrow">
                <IoIosArrowUp />
              </div>
              <div className="thread">
                <p> Thread A </p>
              </div>
            </div>

            <div className="SubHeadings">

              <div className="subthread">
                <div className="sub">
                  <h1> Sub thread 1 </h1>
                </div>
                <div className="Enter">
                  <h1> Enter Text here </h1>
                </div>
              </div>

              <div className="subthread">
                <div className="sub">
                  <h1> Sub Interpretation 1</h1>
                </div>
                <div className="Enter">
                  <h1> Enter Text here </h1>
                </div>
              </div>

            </div>

            <div className="Icons">
              <div className="iconshome">
                <BsFillLightbulbFill className="homecs" />
                <RiMessage2Fill className="homecs" />
                <BsFillQuestionSquareFill className="homecs" />
                <svg
                  width="25"
                  height="35"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4044 6.867C13.236 4.356 12.1786 1.908 10.1952 0C8.19305 1.926 7.08879 4.374 6.87361 6.867C8.07115 7.479 9.17535 8.27101 10.139 9.23401C11.1026 8.28001 12.2069 7.488 13.4044 6.867ZM7.32312 9.25203C7.19214 9.16203 7.04227 9.08099 6.90193 8.99099C7.04227 9.08999 7.19214 9.16203 7.32312 9.25203ZM13.3295 9.02703C13.2078 9.10803 13.0765 9.17103 12.9549 9.26103C13.0765 9.17103 13.2078 9.10803 13.3295 9.02703ZM10.139 12.105C8.1275 9.15296 4.69393 7.2 0.783203 7.2C0.783203 11.988 3.92655 16.038 8.29571 17.541C8.88512 17.748 9.50281 17.901 10.139 18C10.7752 17.892 11.3835 17.739 11.9823 17.541C16.3515 16.038 19.4948 11.988 19.4948 7.2C15.5841 7.2 12.1505 9.15296 10.139 12.105Z"
                    fill="#323232"
                  />
                </svg>
              </div>

              <div className="box">
                <div>
                  <h1> Select Categ </h1>
                </div>
                <div>
                  <h1>
                    {" "}
                    <FiChevronDown />{" "}
                  </h1>
                </div>
              </div>

              <div className="box">
                <div>
                  <h1> Select Process </h1>
                </div>
                <div>
                  <h1>
                    {" "}
                    <FiChevronDown />{" "}
                  </h1>
                </div>
              </div>
            </div>

            <div className="subbut">
              <button className="subbutton"> + Sub-thread </button>
            </div>

            <div className="summary">
              <div className="summarytext">
                <h1> Summary for Thread A </h1>
              </div>
              <div className="textenter">
                <h1> Enter Text here </h1>
              </div>
            </div>
          </div>

          {/* ------------------- */}
        </div>

        <div className="technical-project">
          <div className="left-tech">
            <div className="Heading-top">
              <p> Structure your pointers </p>
              <div className="elipis">
                <p> i </p>
              </div>
            </div>

            <div className="Description">
              <p>
                <span> Description : </span>Write a 300 - 400 word article from
                your thread . Publish your understanding and showcase your
                understanding to the entire world
              </p>
            </div>
            <div className="Titlecon">
              <h1> Title </h1>
              <div className="title"></div>

              <h1> Content </h1>
              <div className="title-2">
                <div className="filetitle">
                  <div className="filechild">
                    <p>File</p>
                    <p>Edit</p>
                    <p>View</p>
                    <p>Format</p>
                    <p>Tools</p>
                    <p>Table</p>
                    <p>Help</p>
                  </div>
                </div>
                <div className="paragrapgh">
                  <div className="paragraphchild">
                    <p>
                      {" "}
                      <BsArrow90DegLeft />{" "}
                    </p>
                    <p>
                      {" "}
                      <BsArrow90DegRight />{" "}
                    </p>
                    <p>
                      {" "}
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5961 1.8999H17.0995M17.0995 1.8999V7.40335M17.0995 1.8999L11.5961 7.40335M7.40397 17.0999H1.90052M1.90052 17.0999V11.5964M1.90052 17.0999L7.60052 11.3999M17.1 11.596V17.0994M17.1 17.0994H11.5966M17.1 17.0994L11.5966 11.596M1.90002 7.40385L1.90002 1.9004M1.90002 1.9004L7.40348 1.9004M1.90002 1.9004L7.60002 7.6004"
                          stroke="#616161"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>
                    <p className="textparagraph"> Paragraph </p>
                    <p> <BiDotsHorizontalRounded /> </p>
                  </div>
                </div>
              </div>
              <div className="lastTitle">

              </div>

            </div>
          </div>

          <div className="Right-tech">
            <div className="Heading-top">
              <p> Threadbuild </p>
              <div className="elipis">
                <p> i </p>
              </div>
            </div>
            <div className="Description">
              <p>
                {" "}
                <span> Description : </span> Watch the video and threadbuild,
                and jot out key threads while watching the video
              </p>
            </div>
          
          <div className="midcontainer">
               <div className="intro">
                 <p>   <IoIosArrowUp /> </p>
                 <p> Introduction </p>
               </div>

               <div className="description-1">
                <p>  The 4SA Method , How to bring a idea into progress ?</p>
                  <button className="seemore">See More </button> 
               </div>

               <div className="intro-2">
                 <p>   <IoIosArrowUp /> </p>
                 <p> Thread  A </p>
               </div>
 
               <div className="description-2">
                <p> How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                  <button className="seemore1">See More </button> 
               </div>

                <div className="example">
                  <h1> Example 1</h1>
                </div>   
                <div className="example2">
                  <h1> You have a concept , How will you put into progress ?</h1>
                </div>           

          </div>

          </div>

          {/* ------------------- */}
        </div>
          
          </div>


    </>
  );
};

export default Dashboard;
