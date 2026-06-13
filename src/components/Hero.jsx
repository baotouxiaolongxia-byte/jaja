import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function Hero({ darkMode }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className={cn(
          "w-full h-full bg-cover bg-center transition-opacity duration-1000",
          darkMode ? "opacity-40" : "opacity-60"
        )} 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2658&auto=format&fit=crop')`
        }} 
        />
        <div className={cn(
          "absolute inset-0",
          darkMode ? "bg-ink/60" : "bg-canvas/40"
        )} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-6 tracking-tight">
            Jada Han
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 tracking-wider text-silver dark:text-silver/80">
            Contemporary Painter
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('portfolio')}
              className={cn(
                "px-8 py-4 text-sm font-medium transition-all duration-300",
                darkMode 
                  ? "bg-canvas text-ink hover:bg-linen"
                  : "bg-ink text-canvas hover:bg-graphite"
              )}
            >
              查看作品集
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.artfinder.com', '_blank')}
              className={cn(
                "px-8 py-4 text-sm font-medium border-2 transition-all duration-300",
                darkMode 
                  ? "border-canvas text-canvas hover:bg-canvas hover:text-ink"
                  : "border-ink text-ink hover:bg-ink hover:text-canvas"
              )}
            >
              购买作品
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className={cn(
          "w-6 h-10 rounded-full border-2 flex justify-center",
          darkMode ? "border-silver" : "border-silver/60"
        )}>
          <motion.div 
            animate={{ y: [2, 18, 2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
              "w-1 h-2 rounded-full mt-2",
              darkMode ? "bg-silver" : "bg-silver/60"
            )} 
          />
        </div>
      </motion.div>
    </section>
  )
}
