import React from 'react';
import MarsEmoji from '../components/MarsEmoji';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            NeTuArk <MarsEmoji />
          </h1>
          {/* Add navigation here */}
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500 text-center">
              Welcome to NeTuArk <MarsEmoji />
              <br />
              Your content will appear here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
