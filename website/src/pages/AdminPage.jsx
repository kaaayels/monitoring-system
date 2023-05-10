import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import AdminEdit from './AdminEdit'

function AdminPage() {
  return (
    <div className="header">
      Welcom Admin!
      You may now add and edit event schedules.

      <div className="event">
      <h2>
        Today's Event
      </h2>

    <AdminEdit />
      </div>



      </div>
  );
}

export default AdminPage