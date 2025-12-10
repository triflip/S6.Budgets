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
      <h3 className="text-lg font-bold">Budgets list</h3>
      <ul className="space-y-2">
        {budgets.map((b) => (
          <li key={b.id} className="p-3 bg-gray-200 rounded">
            <p className="font-semibold">
              {b.name} — {b.client}
            </p>
            <p>Services: {b.services.join(", ")}</p>
            <p>Total: {b.total} €</p>
            <p>Date: {b.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
