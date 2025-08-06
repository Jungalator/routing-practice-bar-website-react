import React from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";

function App() {
  return (
    <div className="w-[100%] h-[100%] min-w-[100vw] box-border">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
