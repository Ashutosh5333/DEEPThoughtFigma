import React from "react";
import "./Style/dash.css";
import first from "../Assets/first.png";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillLightbulbFill, BsFillQuestionSquareFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import {FiChevronDown} from "react-icons/fi";



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

              <div className="allicons">
                <BsFillLightbulbFill  className="cion"/>
                <RiMessage2Fill  className="cion"/>
                <BsFillQuestionSquareFill  className="cion"/>
                <svg
                 className="cion"
                  width="20"
                  height="18"
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

            <div className="thred">
              <div className="thread">
                <p> Select Categ </p>
              </div>
              <div className="arrow">
                <FiChevronDown />
              </div>
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
