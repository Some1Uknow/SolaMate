import React from 'react'
import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  withTagline?: boolean
}

export function Logo({ className, size = 'md', withTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  }

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className={cn(
        'font-bold tracking-tight text-gradient',
        sizeClasses[size]
      )}>
        SolaMate
      </div>
      {withTagline && (
        <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
          Dating for Solana Developers
        </p>
      )}
    </div>
  )
}
