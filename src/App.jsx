import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Body from "./Body.jsx";

function App() {
return (
  <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element = {<Body/>}>
            <Route path = "/login" element = {<Login/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>

  </>
    
  );
}

export default App
