import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function History() {
  return (
    <>
      <div>History</div>
      <nav>
        <Link to="OurCompany">Our Companies</Link>
        <Link to="OurTeam">Team</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default History;
