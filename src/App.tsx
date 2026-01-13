import { HashRouter, Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { BudgetPage } from "./pages/BudgetPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/calculator" element={<BudgetPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </HashRouter>
  );
};
