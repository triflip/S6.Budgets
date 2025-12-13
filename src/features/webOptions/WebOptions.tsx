import React from "react";
import { HelpModal } from "../budgets/components/HelpModal";

type WebOptionsProps = {
  pages: number;
  setPages: (value: number) => void;
  languages: number;
  setLanguages: (value: number) => void;
};

export const WebOptions: React.FC<WebOptionsProps> = ({
  pages,
  setPages,
  languages,
  setLanguages,
}) => {
  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-md space-y-6">
      <h3 className="text-lg font-semibold text-gray-200">🌐 Web Options</h3>

     
      <div className="flex items-center gap-x-4">
        <span className="text-gray-300">Pages</span>
        <HelpModal />
        <button
          onClick={() => setPages(Math.max(0, pages - 1))}
          className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white font-bold hover:scale-105 transform transition"
        >
          -
        </button>
        <span className="text-gray-100 font-semibold">{pages}</span>
        <button
          onClick={() => setPages(pages + 1)}
          className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white font-bold hover:scale-105 transform transition"
        >
          +
        </button>
      </div>

      
      <div className="flex items-center gap-x-4">
        <span className="text-gray-300">Languages</span>
        <HelpModal />
        <button
          onClick={() => setLanguages(Math.max(0, languages - 1))}
          className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white font-bold hover:scale-105 transform transition"
        >
          -
        </button>
        <span className="text-gray-100 font-semibold">{languages}</span>
        <button
          onClick={() => setLanguages(languages + 1)}
          className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white font-bold hover:scale-105 transform transition"
        >
          +
        </button>
      </div>
    </div>
  );
};
