import { NavLink } from "react-router-dom";
import React from "react";
import bulogo from '../styles/bulogo.png';
import { BsCalendar3Event } from 'react-icons/bs';
import { ImListNumbered } from 'react-icons/im';
import { FaMedal } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';


export function Sidebar() {
  return (
    <div className="sidebar"> 
      <div className="sidebar-logo">
        <img src={bulogo} alt="bulogo" />
      </div>

      <div className="title">
        BICOL&nbsp;<span className="orange-text">UNIVERSITY</span>
      </div>

      <div className="title2">Event Monitoring System</div>

      <div className="Nav">
 
          <NavLink to="/" className="links" activeclassname="active-link">
            <BsCalendar3Event />
            Events
            </NavLink>


       
          <NavLink to="/standings-page" className="links" activeclassname="active-link">
            <ImListNumbered />
            Standings
            </NavLink>
     

   
          <NavLink to="/leaderboards-page" className="links" activeclassname="active-link">
            <FaMedal />
            Leaderboards
            </NavLink>
 
        </div>
        <div className="login-box">
        <div className="login">
          <NavLink to="/login-page">
            <BsPersonCircle/>
            Login | Admin
          </NavLink>

    
      </div>
      </div>

    </div>
  );
}
