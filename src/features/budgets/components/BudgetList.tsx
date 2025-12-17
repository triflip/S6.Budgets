import { useState, useEffect } from "react";
import { BudgetSearch } from "./BudgetSearch";

type Budget = {
  id: number;
  client: string;
  phone: string;
  email: string;
  services: string[];
  total: number;
  date: string;
};

type BudgetListProps = {
  budgets: Budget[];
};

export const BudgetList: React.FC<BudgetListProps> = ({ budgets }) => {
  const [sortedBudgets, setSortedBudgets] = useState<Budget[]>(budgets);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSortedBudgets(budgets);
  }, [budgets]);

  const filteredBudgets = sortedBudgets.filter(
    (b) =>
      b.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortByClient = () => {
    setSortedBudgets([...sortedBudgets].sort((a, b) => a.client.localeCompare(b.client)));
  };

  const sortByDate = () => {
    setSortedBudgets([...sortedBudgets].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    ));
  };

  const resetOrder = () => {
    setSortedBudgets(budgets);
    setSearchTerm("");
  };

  return (
    <div className="mt-6">
      <h3 className="text-base sm:text-lg font-bold text-gray-200 text-center sm:text-left mb-2">
        Pending budgets
      </h3>

      <BudgetSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4">
        <button
          onClick={sortByClient}
          className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sort by Client ↑↓
        </button>
        <button
          onClick={sortByDate}
          className="px-3 py-2 sm:px-4 sm:py-2 bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700"
        >
          Sort by Date ↑↓
        </button>
        <button
          onClick={resetOrder}
          className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Reset ↺
        </button>
      </div>

      <div className="overflow-y-scroll h-[200px] sm:h-[300px] space-y-2 p-2 bg-gray-800 rounded-md">
        <ul className="space-y-2">
          {filteredBudgets.map((b) => (
            <li
              key={b.id}
              className="p-2 sm:p-3 bg-gray-900 rounded text-gray-200 shadow-sm"
            >
              <p className="font-semibold">Client: {b.client}</p>
              <p>
                Services: {b.services.join(", ")} --- Total: {b.total} €
              </p>
              <p>
                Phone: {b.phone} --- Email: {b.email}
              </p>
              <p>Date: {b.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
