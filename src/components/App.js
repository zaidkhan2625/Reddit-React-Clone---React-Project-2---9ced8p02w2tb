import "../styles/App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import LoginResultComponent from "./LoginResultComponent";
import CreatePost from "./CreatePost";
import ProtectedRouter from "./ProtectedRouter";
function App() {
  return (
    <Router>
    <div className="App">

    <Routes>
    <Route path="/Createpost" element={
        <ProtectedRouter>
        <CreatePost/>
        </ProtectedRouter>
     }/>
    <Route path="/login" element={<LoginResultComponent/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    </Routes>
    </div>
    </Router>
  )
}

export default App;
