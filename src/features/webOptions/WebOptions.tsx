import React from "react";
import { HelpModal } from "../budgets/components/HelpModal";

type WebOptionsProps = {
    pages: number;
    setPages: (value: number) => void;
    languages: number;
    setLanguages: (value: number) => void;
};

export const WebOptions: React.FC<WebOptionsProps> = (
    {pages, 
    setPages, 
    languages, 
    setLanguages
}) => {
    return (
        <div className="p-4 bg-gray-50 rounded-sm shadow-sm space-y-2">
            <h3 className="font-semibold">Web Options</h3>

            <div className="flex items-center space-x-200">
                <span>Pages</span>
                <HelpModal/>
                <button onClick={() => setPages(Math.max(0, pages -1))}>-</button>
                <span>{pages}</span>
                <button onClick={() => setPages(pages + 1)}>+</button>
            </div>

            <div className="flex items-center space-x-200">
                <span>Languages</span>
                <HelpModal/>
                <button onClick={() => setLanguages(Math.max(0, languages -1))}>-</button>
                <span>{languages}</span>
                <button onClick={() => setLanguages(languages + 1)}>+</button>
            </div>

        </div>
    );
};