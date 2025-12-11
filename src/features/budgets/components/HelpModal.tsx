import { useState } from "react";

export const HelpModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inline-block">
     
      <button
        onClick={() => setIsOpen(true)}
        className="ml-2 text-blue-600 hover:text-blue-800"
        aria-label="Help"
      >
        ℹ️
      </button>

      
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-sm">
            <h2 className="text-lg font-bold mb-2">Help</h2>
            <p className="text-gray-700">
             The number of pages indicates how many pages the website will have. 
             The number of languages indicates in how many languages it will be displayed.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
