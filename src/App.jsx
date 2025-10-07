import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Body from "./Components/Body.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import Feed from "./Components/Feed.jsx";

function App() {
return (
  <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element = {<Body/>}>
              <Route path = "/login" element = {<Login/>}/>
              <Route path = "/feed" element = {<Feed/>}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </Provider>
  </>
    
  );
}

export default App
