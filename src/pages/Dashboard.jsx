import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const menuItems = [
    {
      name: 'Espresso Voyage',
      description: 'Rich, bold double shot with notes of dark chocolate and caramel',
      price: '$4.50'
    },
    {
      name: 'Velvet Latte',
      description: 'Smooth espresso with silky steamed milk and a hint of vanilla',
      price: '$5.75'
    },
    {
      name: 'Cold Brew Explorer',
      description: '24-hour steeped perfection served over ice with orange zest',
      price: '$5.25'
    },
    {
      name: 'Mocha Wanderer',
      description: 'Espresso meets Belgian chocolate, topped with house-made whipped cream',
      price: '$6.00'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.25.875-2.125T7 11h1V5q0-1.25.875-2.125T11 2h2q1.25 0 2.125.875T16 5v6h1q1.25 0 2.125.875T20 14v3H4zm5-6h6V5h-2v4h-2V5h-2v6z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Bean <span className="text-[#3b82f6]">Voyage</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Where Every Cup is a Journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu" 
              className="px-8 py-3 bg-[#3b82f6] hover:bg-blue-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Explore Menu
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-slate-600 hover:border-[#3b82f6] rounded-full font-semibold transition-all duration-300"
            >
              Find Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#3b82f6]">Menu</span></h2>
            <p className="text-slate-400 text-lg">Handcrafted beverages for the curious soul</p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="group bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-[#3b82f6]/50 rounded-2xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-[#3b82f6] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[#3b82f6]">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              * All drinks available hot, iced, or blended. Oat, almond, and soy milk available +$0.75
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit <span className="text-[#3b82f6]">Us</span></h2>
            <p className="text-slate-400 text-lg">Start your voyage today</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center md:text-left hover:border-[#3b82f6]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#3b82f6]/20 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-7 h-7 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-slate-400 leading-relaxed">
                247 Roast Avenue<br />
                Portland, OR 97201<br />
                United States
              </p>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-500">
                  <span className="text-[#3b82f6] font-medium">Hours:</span><br />
                  Mon-Fri: 6AM - 8PM<br />
                  Sat-Sun: 7AM - 9PM
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center md:text-left hover:border-[#3b82f6]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#3b82f6]/20 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-7 h-7 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
              <a 
                href="mailto:hello@beanvoyage.coffee" 
                className="text-[#3b82f6] hover:text-blue-400 transition-colors text-lg break-all"
              >
                hello@beanvoyage.coffee
              </a>
              <p className="text-slate-400 mt-4">
                Questions about catering, wholesale, or just want to chat about coffee? We'd love to hear from you.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-700 flex justify-center md:justify-start gap-4">
                <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-[#3b82f6] rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4