import { useState } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Instagram, Mail, Send } from 'lucide-react'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">联系我</h2>
          <p className="text-silver dark:text-silver/70">
            欢迎咨询作品收藏、展览合作或其他事宜
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-medium mb-4">联系方式</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@jadahan.com" 
                    className="flex items-center gap-3 text-silver dark:text-silver/80 hover:text-ochre transition-colors"
                  >
                    <Mail size={20} />
                    <span>contact@jadahan.com</span>
                  </a>
                  <a 
                    href="https://instagram.com/jadahanart" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-silver dark:text-silver/80 hover:text-ochre transition-colors"
                  >
                    <Instagram size={20} />
                    <span>@jadahanart</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-medium mb-4">工作时间</h3>
                <p className="text-silver dark:text-silver/80">
                  周一至周五<br />
                  10:00 - 18:00
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-medium mb-4">工作室地址</h3>
                <p className="text-silver dark:text-silver/80">
                  北京市朝阳区<br />
                  798艺术区
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">姓名</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 border-2 bg-transparent focus:outline-none transition-colors",
                    darkMode 
                      ? "border-silver/30 focus:border-ochre" 
                      : "border-linen focus:border-ochre"
                  )}
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">邮箱</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 border-2 bg-transparent focus:outline-none transition-colors",
                    darkMode 
                      ? "border-silver/30 focus:border-ochre" 
                      : "border-linen focus:border-ochre"
                  )}
                  placeholder="请输入您的邮箱"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">留言</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 border-2 bg-transparent focus:outline-none transition-colors resize-none",
                    darkMode 
                      ? "border-silver/30 focus:border-ochre" 
                      : "border-linen focus:border-ochre"
                  )}
                  placeholder="请输入您的留言..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium transition-all",
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : (darkMode 
                        ? "bg-canvas text-ink hover:bg-linen"
                        : "bg-ink text-canvas hover:bg-graphite")
                )}
              >
                {isSubmitting ? (
                  <span>发送中...</span>
                ) : submitSuccess ? (
                  <span>发送成功！</span>
                ) : (
                  <>
                    <Send size={18} />
                    发送留言
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
