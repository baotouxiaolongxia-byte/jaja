import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Menu, X, Sun, Moon, Instagram, Mail, ExternalLink, Share2, ChevronRight } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Exhibitions from './components/Exhibitions'
import Contact from './components/Contact'
import Footer from './components/Footer'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'home', label: '首页' },
    { id: 'portfolio', label: '作品集' },
    { id: 'about', label: '关于我' },
    { id: 'exhibitions', label: '展览' },
    { id: 'contact', label: '联系' },
  ]

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-700",
      darkMode ? "bg-ink text-canvas" : "bg-canvas text-graphite"
    )}>
      <Navbar 
        sections={sections}
        scrolled={scrolled}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <Hero darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Exhibitions darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  )
}
