import { Link, Route, Routes } from "react-router-dom"
import CalendarList from "./Components/Pages/CalendarList"
import Events from "./Components/Pages/Events"

function App() {

  return (
    <div className="max-w-4xl m-2 mx-auto" >
      <div className="  flex items-center justify-between text-xl font-bold max-w-4xl mx-auto my-3  ">
        <Link to={"/"}>Calendar 2023</Link>
        <Link to={"/events"}>Events</Link>
      </div>
      <Routes >
        <Route path="/" element={<CalendarList />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

    </div>
  )
}

export default App
