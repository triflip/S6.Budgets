import React from "react";


type CkeckboxProps = {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CkeckboxProps> = ({label, checked, onChange}) => {
    return (
        <label>
            <input 
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
             />
             {label}
        </label>
    );
};