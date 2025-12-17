import { useNavigate } from "react-router-dom";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-5xl mx-auto p-6 sm:p-12 text-center space-y-12">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-fuchsia-500 to-pink-500">
          ⚡ GrowthHub
        </h1>

        <p className="text-lg sm:text-2xl italic text-gray-200">
          Empowering Your Digital Growth — Calculate Your Budget in Seconds
        </p>
        <p className="text-base sm:text-xl md:text-2xl text-gray-400">
          SEO, Ads, and Web Solutions Tailored to Your Business
        </p>
        <p className="text-sm sm:text-lg md:text-xl text-gray-500">
          Start now with instant budget estimation.
        </p>

        <button
          onClick={() => navigate("/calculator")}
          className="w-full max-w-md px-6 py-3 sm:px-10 sm:py-4 rounded-3xl bg-gradient-to-r from-blue-500 to-fuchsia-600 text-base sm:text-lg md:text-2xl font-semibold text-white shadow-lg hover:scale-105 transform transition"
        >
          Start
        </button>
      </div>
    </div>
  );
};
