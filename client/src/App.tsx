import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./Components/UI/Container/Container";
import LoginPage from "./Components/LoginPage/LoginPage";
import Header from "./Components/UI/Header/Header";

const App: React.FC = () => {
  return (
    <div>
      <main>
        {/* Application header */}
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
        {/* <Container></Container> */}
      </main>
    </div>
  );
};

export default App;
