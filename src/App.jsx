import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Navigation */}
      <nav className="border-b dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">RVST Stack</span>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Home</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">About</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome to RVST Stack
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg">
            A modern web development stack featuring React, Vite, Shadcn UI, and Tailwind CSS
          </p>
        </div>

        {/* Counter Card */}
        <div className="mt-12 max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Counter Demo</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Current count: {count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Increment
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">React</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              A JavaScript library for building user interfaces
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Vite</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Next Generation Frontend Tooling
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Tailwind</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              A utility-first CSS framework
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-600 dark:text-slate-300">
            © 2024 RVST Stack. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
