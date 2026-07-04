import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('hero')

  const menuItems = [
    {
      name: 'Espresso Voyage',
      description: 'Rich, bold double shot with notes of dark chocolate and caramel',
      price: '$4.50'
    },
    {
      name: 'Vanilla Bean Latte',
      description: 'Smooth espresso with steamed milk and real vanilla bean',
      price: '$5.75'
    },
    {
      name: 'Cold Brew Explorer',
      description: '24-hour steeped cold brew with a hint of maple sweetness',
      price: '$5.25'
    },
    {
      name: 'Mocha Destination',
      description: 'Espresso meets Belgian chocolate and velvety steamed milk',
      price: '$6.00'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21h18v-2H2v2zm2-3h14v-2H4v2zm-2-4h18v-2H2v2zm4-3h10V9H6v2zm-4-4h18V5H2v2z"/>
              </svg>
              <span className="text-xl font-bold">Bean Voyage</span>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className={`transition-colors ${activeSection === 'hero' ? 'text-[#3b82f6]' : 'text-slate-300 hover:text-white'}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className={`transition-colors ${activeSection === 'menu' ? 'text-[#3b82f6]' : 'text-slate-300 hover:text-white'}`}
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors ${activeSection === 'contact' ? 'text-[#3b82f6]' : 'text-slate-300 hover:text-white'}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#3b82f6] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <svg className="w-24 h-24 mx-auto text-[#3b82f6] mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 10c0 2.21-1.79 4-4 4s-4-1.79-4-4V5h8v5zm2.5-3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"/>
            </svg>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
            Bean <span className="text-[#3b82f6]">Voyage</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Embark on a journey of extraordinary flavors. Every cup tells a story, every sip an adventure.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('menu')}
              className="px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Explore Our Menu
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-slate-600 hover:border-[#3b82f6] text-white font-semibold rounded-full transition-all"
            >
              Visit Us
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our <span className="text-[#3b82f6]">Menu</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Crafted with passion, served with love. Each drink is a carefully curated experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/80 border border-slate-700 rounded-2xl p-8 hover:border-[#3b82f6]/50 transition-all hover:transform hover:scale-[1.02] group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold group-hover:text-[#3b82f6] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-[#3b82f6]">{item.price}</span>
                </div>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              All drinks available hot, iced, or blended • Dairy-free alternatives available
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Find <span className="text-[#3b82f6]">Us</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Start your coffee journey today. We can't wait to welcome you aboard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#3b82f6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb