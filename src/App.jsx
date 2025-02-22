import { useState } from 'react'
import { FaReact } from "react-icons/fa";
import { SiVite, SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Navigation */}
      <nav className="border-b border-[#FAFAFA]/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FAFAFA] to-[#FAFAFA]/70 text-transparent bg-clip-text">
              RVST Stack
            </span>
            <div className="flex space-x-6">
              <a href="#" className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-colors duration-200">Home</a>
              <a href="#" className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-colors duration-200">About</a>
              <a href="#" className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-[#FAFAFA] to-[#FAFAFA]/70 text-transparent bg-clip-text">
                RVST Stack
              </span>
            </h1>
            <div className="absolute -inset-x-4 -inset-y-2 bg-[#FAFAFA]/5 blur-2xl -z-10 rounded-full"></div>
          </div>
          <p className="text-[#FAFAFA]/70 text-lg sm:text-xl max-w-2xl mx-auto">
            A modern web development stack featuring React, Vite, Shadcn UI, and Tailwind CSS
          </p>
        </div>

        {/* Counter Card */}
        <div className="mt-16 max-w-sm mx-auto">
          <div className="p-8 rounded-2xl bg-[#FAFAFA]/5 backdrop-blur-sm border border-[#FAFAFA]/10 hover:border-[#FAFAFA]/20 transition-all duration-300">
            <h2 className="text-2xl font-semibold">Counter Demo</h2>
            <p className="mt-2 text-[#FAFAFA]/70">Current count: {count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="mt-4 w-full bg-[#FAFAFA] text-[#0A0A0A] py-3 px-4 rounded-lg font-medium 
                hover:bg-[#FAFAFA]/90 active:scale-[0.98] transition-all duration-200"
            >
              Increment
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['React', 'Vite', 'Shadcn UI', 'Tailwind'].map((feature, index) => (
            <div 
              key={feature}
              className="group p-8 rounded-2xl bg-[#FAFAFA]/5 backdrop-blur-sm border border-[#FAFAFA]/10 
                hover:border-[#FAFAFA]/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#FAFAFA]/10 group-hover:bg-[#FAFAFA]/[0.15] transition-all duration-300">
                    {index === 0 && <FaReact className="w-6 h-6 text-[#61DAFB] group-hover:animate-spin-slow" />}
                    {index === 1 && <SiVite className="w-6 h-6 text-[#646CFF]" />}
                    {index === 2 && <SiShadcnui className="w-6 h-6 text-[#FAFAFA] group-hover:text-[#FAFAFA]/90" />}
                    {index === 3 && <RiTailwindCssFill className="w-6 h-6 text-[#38BDF8]" />}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:bg-gradient-to-r from-[#FAFAFA] to-[#FAFAFA]/70 
                    group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    {feature}
                  </h3>
                </div>
                <p className="text-[#FAFAFA]/70 flex-grow">
                  {index === 0 && "A JavaScript library for building user interfaces"}
                  {index === 1 && "Next Generation Frontend Tooling"}
                  {index === 2 && "Beautifully designed components that you can copy and paste"}
                  {index === 3 && "A utility-first CSS framework"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-[#FAFAFA]/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#FAFAFA]/50 text-sm">
            © 2024 RVST Stack. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
