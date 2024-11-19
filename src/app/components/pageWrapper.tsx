'use client'
import Header from "./Header"
import { motion } from 'framer-motion'

export function PageWrapper({ 
  children, 
  blur = false 
}: { 
  children: React.ReactNode
  blur?: boolean 
}) {
  return (
    <div className="relative">
      {blur && (
        <motion.div 
          className="fixed inset-0 backdrop-blur-md bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}
      <div className={`relative ${blur ? 'z-10' : ''}`}>
        {children}
      </div>
    </div>
  )
}
/*





*/