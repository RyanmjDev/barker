

import Barkbox from './components/Barkbox';
import Sidebar from './components/Sidebar';
import Bark from './components/Bark';
import BottomNavbar from './components/BottomNavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './components/Profile';
import HighlightedBark from './components/HighlightedBark';
import VerticalDivider from './components/VerticalDivider';
import { Outlet } from 'react-router-dom';



function App() {


  return (
    <>
    <div className="flex flex-col md:flex-row">
      <div className="flex-initial">
        <Sidebar />
        <BottomNavbar />
      </div>
    </div>
    
         <Outlet/>
    </>
  );
}

export default App;
