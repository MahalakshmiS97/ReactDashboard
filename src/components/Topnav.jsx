import React from 'react'
import notification from './images/Notification.png'

function Topnav() {
  return (
    <>
   <nav className="navbar">
  <form className="container-fluid">
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input type="text" className="form-control formcl" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
      
    </div>
    <div>
    <img className="notification" src={notification}/>
    </div>
  </form>
</nav>
    </>
  )
}

export default Topnav
