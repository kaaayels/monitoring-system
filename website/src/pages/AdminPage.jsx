import React from 'react'
import GameForm from './EventsPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminPage() {
  return (
    <div className="header">
      Welcom Admin!
      You may now add and edit event schedules.

      <div className="event">
      <h2>
        Today's Event
      </h2>

      <ToastContainer />
      </div>



      </div>
  );
}

export default AdminPage