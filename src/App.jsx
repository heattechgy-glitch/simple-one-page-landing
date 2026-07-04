import { useState, useEffect } from 'react';
import { Coffee, MapPin, Mail, PhoneCall, ChevronDown } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold, the perfect wake-up call', icon: '☕' },
    { name: 'Cappuccino', price: '$4.50', description: 'Creamy foam meets smooth espresso harmony', icon: '🥛' },
    { name: 'Cold Brew', price: '$5.00', description: 'Smooth, refreshing, steeped to perfection', icon: '🧊' },
    { name: 'Vanilla Latte', price: '$5.50', description: 'Sweet vanilla embraces rich espresso', icon: '🌟' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300" style={{
        backgroundColor: scrollY > 50 ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Bean Voyage
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-amber-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('menu')} className="hover:text-amber-500 transition-colors">Menu</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-500 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated coffee beans background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              ☕
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-6 inline-block">
            <Coffee className="w-20 h-20 text-amber-500 mx-auto mb-4 animate-bounce" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text text-transparent animate-pulse">
            Bean Voyage
          </h1>
          <p className="text-2xl md:text-4xl text-amber-100 mb-12 font-light">
            Your Journey to Perfect Coffee Starts Here
          </p>
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Menu
          </button>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-10 h-10 text-amber-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Signature Drinks
            </h2>
            <p className="text-xl text-amber-100/80">Crafted with passion, served with love</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-amber-900/40 to-slate-900/40 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-amber-300">{item.name}</h3>
                <p className="text-amber-100/70 mb-4 text-sm">{item.description}</p>
                <div className="text-3xl font-bold text-amber-500">{item.price}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Visit Us
            </h2>
            <p className="text-xl text-amber-100/80">We'd love to brew something special for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-amber-900/30 to-slate-900/30 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-10 hover:border-amber-500/60 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-8 text-amber-300">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <Mail className="w-6 h-6 text-amber-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-amber-100/70 text-sm mb-1">Email</p>
                    <a href="mailto:hello@beanvoyage.com" className="text-lg text-white hover:text-amber-500 transition-colors">
                      hello@beanvoyage.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <MapPin className="w-6 h-6 text-amber-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-amber-100/70 text-sm mb-1">Address</p>
                    <p className="text-lg text-white">
                      123 Coffee Lane<br />
                      Portland, OR
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <PhoneCall className="w-6 h-6 text-amber-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-amber-100/70 text-sm mb-1">Hours</p>
                    <p className="text-lg text-white">
                      Mon-Fri: 7AM - 7PM<br />
                      Sat-Sun: 8AM - 8PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Card */}
            <div className="hidden md:flex bg-gradient-to-br from-amber-900/20 to-slate-900/20 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-10 items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <Coffee className="w-32 h-32 text-amber-500/30 mx-auto mb-6" />
                <p className="text-2xl font-light text-amber-100/60 italic">
                  "Life begins after coffee"
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/20 py-8 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="w-6 h-6 text-amber-500" />
            <span className="text-xl font-bold text-amber-300">Bean Voyage</span>
          </div>
          <p className="text-amber-100/60">© 2024 Bean Voyage. Crafted with love and caffeine.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;