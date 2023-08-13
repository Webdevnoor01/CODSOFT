import React, { useState } from "react";
import { Link } from "react-router-dom";

const Button = ({
  btnTxt,
  type,
  btnHandler,
  customeClass,
  IconLoading,
  isLoading,
  to,
  bg,
  color,
  isLink
}) => {

  console.log(bg, color)
  return (
    <>
      {isLink && (
        <Link
          to={to}
          className="button"
          style={{
            backgroundColor:bg,
            color:color
          }}
        >
          {btnTxt}
        </Link>
      )}
      {!isLink && (
        <button
          className="button"
          type={type ? type : "button"}
          disabled={isLoading}
          onClick={btnHandler} style={{
            backgroundColor:`${bg} !important`,
            color:`${color} !important`
          }}
        >
          {isLoading ? IconLoading : btnTxt}
        </button>
      )}
    </>
  );
};

export default Button;
