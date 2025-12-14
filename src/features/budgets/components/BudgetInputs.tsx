type BudgetInputsProps = {
  clientName: string;
  setClientName: (val: string) => void;
  clientPhone: string;
  setClientPhone: (val: string) => void;
  clientEmail: string;
  setClientEmail: (val: string) => void;
  onAdd: () => void;
};

export const BudgetInputs: React.FC<BudgetInputsProps> = ({
  clientName,
  setClientName,
  clientPhone,
  setClientPhone,
  clientEmail,
  setClientEmail,
  onAdd,
}) => {
  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-md space-y-4">
      <input
        type="text"
        placeholder="Customer name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
      />
      <input
        type="tel"
        placeholder="Phone number"
        value={clientPhone}
        onChange={(e) => setClientPhone(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="email"
        placeholder="Email"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        onClick={onAdd}
        className="w-full px-6 py-3 rounded-3xl bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white text-lg font-semibold shadow-lg hover:scale-105 transform transition"
      >
        Add budget
      </button>
    </div>
  );
};
