'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const WelcomePage: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/notes'); // Navigate to your notes page or dashboard
  };

  const navigateToHome = () => {
    router.push('/'); // Navigate to the homepage
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-500 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={navigateToHome}
          >
            My Notes App
          </h1>
          <div>
            <button
              onClick={navigateToHome}
              className="px-4 py-2 rounded-md bg-white text-blue-500 font-semibold hover:bg-gray-100 transition duration-300"
            >
              Home
            </button>
          </div>
        </div>
      </nav>

      {/* Welcome Content */}
      <div className="flex-grow flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-white">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Notes App
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Capture your thoughts, ideas, and tasks effortlessly. Start
            organizing your life today!
          </p>
          <button
            onClick={handleGetStarted}
            className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
