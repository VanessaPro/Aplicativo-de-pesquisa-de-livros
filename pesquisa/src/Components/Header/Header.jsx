import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holde'>
      <header className='header'>
          <Navbar />
          <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            {" "}
            Find your book of choice
          </h2>
        <br />
        <p className="header-text fs-18 fw-3">Success is born from wanting, determination and persistence in reaching a goal. Even if you don't reach the target, those who seek and overcome obstacles will at least do admirable things</p>
           <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
