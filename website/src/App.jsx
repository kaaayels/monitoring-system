import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { EventsPage } from "./pages/EventsPage";
import { LeaderboardsPage } from "./pages/LeaderboardsPage";
import { StandingsPage } from "./pages/StandingsPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage"
import "./styles/styles.css";

function App() {

  return (
    <div className="main">
      <Sidebar />
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/standings-page" element={<StandingsPage />} />
        <Route path="/leaderboards-page" element={<LeaderboardsPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/admin-page" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
