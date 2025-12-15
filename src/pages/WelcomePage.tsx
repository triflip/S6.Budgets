import { useNavigate } from "react-router-dom";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex space-y-12 items-start pt-20 justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-5xl mx-auto p-12 text-center space-y-2">
        <h1 className="mt-[-4rem] p-3 text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-fuchsia-500 to-pink-500">
          ⚡ GrowthHub
        </h1>

        <p className="pt-24 text-4xl italic text-gray-200">
          Empowering Your Digital Growth — Calculate Your Budget in Seconds
        </p>
        <p className="pt-32  text-2xl text-gray-400">
          SEO, Ads, and Web Solutions Tailored to Your Business
        </p>
        <p className="pt-28 pb-5 text-xl text-gray-500">
          Start now with instant budget estimation.
        </p>

        <button
          onClick={() => navigate("/calculator")}
          className="w-full max-w-md  px-20 py-4 rounded-3xl bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white text-2xl font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Start
        </button>
      </div>
    </div>
  );
};
