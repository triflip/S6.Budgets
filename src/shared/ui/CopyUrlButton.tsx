
import React from "react";  

type CopyUrlButtonProps = {
    label: string;
}

export const CopyUrlButton: React.FC<CopyUrlButtonProps> = ({ label = "Copy URL 🔗" }) => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("URL copied to clipboard!"))
      .catch(() => alert("Failed to copy URL"));
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