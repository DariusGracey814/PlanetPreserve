import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./Components/UI/Container/Container";
import LoginPage from "./Components/LoginPage/LoginPage";

const App: React.FC = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
        {/* <Container></Container> */}
      </main>
    </div>
  );
};

export default App;
