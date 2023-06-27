import React from 'react';
import LoaderImg from "../../img/loader.svg";
import "../Louder/Louder.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader