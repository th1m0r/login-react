import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from "./pages/template/header";
import SideBar from "./pages/template/sideBar";
import Footer from "./pages/template/footer";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
