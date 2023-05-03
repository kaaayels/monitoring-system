import React from "react";
import line2 from '../styles/icons/line2.png';
import '../styles/pages/events-page.css'


export function LeaderboardsPage() {

  return (
    <div className="header-container">
    <div className="title-event">
      <h2>
        Leaderboards
        <div className="line">
        <img src={line2} alt="line" />
        </div>
      </h2>
    </div>
    </div>
  );
}