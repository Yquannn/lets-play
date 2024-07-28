import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import MessageMePage from "./pages/MessageMe";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="messageMe" element={<MessageMePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
