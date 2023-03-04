import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./Components/UI/Container/Container";
import LoginPage from "./Components/LoginPage/LoginPage";

const App: React.FC = () => {
  return (
    <div>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
};

export default App;
