import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";

const Card = ({Icon, title, jobs}) => {
  return (
    <div className="main__category-card">
                  <div className="main__category-card-left-icon-container">
                    <Icon className="main__category-card-left-icon" />
                  </div>

                  <div className="main__category-card-right">
                    <div className="main__category-card-title">
                      <h3>{title}</h3>
                      <p>{jobs} plus jobs</p>
                    </div>

                    <div className="main__category-card-right-icon-container">
                      <BiRightArrowAlt className="main__category-card-right-icon" />
                    </div>
                  </div>
                </div>
  )
}

export default Card