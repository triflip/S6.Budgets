type Budget = {
  id: number;
  name: string;
  client: string;
  services: string[];
  total: number;
  date: string;
};

type BudgetListProps = {
  budgets: Budget[];
};

export const BudgetList: React.FC<BudgetListProps> = ({ budgets }) => {
  return (
  <div className="mt-6">
    <h3 className="ml-3 text-lg font-bold text-gray-200">Budgets list</h3>
    

    <div className="overflow-y-scroll h-[300px] space-y-2 p-2 bg-gray-800 rounded-md">
      <ul className="space-y-2">
        {budgets.map((b) => (
          <li key={b.id} className="p-3 bg-gray-900 rounded text-gray-200 shadow-sm">
            <p className="font-semibold">
              {b.name} — {b.client}
            </p>
            <p className="text-sm">Services: {b.services.join(", ")}</p>
            <p className="text-sm">Total: {b.total} €</p>
            <p className="text-sm">Date: {b.date}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

};
