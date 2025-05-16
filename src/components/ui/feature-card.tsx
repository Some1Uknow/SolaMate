import React from 'react'
import { cn } from '@/utils/cn'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div className={cn(
      'rounded-xl bg-white/90 dark:bg-gray-800/60 p-7 shadow-md backdrop-blur-sm border border-peach-200/50 dark:border-peach-900/20 transition-all duration-300 hover:shadow-lg hover:shadow-peach-400/10 hover:-translate-y-1.5 flex flex-col items-center text-center gap-5',
      'relative overflow-hidden group',
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-peach-50/30 via-transparent to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="absolute -inset-3 bg-gradient-to-br from-peach-400/20 to-red-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse-glow transition-opacity duration-300"></div>
        <div className="rounded-xl w-14 h-14 bg-gradient-to-br from-peach-400 to-red-500 flex items-center justify-center text-white mb-1 shadow-md shadow-red-400/20 relative transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold tracking-tight relative">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed relative">{description}</p>
    </div>
  )
}
