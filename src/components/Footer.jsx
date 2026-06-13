import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Instagram, ExternalLink } from 'lucide-react'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function Footer({ darkMode }) {
  return (
    <footer className={cn(
      "py-12 border-t",
      darkMode ? "border-silver/20" : "border-linen"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <h3 className="text-2xl font-display font-semibold">Jada Han</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a 
              href="https://instagram.com/jadahanart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-silver dark:text-silver/70 hover:text-ochre transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.artfinder.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-silver dark:text-silver/70 hover:text-ochre transition-colors"
            >
              <span>Artfinder</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-silver dark:text-silver/60"
          >
            © 2026 Jada Han. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
