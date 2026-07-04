import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const menuItems = [
    {
      name: 'Espresso Voyage',
      description: 'Rich, bold double shot of our signature blend',
      price: '$3.50'
    },
    {
      name: 'Caramel Cloud Latte',
      description: 'Silky oat milk latte with house-made caramel drizzle',
      price: '$5.75'
    },
    {
      name: 'Cold Brew Explorer',
      description: '24-hour steeped cold brew with hints of chocolate',
      price: '$4.50'
    },
    {
      name: 'Matcha Horizon',
      description: 'Ceremonial grade matcha with your choice of milk',
      price: '$5.25'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Coffee cup icon */}
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 21V19H20V21H2ZM20 8V5H22V8C22 9.1 21.55 10.1 20.83 10.83C20.1 11.55 19.1 12 18 12H17.83C17.42 13.17 16.56 14.13 15.5 14.68V17H6.5V14.68C4.96 13.89 4 12.28 4 10.5V5C4 3.9 4.9 3 6 3H16C17.1 3 18 3.9 18 5V8H20ZM16 8V5H6V10.5C6 11.88 7.12 13 8.5 13H13.5C14.88 13 16 11.88 16 10.5V8Z"/>
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Bean <span className="text-[#3b82f6]">Voyage</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 font-light">
            Where every cup is a journey
          </p>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Discover handcrafted coffee from around the world. Each bean tells a story, 
            each sip takes you somewhere new.
          </p>
          
          <a 
            href="#menu" 
            className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Explore Our Menu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
            <p className="text-slate-400 text-lg">Crafted with passion, served with love</p>
            <div className="w-24 h-1 bg-[#3b82f6] mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="group bg-slate-800 rounded-2xl p-6 md:p-8 hover:bg-slate-750 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 border border-slate-700 hover:border-[#3b82f6]/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-[#3b82f6] rounded-full group-hover:scale-150 transition-transform"></div>
                      <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[#3b82f6] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-slate-400 md:ml-5">{item.description}</p>
                  </div>
                  <div className="md:text-right">
                    <span className="text-2xl md:text-3xl font-bold text-[#3b82f6]">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-slate-500 mt-8 text-sm">
            * All drinks available hot, iced, or blended. Ask about our seasonal specials!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
            <p className="text-slate-400 text-lg">We'd love to see you</p>
            <div className="w-24 h-1 bg-[#3b82f6] mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-[#3b82f6]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3b82f6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-slate-400 leading-relaxed">
                    742 Evergreen Terrace<br />
                    Portland, OR 97205<br />
                    United States
                  </p>
                  <p className="text-slate-500 text-sm mt-4">
                    <span className="text-[#3b82f6]">Hours:</span> Mon-Fri 7am-7pm, Sat-Sun 8am-6pm
                  </p>
                </div>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-[#3b82f6]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3b82f6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
                  <a 
                    href="mailto:hello@beanvoyage.coffee" 
                    className="text-[#3b82f6] hover:underline text-lg"
                  >
                    hello@beanvoyage.coffee
                  </a>
                  <p className="text-slate-500