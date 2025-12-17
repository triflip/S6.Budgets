import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-sm sm:text-base md:text-lg text-gray-300">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 rounded bg-blue-600 text-white text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-700 transition"
      >
        Go back to Home
      </Link>
    </div>
  );
};
