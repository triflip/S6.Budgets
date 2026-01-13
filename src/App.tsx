import { HashRouter, Routes, Route } from "react-router-dom";
import { WelcomePage } from "./features/welcome/WelcomePage";
import { BudgetForm } from "./features/budgets/components/BudgetForm";

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/calculator" element={<BudgetForm />} />
      </Routes>
    </HashRouter>
  );
};
