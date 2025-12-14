import React, { useEffect, useState } from "react";
import { Checkbox } from "../../../shared/ui/Checkbox.tsx";
import { WebOptions } from "../../webOptions/WebOptions";
import { useNavigate } from "react-router-dom";
import { BudgetInputs } from "../components/BudgetInputs";
import { BudgetList } from "../components/BudgetList";

export const BudgetForm: React.FC = () => {
  const navigate = useNavigate();

  const [seoSelected, setSeoSelected] = useState(false);
  const [adsSelected, setAdsSelected] = useState(false);
  const [webSelected, setWebSelected] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);

  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  const [budgetName, setBudgetName] = useState("");
  const [clientName, setClientName] = useState("");
  const [budgets, setBudgets] = useState<
    {
      id: number;
      name: string;
      client: string;
      services: string[];
      total: number;
      date: string;
    }[]
  >([]);

  useEffect(() => {
    let total = 0;
    if (seoSelected) total += 300;
    if (adsSelected) total += 400;
    if (webSelected) total += 500 + (pages + languages) * 30;
    setTotalBudget(total);
  }, [seoSelected, adsSelected, webSelected, pages, languages]);

  const handleAddBudget = () => {
    const selectedServices: string[] = [];
    if (seoSelected) selectedServices.push("SEO");
    if (adsSelected) selectedServices.push("Ads");
    if (webSelected) selectedServices.push("Web");

    setBudgets([
      ...budgets,
      {
        id: Date.now(),
        name: budgetName,
        client: clientName,
        services: selectedServices,
        total: totalBudget,
        date: new Date().toLocaleDateString(),
      },
    ]);

    setBudgetName("");
    setClientName("");
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
    <div className="max-w-7xl w-full mx-auto p-10 rounded-xl shadow-lg bg-gray-900/80 backdrop-blur grid grid-cols-2 gap-8">
      
      <div className="space-y-6 text-xl text-gray-200">
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-fuchsia-500 to-pink-500">
          ~ Budget Calculator ~
        </h2>

        <div className="p-4 tracking-wider bg-gray-800 rounded-md shadow-sm flex justify-between items-center">
          <Checkbox
            label="SEO Campaign (300€)"
            checked={seoSelected}
            onChange={setSeoSelected}
          />
        </div>

        <div className="p-4 tracking-wider bg-gray-800 rounded-md shadow-sm flex justify-between items-center">
          <Checkbox
            label="Advertising Campaign (400€)"
            checked={adsSelected}
            onChange={setAdsSelected}
          />
        </div>

        <div className="p-4 tracking-wider bg-gray-800 rounded-md shadow-sm">
          <Checkbox
            label="Website (500€)"
            checked={webSelected}
            onChange={setWebSelected}
          />
          {webSelected && (
            <WebOptions
              pages={pages}
              setPages={setPages}
              languages={languages}
              setLanguages={setLanguages}
            />
          )}
        </div>

        <div className="text-3xl tracking-wider p-4 bg-gray-800 rounded-md text-white font-semibold shadow-md">
          Total: {totalBudget} €
        </div>

        <button
          onClick={() => navigate("/")}
          className=" mt-6 ml-52 px-6 py-3 rounded-3xl bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white text-lg font-semibold shadow-lg hover:scale-105 transform transition"
        >
          ⬅ Back home
        </button>
      </div>

      <div className="space-y-8 p-4 bg-gray-800 rounded-md">
        <BudgetInputs
          budgetName={budgetName}
          setBudgetName={setBudgetName}
          clientName={clientName}
          setClientName={setClientName}
          onAdd={handleAddBudget}
        />

        <BudgetList budgets={budgets} />
      </div>
    </div>
  </div>
);

};
