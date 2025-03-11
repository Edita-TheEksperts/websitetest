import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/404-illustration.png"
          alt="404 Illustration"
          className="w-64 md:w-96"
        />
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-extrabold text-black">404</h1>
          <p className="text-gray-500 mt-2">Ooops... looks like you got lost.</p>
          <a
            href="/"
            className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <span className="material-icons">home</span>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
