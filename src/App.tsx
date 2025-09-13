import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <main>
      {/* Nav Bar */}
      <nav
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center"
      >
        <div className="text-xl font-bold">🚀 SaaSProduct</div>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        <a
          href="#get-started"
          className="!text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </a>
      </nav>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TechFlow
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors duration-300">Pricing</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
            </div>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>


      {/* Header Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Supercharge Your Business 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl">
          All-in-one SaaS platform to streamline your workflow and grow your
          business.
        </p>
        <a
          href="#get-started"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
        >Start Free Trial</a
        >
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">✨ Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">Dashboard</h3>
              <p className="text-gray-600">Track your metrics in real-time.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">Secure</h3>
              <p className="text-gray-600">Top-notch security for your data.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">Integrations</h3>
              <p className="text-gray-600">Connect with tools you already use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">💰 Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">Starter</h3>
              <p className="text-2xl font-bold mb-4">$9/mo</p>
              <a
                href="#get-started"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >Choose Plan</a
              >
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-4">$29/mo</p>
              <a
                href="#get-started"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >Choose Plan</a
              >
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-4">Custom</p>
              <a
                href="#get-started"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >Contact Us</a
              >
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        id="contact"
        className="bg-white py-6 text-center text-gray-600 shadow-inner"
      >
        <p>© 2025 SaaSProduct. All rights reserved.</p>
      </footer>

    </main>
  )
}

export default App
