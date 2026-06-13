import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { X, Share2, ExternalLink } from 'lucide-react'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const artworks = [
  {
    id: 1,
    title: '晨光系列 No.1',
    category: '风景',
    size: '80 x 100 cm',
    medium: '布面油画',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?q=80&w=2670&auto=format&fit=crop',
    artfinderUrl: 'https://www.artfinder.com'
  },
  {
    id: 2,
    title: '静谧时光',
    category: '静物',
    size: '60 x 60 cm',
    medium: '布面丙烯',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2545&auto=format&fit=crop',
    artfinderUrl: 'https://www.artfinder.com'
  },
  {
    id: 3,
    title: '山水意境',
    category: '风景',
    size: '100 x 150 cm',
    medium: '综合材料',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=2670&auto=format&fit=crop',
    artfinderUrl: 'https://www.artfinder.com'
  },
  {
    id: 4,
    title: '花间絮语',
    category: '花卉',
    size: '50 x 70 cm',
    medium: '水彩',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=2670&auto=format&fit=crop',
    artfinderUrl: 'https://www.artfinder.com'
  },
  {
    id: 5,
    title: '城市印象',
    category: '风景',
    size: '70 x 90 cm',
    medium: '布面油画',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2670&auto=format&fit=crop',
    artfinderUrl: 'https://www.artfinder.com'
  },
  {
    id: 6,
    title: '秋日私语',
    category: '风景',
    size: '80 x 80 cm',
    medium: '布面丙烯',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2670&auto=format&fit=crop',
    artfinderUrl: 'https://www.artfinder.com'
  },
  {
    id: 7,
    title: '生命之舞',
    category: '抽象',
    size: '120 x 120 cm',
    medium: '综合材料',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=2670&auto=format&fit=crop',
    artfinderUrl: 'https://www.artfinder.com'
  },
  {
    id: 8,
    title: '梦境花园',
    category: '花卉',
    size: '60 x 80 cm',
    medium: '水彩',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2670&auto=format&fit=crop',
    artfinderUrl: 'https://www.artfinder.com'
  }
]

const categories = ['全部', '风景', '静物', '花卉', '抽象']

export default function Portfolio({ darkMode }) {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  const filteredArtworks = selectedCategory === '全部' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory)

  const shareArtwork = (artwork) => {
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: `查看 ${artwork.title} by Jada Han`,
        url: artwork.artfinderUrl,
      })
    }
  }

  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">作品集</h2>
          <p className="text-silver dark:text-silver/70 max-w-2xl mx-auto">
            作品以温润的东方美学为核心，探索光影与色彩的诗意表达
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-6 py-2 text-sm font-medium transition-all duration-300",
                selectedCategory === cat
                  ? (darkMode ? "bg-canvas text-ink" : "bg-ink text-canvas")
                  : (darkMode 
                      ? "border border-silver/30 hover:border-silver/60" 
                      : "border border-linen hover:border-ochre")
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedArtwork(artwork)}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className={cn(
                "relative overflow-hidden transition-all duration-500",
                "border-2 border-transparent hover:border-ochre/50",
                "group-hover:shadow-xl"
              )}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={cn(
                  "absolute inset-0 transition-opacity duration-300 flex items-end p-6",
                  "opacity-0 group-hover:opacity-100",
                  darkMode ? "bg-ink/80" : "bg-canvas/90"
                )}>
                  <div>
                    <h3 className="text-xl font-display font-medium mb-1">{artwork.title}</h3>
                    <p className="text-sm font-label text-silver dark:text-silver/70">{artwork.size}</p>
                    <p className="text-sm font-label text-silver dark:text-silver/70">{artwork.medium}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArtwork(null)}
          >
            <div className={cn(
              "absolute inset-0",
              darkMode ? "bg-ink/95" : "bg-canvas/95"
            )} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArtwork(null)}
                className={cn(
                  "absolute top-4 right-4 z-10 p-2 rounded-full",
                  darkMode ? "bg-canvas/20 hover:bg-canvas/30" : "bg-ink/10 hover:bg-ink/20"
                )}
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="aspect-square">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                    {selectedArtwork.title}
                  </h2>
                  <p className="font-label text-sm text-silver dark:text-silver/70 mb-2">
                    {selectedArtwork.category}
                  </p>
                  <p className="font-label text-sm text-silver dark:text-silver/70 mb-2">
                    {selectedArtwork.size}
                  </p>
                  <p className="font-label text-sm text-silver dark:text-silver/70 mb-2">
                    {selectedArtwork.medium}
                  </p>
                  <p className="font-label text-sm text-silver dark:text-silver/70 mb-8">
                    {selectedArtwork.year}
                  </p>
                  
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(selectedArtwork.artfinderUrl, '_blank')}
                      className={cn(
                        "flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all",
                        darkMode 
                          ? "bg-canvas text-ink hover:bg-linen"
                          : "bg-ink text-canvas hover:bg-graphite"
                      )}
                    >
                      <ExternalLink size={18} />
                      在 Artfinder 购买
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => shareArtwork(selectedArtwork)}
                      className={cn(
                        "flex items-center gap-2 px-6 py-3 text-sm font-medium border-2 transition-all",
                        darkMode 
                          ? "border-canvas hover:bg-canvas hover:text-ink"
                          : "border-ink hover:bg-ink hover:text-canvas"
                      )}
                    >
                      <Share2 size={18} />
                      分享
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
