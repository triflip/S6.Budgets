import { useNavigate } from "react-router-dom";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md text-center space-y-4">
      <h1 className="text-3xl font-extrabold text-blue-600">🌐 GrowthHub</h1>
      <p className="text-lg italic">
        Empowering Your Digital Growth — Calculate Your Budget in Seconds
      </p>
      <p className="text-sm text-gray-600">
        SEO, Ads, and Web Solutions Tailored to Your Business
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Start now with instant budget estimation.
      </p>

      <button
        onClick={() => navigate("/calculator")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Start
      </button>
    </div>
  );
};
