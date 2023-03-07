import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AxiosProvider } from "./axios/AxiosProvider";
import { Header } from "./components/header";
import { Info } from "./components/info";
import { About } from "./pages/about";
import { Home } from "./pages/home";

function App() {
  return (
    <AxiosProvider>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/info/:id"} element={<Info />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AxiosProvider>
  );
}

export default App;
