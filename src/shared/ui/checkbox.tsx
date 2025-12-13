// Checkbox.tsx
import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  className?: string; 
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex justify-between items-center cursor-pointer w-full">
      <span className="text-left">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-7 w-7 appearance-none border border-gray-400 rounded-md bg-white 
                   checked:bg-white checked:border-green-600 checked:before:content-['✔'] 
                   checked:before:text-green-600 checked:before:block checked:before:text-center"
      />
    </label>
  );
};
