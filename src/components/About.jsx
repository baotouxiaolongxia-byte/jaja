import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function About({ darkMode }) {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className={cn(
                "aspect-[3/4] overflow-hidden border-2",
                darkMode ? "border-silver/30" : "border-linen"
              )}>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop"
                  alt="Jada Han Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={cn(
                "absolute -bottom-6 -right-6 w-32 h-32 border-2 -z-10",
                darkMode ? "border-ochre/30" : "border-ochre/20"
              )} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8">
              关于我
            </h2>
            <div className="space-y-6 text-silver dark:text-silver/80 leading-relaxed">
              <p className="text-lg">
                Jada Han（韩佳钰），当代画家，毕业于中央美术学院。作品以温润的东方美学为核心，探索光影与色彩的诗意表达。
              </p>
              <p>
                在多年的艺术创作中，我致力于将传统东方美学与当代艺术语言相融合。每一幅作品都是一次对自然、时间与生命的沉思，通过细腻的笔触和微妙的色彩变化，捕捉那些稍纵即逝的美好瞬间。
              </p>
              <p>
                我的创作灵感来源于日常生活中的平凡事物——清晨的第一缕阳光、窗外摇曳的树影、花瓶中静静绽放的花朵。我相信，真正的艺术存在于这些被忽视的美好之中。
              </p>
              <p>
                作品曾在国内外多个重要艺术机构展出，并被私人收藏家广泛收藏。目前工作和生活于北京。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-linen dark:border-silver/30">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-semibold text-ochre">10+</p>
                <p className="text-sm text-silver dark:text-silver/70 mt-2">年创作经验</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-semibold text-ochre">50+</p>
                <p className="text-sm text-silver dark:text-silver/70 mt-2">参展作品</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-semibold text-ochre">20+</p>
                <p className="text-sm text-silver dark:text-silver/70 mt-2">展览经历</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
