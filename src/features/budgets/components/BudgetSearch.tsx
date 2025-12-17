type BudgetSearchProps = {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
};

export const BudgetSearch: React.FC<BudgetSearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name or client..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 sm:p-3 rounded bg-gray-900 text-gray-200 
                   placeholder-gray-500 placeholder:text-xs sm:placeholder:text-sm 
                   border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                   text-sm sm:text-base"
      />
    </div>
  );
};
