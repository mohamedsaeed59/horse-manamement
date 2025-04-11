import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HorsesPage from "./pages/HorsesList";
import ProtectedRoute from "./auth/ProtectedRoute";
import HorseDetails from "./pages/HorseDetails";
import LoginPageWrapper from "./pages/LoginPage";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPageWrapper />} />
        <Route
          path="/horses"
          element={
            <ProtectedRoute>
              <HorsesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/horses/:id"
          element={
            <ProtectedRoute>
              <HorseDetails />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<LoginPageWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;