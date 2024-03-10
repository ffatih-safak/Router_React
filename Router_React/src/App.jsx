import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react'; // Suspense bileşenini import et

import Home from './components/Home';
import Navbar from './components/Navbar';
import Misssion from './components/Mission';
import WrongPath from './components/WrongPath';
import History from './components/History';
import OurCompany from './components/OurCompany';
import OurTeam from './components/OurTeam';
import Member from './components/Member';
import MemberDetail from './components/MemberDetail';

// Lazy loading için Suspense kullanarak About bileşenini yükleyin
const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Suspense kullanarak LazyAbout bileşenini yükleyin */}
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}> <LazyAbout /> </Suspense>} />
        <Route path="/mission" element={<Misssion />} />
        <Route path="/history" element={<History />}>
          <Route path="OurCompany" element={<OurCompany />} />
          <Route path="OurTeam" element={<OurTeam />} />
        </Route>
        <Route path="/Member" element={<Member />} />
        <Route path="/Member/:memberId" element={<MemberDetail />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
