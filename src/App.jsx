import Barkbox from "./components/Barkbox"
import Sidebar from "./components/Sidebar"
import Bark from "./components/Bark"
import BottomNavbar from "./components/BottomNavBar"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./components/Profile"
import HighlightedBark from "./components/HighlightedBark"

function App() {

  return (
 <div className="flex flex-row">

  <div className="flex-initial">
    <Sidebar />
  </div>
  <div className="flex-1 mx-auto flex-col">
    {/* <Profile/> */}
    <HighlightedBark/>

    <BottomNavbar/> 

      {/* <Barkbox />
      <Bark/>
      <Bark/>
      <Bark/>
      <Bark/>
      <Bark/>
      <Bark/>
      <Bark/>
      <Bark/>
      <Bark/>
      <Bark/>
      <BottomNavbar/> */}
  </div>

    </div>

  )
}

export default App
