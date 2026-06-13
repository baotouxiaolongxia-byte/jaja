import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const exhibitions = [
  {
    year: '2024',
    events: [
      {
        title: '「光影诗学」个人作品展',
        type: '个展',
        location: '北京当代艺术中心',
        description: '展出近三年创作的30余幅代表性作品'
      },
      {
        title: '亚洲当代艺术博览会',
        type: '参展',
        location: '香港会展中心',
        description: '受邀参加亚洲当代艺术博览会特展单元'
      }
    ]
  },
  {
    year: '2023',
    events: [
      {
        title: '「东方语境」群展',
        type: '群展',
        location: '上海龙美术馆',
        description: '与多位当代艺术家共同探讨东方美学的当代表达'
      },
      {
        title: '国际艺术双年展',
        type: '参展',
        location: '威尼斯',
        description: '作品《山水意境》被选为双年展中国馆代表作品'
      }
    ]
  },
  {
    year: '2022',
    events: [
      {
        title: '「静谧时光」收藏展',
        type: '收藏展',
        location: '台北故宫博物院',
        description: '作品《静谧时光》被私人收藏家捐赠并永久展出'
      }
    ]
  }
]

export default function Exhibitions({ darkMode }) {
  return (
    <section id="exhibitions" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">展览与收藏</h2>
          <p className="text-silver dark:text-silver/70">
            重要展览经历与收藏记录
          </p>
        </motion.div>

        <div className="relative">
          <div className={cn(
            "absolute left-4 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2",
            darkMode ? "bg-silver/30" : "bg-linen"
          )} />

          {exhibitions.map((yearGroup, yearIndex) => (
            <motion.div key={yearGroup.year} className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: yearIndex * 0.2 }}
                className="relative flex items-center justify-center mb-8"
              >
                <div className="absolute inset-x-0 top-1/2 h-px bg-linen dark:bg-silver/30" />
                <span className={cn(
                  "relative px-6 py-2 text-sm font-label",
                  darkMode ? "bg-ink text-ochre" : "bg-canvas text-ochre"
                )}>
                  {yearGroup.year}
                </span>
              </motion.div>

              <div className="space-y-8">
                {yearGroup.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: yearIndex * 0.2 + eventIndex * 0.1 }}
                    className="relative md:grid md:grid-cols-2 md:gap-8"
                  >
                    <div className={cn(
                      "md:text-right md:pr-12",
                      eventIndex % 2 === 1 && "md:order-2 md:text-left md:pl-12 md:pr-0"
                    )}>
                      <div className={cn(
                        "absolute left-4 md:left-1/2 w-3 h-3 rounded-full transform md:-translate-x-1/2 mt-2",
                        "bg-ochre border-4",
                        darkMode ? "border-ink" : "border-canvas"
                      )} />
                      
                      <div className="ml-12 md:ml-0">
                        <span className={cn(
                          "inline-block px-3 py-1 text-xs font-label mb-3",
                          darkMode 
                            ? "bg-silver/20 text-silver" 
                            : "bg-linen text-silver"
                        )}>
                          {event.type}
                        </span>
                        <h3 className="text-xl font-display font-semibold mb-2">
                          {event.title}
                        </h3>
                        <p className="font-label text-sm text-silver dark:text-silver/70 mb-2">
                          {event.location}
                        </p>
                        <p className="text-silver dark:text-silver/80">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className={eventIndex % 2 === 1 ? "md:order-1" : ""} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
