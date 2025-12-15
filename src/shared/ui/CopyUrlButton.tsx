
import React from "react";  
import { toast } from "react-toastify";

type CopyUrlButtonProps = {
    label: string;
}

export const CopyUrlButton: React.FC<CopyUrlButtonProps> = ({ label = "Copy URL 🔗" }) => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => toast.success("URL copied to clipboard!"))
      .catch(() => toast.error("Failed to copy URL"));
  };

  return (
    <button
    onClick={handleCopyUrl}
    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    >
        {label}
    </button>
  );
};