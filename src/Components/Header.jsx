import React from 'react'
import headerImage from "../assets/headerImg.jpg"
const Header = () => {
  return (

    <>
    <div id = "home" className="header">
      <div className="h-text-div">
      <div className="h-text">
      <h1>ZAZ Agency Welcomes You</h1>
      <p>Working With   You</p>
    </div>
      </div>

    <img className="h-img" style ={{width: '100%'}} src={headerImage} alt="HeaderImage" />
    </div>
 
    </>

  )
}

export default Header