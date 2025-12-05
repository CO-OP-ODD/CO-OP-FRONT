import {Hero} from "@/pages/hero/hero";
import {Routes, Route} from "react-router-dom";
import './App.scss';


function App() {

  return (
    <div className="app">
        <Routes>
            {/* provide by mapping soon */}
            <Route path="/" element={<Hero/>} />
        </Routes>
    </div>
  )
}

export default App
