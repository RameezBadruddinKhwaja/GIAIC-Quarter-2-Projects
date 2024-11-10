'use client'

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('World');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Hello, <span className="text-blue-600">{name}</span>!
        </h1>
        
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <p className="text-gray-600">
            Welcome to my first Next.js application!
          </p>
        </div>
      </div>
    </main>
  );
}