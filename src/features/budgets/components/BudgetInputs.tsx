type BudgetInputsProps = {
  budgetName: string;
  setBudgetName: (val: string) => void;
  clientName: string;
  setClientName: (val: string) => void;
  onAdd: () => void;
};

export const BudgetInputs: React.FC<BudgetInputsProps> = ({
  budgetName,
  setBudgetName,
  clientName,
  setClientName,
  onAdd,
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm space-y-2">
      <input
        type="text"
        placeholder="Budget name"
        value={budgetName}
        onChange={(e) => setBudgetName(e.target.value)}
        className="w-full p-2 border rounded"
        
      />
      <input
        type="text"
        placeholder="Customer name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={onAdd}
        className="px-4 py-2 bg-green-500 text-white rounded-md"
      >
        Add budget
      </button>
    </div>
  );
};
