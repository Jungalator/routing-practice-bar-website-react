import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage";
import Drinks from "./pages/Drinks";

export default function App() {
  // const [linkColor, setLinkColor] = useState("white");
  // const location = useLocation();

  // useEffect(() => {
  //   switch (location.pathname) {
  //     case "drinks":
  //       break;
  //     case value:
  //       break;
  //     case value:
  //       break;

  //     default:
  //       break;
  //   }
  // }, [location.pathname]);
  return (
    <BrowserRouter basename="/routing-practice-bar-website-react/">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/drinks" element={<Drinks />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
