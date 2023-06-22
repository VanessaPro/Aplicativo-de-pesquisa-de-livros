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
        <p className="header-text fs-18 fw-3">O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis</p>
           <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
