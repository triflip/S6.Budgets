import React, { useEffect, useState } from "react";
import { Checkbox } from "../../../shared/ui/Checkbox";
import { WebOptions } from "../../budgets/components/webOptions/WebOptions";

export const BudgetForm: React.FC = () => {
  const [seoSelected, setSeoSelected] = useState(false);
  const [adsSelected, setAdsSelected] = useState(false);
  const [webSelected, setWebSelected] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);

  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  useEffect(() => {
    let total = 0;
    if (seoSelected) total += 300;
    if (adsSelected) total += 400;
    if (webSelected) total += 500 + (pages + languages) * 30;
    setTotalBudget(total);
  }, [seoSelected, adsSelected, webSelected, pages, languages]);

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Budget Calculator</h2>

      <div className="p-4 bg-white rounded-md shadow-sm">
        <Checkbox
          label="SEO Campaign (300€)"
          checked={seoSelected}
          onChange={setSeoSelected}
        />
      </div>

      <div className="p-4 bg-white rounded-md shadow-sm">
        <Checkbox
          label="Advertising Campaign (400€)"
          checked={adsSelected}
          onChange={setAdsSelected}
        />
      </div>

      <div className="p-4 bg-white rounded-md shadow-sm">
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

      <div className="p-4 bg-blue-100 rounded-md text-center font-semibold">
        Total: {totalBudget} €
      </div>
    </div>
  );
};
