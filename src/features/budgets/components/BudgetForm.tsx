import React, { useState } from "react";
import { Checkbox } from "../../../shared/ui/Checkbox";

export const BudgetForm: React.FC = () => {
  const [seoSelected, setSeoSelected] = useState(false);
  const [adsSelected, setAdsSelected] = useState(false);
  const [webSelected, setWebSelected] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);

  const calculateTotal = (seo: boolean, ads: boolean, web: boolean) => {
    let total = 0;
    if (seo) total += 300;
    if (ads) total += 400;
    if (web) total += 500;
    setTotalBudget(total);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Budget Calculator</h2>

      <div className="p-4 bg-white rounded-md shadow-sm">
        <Checkbox
          label="SEO Campaign (300€)"
          checked={seoSelected}
          onChange={(checked) =>
            {
              setSeoSelected(checked);
              calculateTotal(checked, adsSelected, webSelected);
            }
          }
        />
      </div>

      <div className="p-4 bg-white rounded-md shadow-sm">
        <Checkbox
          label="Advertising Campaign (400€)"
          checked={adsSelected}
          onChange={(checked) =>
            {
              setAdsSelected(checked);
              calculateTotal(seoSelected, checked, webSelected);
            }
          }
        />
      </div>

      <div className="p-4 bg-white rounded-md shadow-sm">
        <Checkbox
          label="Website (500€)"
          checked={webSelected}
          onChange={(checked) =>
            {
              setWebSelected(checked);
              calculateTotal(seoSelected, adsSelected, checked);
            }
          }
        />
      </div>

      <div className="p-4 bg-blue-100 rounded-md text-center font-semibold">
        Total: {totalBudget} €
      </div>
    </div>
  );
};
