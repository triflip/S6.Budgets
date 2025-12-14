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
  return (
  <div className="mt-6">
    <h3 className="ml-3 text-lg font-bold text-gray-200">Pending budgets</h3>
    

    <div className="overflow-y-scroll h-[300px] space-y-2 p-2 bg-gray-800 rounded-md">
      <ul className="space-y-2">
        {budgets.map((b) => (
          <li key={b.id} className="p-3 bg-gray-900 rounded text-gray-200 shadow-sm">
            <p className="font-semibold">
              Client: {b.client}
            </p>
            <p>Services: {b.services.join(", ")} --- Total: {b.total} €</p>
            <p>Phone: {b.phone} --- Email: {b.email}</p>
            <p>Date: {b.date}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

};
