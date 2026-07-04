import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const menuItems = [
    {
      name: 'Ethiopian Yirgacheffe',
      description: 'Bright, fruity notes with hints of blueberry and citrus',
      price: '$4.50'
    },
    {
      name: 'Colombian Supremo',
      description: 'Rich and balanced with caramel sweetness and nutty undertones',
      price: '$4.00'
    },
    {
      name: 'Matcha Oat Latte',
      description: 'Ceremonial grade matcha with creamy oat milk and vanilla',
      price: '$5.50'
    },
    {
      name: 'Honey Lavender Latte',
      description: 'Espresso infused with local honey and French lavender',
      price: '$5.25'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
        </div>

        <div className={`text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Coffee cup icon */}
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 21h18v-2H2v2zM20 8h-2V5H4v3H2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v3zm-2 2H4c-1.1 0-2 .9-2 2v4c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-1h2c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2zm-2 6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-4h12v4zm4-3h-2v-1h2v1z"/>
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Bean <span className="text-[#3b82f6]">Voyage</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
            Every cup is a journey to discover the world's finest beans
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#menu" 
              className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#3b82f6]/25"
            >
              Explore Our Menu
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-slate-600 hover:border-[#3b82f6] text-white font-semibold rounded-full transition-all duration-300"
            >
              Find Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#3b82f6]">Menu</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Handcrafted beverages made with passion and the finest ingredients from around the globe
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-[#3b82f6]/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-[#3b82f6] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-400">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[#3b82f6]">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm">
            All drinks available hot, iced, or blended. Oat, almond, and coconut milk available at no extra charge.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Visit <span className="text-[#3b82f6]">Us</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              We'd love to welcome you to our cozy corner of the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-[#3b82f6]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3b82f6]/20 rounded-xl">
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
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-[#3b82f6]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3b82f6]/20 rounded-xl">
                  <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
                  <a 
                    href="mailto:hello@beanvoyage.coffee" 
                    className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors text-lg"
                  >
                    hello@beanvoyage.coffee
                  </a>
                  <p className="text-slate-400 mt-2">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-[#3b82f6]/50 transition-all duration-300 md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3b82f6]/20 rounded-xl">
                  <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12