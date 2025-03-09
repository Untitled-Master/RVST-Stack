import { useState, useEffect } from 'react'
import { FaReact, FaGithub } from "react-icons/fa";
import { SiVite, SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoMoon, IoSunny } from "react-icons/io5";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  // Entry animation
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Define theme colors
  const colors = {
    dark: {
      bg: "bg-gray-950",
      text: "text-gray-50",
      textMuted: "text-gray-400",
      border: "border-gray-800",
      borderHover: "hover:border-gray-700",
      card: "bg-gray-900/50",
      buttonBg: "bg-indigo-600",
      buttonHover: "hover:bg-indigo-700"
    },
    light: {
      bg: "bg-gray-50",
      text: "text-gray-900",
      textMuted: "text-gray-600",
      border: "border-gray-200",
      borderHover: "hover:border-gray-300",
      card: "bg-white/80",
      buttonBg: "bg-indigo-600",
      buttonHover: "hover:bg-indigo-700"
    }
  };
  
  const c = colors[theme];
  
  // Features data
  const features = [
    {
      name: "React",
      icon: <FaReact className="w-6 h-6 text-[#61DAFB] group-hover:animate-spin-slow" />,
      description: "A JavaScript library for building user interfaces with component-based architecture",
      url: "https://reactjs.org"
    },
    {
      name: "Vite",
      icon: <SiVite className="w-6 h-6 text-[#646CFF]" />,
      description: "Next Generation Frontend Tooling with lightning-fast hot module replacement",
      url: "https://vitejs.dev"
    },
    {
      name: "Shadcn UI",
      icon: <SiShadcnui className="w-6 h-6 text-current" />,
      description: "Beautifully designed components that you can copy and paste into your apps",
      url: "https://ui.shadcn.com"
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill className="w-6 h-6 text-[#38BDF8]" />,
      description: "A utility-first CSS framework for rapidly building custom user interfaces",
      url: "https://tailwindcss.com"
    }
  ];

  return (
    <div className={`min-h-screen ${c.bg} ${c.text} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${c.border} border-b backdrop-blur-md sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              RVST Stack
            </span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className={`${c.textMuted} hover:${c.text} transition-colors duration-200`}>Features</a>
              <a href="#about" className={`${c.textMuted} hover:${c.text} transition-colors duration-200`}>About</a>
              <a href="#demo" className={`${c.textMuted} hover:${c.text} transition-colors duration-200`}>Demo</a>
              <a href="https://github.com/Untitled-Master/RVST-Stack" className={`${c.textMuted} hover:${c.text} transition-colors duration-200 flex items-center gap-1`}>
                <FaGithub />
                <span>GitHub</span>
              </a>
              <button 
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className={`p-2 rounded-full ${c.textMuted} hover:${c.text} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                {theme === 'dark' ? <IoSunny /> : <IoMoon />}
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className={`p-2 rounded-full ${c.textMuted} hover:${c.text} transition-all duration-200`}
              >
                {theme === 'dark' ? <IoSunny /> : <IoMoon />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${c.textMuted} hover:${c.text} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-0.5 bg-current mb-1 transition-all duration-200" style={{ transform: isMenuOpen ? 'rotate(45deg) translate(2px, 2px)' : '' }}></div>
                <div className="w-5 h-0.5 bg-current mb-1 transition-all duration-200" style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
                <div className="w-5 h-0.5 bg-current transition-all duration-200" style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(2px, -2px)' : '' }}></div>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-60 py-3' : 'max-h-0'}`}>
            <div className="space-y-1 pb-3">
              <a href="#features" className={`block ${c.textMuted} hover:${c.text} py-2 transition-colors duration-200`}>Features</a>
              <a href="#about" className={`block ${c.textMuted} hover:${c.text} py-2 transition-colors duration-200`}>About</a>
              <a href="#demo" className={`block ${c.textMuted} hover:${c.text} py-2 transition-colors duration-200`}>Demo</a>
              <a href="https://github.com" className={`block ${c.textMuted} hover:${c.text} py-2 transition-colors duration-200 flex items-center gap-1`}>
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div 
            className={`relative inline-block transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
            style={{ transitionDelay: '100ms' }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              Build with{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
                RVST Stack
              </span>
            </h1>
            <div className={`absolute -inset-x-4 -inset-y-2 ${theme === 'dark' ? 'bg-indigo-500/20' : 'bg-indigo-500/10'} blur-2xl -z-10 rounded-full`}></div>
          </div>
          <p 
            className={`${c.textMuted} text-lg sm:text-xl max-w-2xl mx-auto transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
          >
            A modern web development stack featuring React, Vite, Shadcn UI, and Tailwind CSS for building beautiful, responsive applications
          </p>
          <div 
            className={`flex flex-wrap gap-4 justify-center transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <a 
              href="#features"
              className={`${c.buttonBg} ${c.buttonHover} text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200`}
            >
              Explore Features
            </a>
            <a 
              href="#demo"
              className={`${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} py-3 px-6 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200`}
            >
              View Demo
            </a>
          </div>
        </div>

        {/* Counter Demo */}
        <div id="demo" className="mt-20 max-w-sm mx-auto">
          <div 
            className={`p-8 rounded-2xl ${c.card} backdrop-blur-sm ${c.border} ${c.borderHover} transition-all duration-300 shadow-xl`}
          >
            <h2 className="text-2xl font-semibold">Interactive Demo</h2>
            <p className={`mt-2 ${c.textMuted}`}>
              Current count: <span className="text-indigo-500 font-medium">{count}</span>
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setCount(count - 1)}
                disabled={count <= 0}
                className={`flex-1 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} py-3 px-4 rounded-lg font-medium 
                  transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-500`}
                aria-label="Decrement count"
              >
                -
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className={`flex-1 ${c.buttonBg} ${c.buttonHover} text-white py-3 px-4 rounded-lg font-medium 
                  active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                aria-label="Increment count"
              >
                +
              </button>
            </div>
            <button
              onClick={() => setCount(0)}
              className={`mt-2 w-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} py-2 px-4 rounded-lg font-medium 
                transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500`}
              aria-label="Reset count"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div id="features" className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.name}
              className={`group p-8 rounded-2xl ${c.card} backdrop-blur-sm ${c.border} 
                ${c.borderHover} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-200 group-hover:bg-gray-300'} transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:bg-gradient-to-r from-indigo-500 to-purple-600 
                    group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    {feature.name}
                  </h3>
                </div>
                <p className={`${c.textMuted} flex-grow mb-4`}>
                  {feature.description}
                </p>
                <a 
                  href={feature.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-600 font-medium inline-flex items-center gap-1 group-hover:underline focus:outline-none"
                >
                  Learn more
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* About Section */}
        <div id="about" className="mt-24">
          <div className={`p-8 rounded-2xl ${c.card} backdrop-blur-sm ${c.border} transition-all duration-300`}>
            <h2 className="text-3xl font-semibold mb-6">About RVST Stack</h2>
            <div className="space-y-4">
              <p className={c.textMuted}>
                The RVST stack combines the best modern web technologies to provide a smooth developer experience
                while creating high-performance web applications.
              </p>
              <p className={c.textMuted}>
                By leveraging React's component model, Vite's lightning-fast build tools, Shadcn UI's beautiful components, 
                and Tailwind's utility-first approach, you can build sophisticated interfaces in record time.
              </p>
              <div className={`mt-6 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/70' : 'bg-gray-200/70'}`}>
                <h3 className="text-xl font-medium mb-2">Getting Started</h3>
                <code className={`block p-3 rounded ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} font-mono text-sm overflow-x-auto`}>
                  npx create-rvst my-app<br/>
                  cd my-app<br/>
                  npm run dev
                </code>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`mt-24 ${c.border} border-t py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`${c.textMuted} text-sm`}>
              © {new Date().getFullYear()} RVST Stack. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className={`${c.textMuted} hover:${c.text} transition-colors duration-200`}>Privacy</a>
              <a href="#" className={`${c.textMuted} hover:${c.text} transition-colors duration-200`}>Terms</a>
              <a href="#" className={`${c.textMuted} hover:${c.text} transition-colors duration-200`}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App