import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage";
import Drinks from "./pages/Drinks";
import { useLocalStorage } from "./hooks/useLocalStorage";
import SmallHunger from "./pages/SmallHunger";
import NotFoundPage from "./pages/NotFoundPage";
import data from "./data/data.json";
import MenuItem from "./components/MenuItem";
import { fetchMessageToBot } from "./utils/fetchMessage";

export default function App() {
  const location = useLocation();
  const [localValue, setLocalValue] = useLocalStorage("linkPath", "");
  const [page, setPage] = useState(localValue || "/");
  const [message, setMessage] = useState({ email: "" });

  const handleChangeTelegramForm = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  function handleSubmitTelegramForm(e) {
    e.preventDefault();
    fetchMessageToBot(message, setMessage);
  }

  const listItems = data.map((item, index) => (
    <MenuItem
      itemTitle={item.title}
      itemCountry={item.country}
      itemContainer={item.container}
      itemPrice={item.price}
      key={index}
    />
  ));

  useEffect(() => {
    setPage(location.pathname);
    setLocalValue(location.pathname);
  }, [location.pathname, setLocalValue]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout page={page} />}>
        <Route index element={<Home />}></Route>
        <Route
          path="drinks"
          element={
            <Drinks
              listItems={listItems}
              handleChangeTelegramForm={handleChangeTelegramForm}
              handleSubmitTelegramForm={handleSubmitTelegramForm}
              message={message}
            />
          }
        ></Route>
        <Route
          path="small-hunger"
          element={
            <SmallHunger
              listItems={listItems}
              handleChangeTelegramForm={handleChangeTelegramForm}
              handleSubmitTelegramForm={handleSubmitTelegramForm}
              message={message}
            />
          }
        ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}
