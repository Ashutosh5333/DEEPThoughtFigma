import React from "react";
import "./Style/rightside.css";

const RightSide = () => {
  return (
    <>
      <div className="rightcon">
        <div className="first">
          <svg
            className="closetag"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8333 1L1 20.8333M20.8333 20.8333L1 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <h1>Notice Board</h1>
        </div>

        <div> </div>
      </div>
    </>
  );
};

export default RightSide;
