import React from "react";  
import { toast } from "react-toastify";

type CopyUrlButtonProps = {
  label: string;
};

export const CopyUrlButton: React.FC<CopyUrlButtonProps> = ({ label = "Copy URL 🔗" }) => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => toast.success("URL copied to clipboard!"))
      .catch(() => toast.error("Failed to copy URL"));
  };

  return (
    <button
      onClick={handleCopyUrl}
      className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 
                 rounded bg-blue-600 text-white text-sm sm:text-base md:text-lg 
                 font-semibold shadow hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
};
