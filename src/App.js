import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route exact path='/url-shortener' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
