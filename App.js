import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Web from "./Component/Web";
import Info from "./Component/Info";
import Css from "./Component/Css";
import Js from "./Component/Js";
import ReactJs from "./Component/ReactJs";
import NodeJs from "./Component/NodeJs";
import NotFound from "./Component/NotFound";
import Footer from "./Component/Footer";
import Resume from "./Component/Resume";
import Career1 from "./Component/Career1";
import Career2 from "./Component/Career2";
import contest1 from "./Component/contest1";
import contest2 from "./Component/contest2";
import contest3 from "./Component/contest3";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" Component={Web} />
            <Route path="/Resume" Component={Resume} />
            <Route path="/Info" Component={Info} />
            <Route path="/css" Component={Css} />
            <Route path="/js" Component={Js} />
            <Route path="/reactjs" Component={ReactJs} />
            <Route path="/nodejs" Component={NodeJs} />
            <Route path="/Career1" Component={Career1} />
            <Route path="/Career2" Component={Career2} />
            <Route path="/contest1" Component={contest1} />
            <Route path="/contest2" Component={contest2} />
            <Route path="/contest3" Component={contest3} />
            <Route path="*" element={NotFound} />
          </Routes>

          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
