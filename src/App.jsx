import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="border-b border-[#0A0A0A]/10 dark:border-[#FAFAFA]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">RVST Stack</span>
            <div className="flex space-x-4">
              <a href="#" className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] dark:text-[#FAFAFA]/70 dark:hover:text-[#FAFAFA]">Home</a>
              <a href="#" className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] dark:text-[#FAFAFA]/70 dark:hover:text-[#FAFAFA]">About</a>
              <a href="#" className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] dark:text-[#FAFAFA]/70 dark:hover:text-[#FAFAFA]">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA] sm:text-5xl md:text-6xl">
            Welcome to RVST Stack
          </h1>
          <p className="mt-3 text-base text-[#0A0A0A]/70 dark:text-[#FAFAFA]/70 sm:mt-5 sm:text-lg">
            A modern web development stack featuring React, Vite, Shadcn UI, and Tailwind CSS
          </p>
        </div>

        {/* Counter Card */}
        <div className="mt-12 max-w-sm mx-auto bg-white dark:bg-[#0A0A0A]/80 rounded-lg shadow-lg overflow-hidden border border-[#0A0A0A]/10 dark:border-[#FAFAFA]/10">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">Counter Demo</h2>
            <p className="mt-2 text-[#0A0A0A]/70 dark:text-[#FAFAFA]/70">Current count: {count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="mt-4 w-full bg-[#0A0A0A] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#0A0A0A] py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Increment
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-[#0A0A0A]/80 p-6 rounded-lg shadow-lg border border-[#0A0A0A]/10 dark:border-[#FAFAFA]/10">
            <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">React</h3>
            <p className="mt-2 text-[#0A0A0A]/70 dark:text-[#FAFAFA]/70">
              A JavaScript library for building user interfaces
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-[#0A0A0A]/80 p-6 rounded-lg shadow-lg border border-[#0A0A0A]/10 dark:border-[#FAFAFA]/10">
            <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">Vite</h3>
            <p className="mt-2 text-[#0A0A0A]/70 dark:text-[#FAFAFA]/70">
              Next Generation Frontend Tooling
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-[#0A0A0A]/80 p-6 rounded-lg shadow-lg border border-[#0A0A0A]/10 dark:border-[#FAFAFA]/10">
            <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">Shadcn UI</h3>
            <p className="mt-2 text-[#0A0A0A]/70 dark:text-[#FAFAFA]/70">
              Beautifully designed components that you can copy and paste
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-[#0A0A0A]/80 p-6 rounded-lg shadow-lg border border-[#0A0A0A]/10 dark:border-[#FAFAFA]/10">
            <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">Tailwind</h3>
            <p className="mt-2 text-[#0A0A0A]/70 dark:text-[#FAFAFA]/70">
              A utility-first CSS framework
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-[#0A0A0A]/10 dark:border-[#FAFAFA]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-[#0A0A0A]/70 dark:text-[#FAFAFA]/70">
            © 2024 RVST Stack. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
