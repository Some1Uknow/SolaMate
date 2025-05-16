import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'

interface HeroIconProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  effect?: 'float' | 'pulse' | 'heart-beat' | 'shine' | 'none'
}

export function HeroIcon({
  src,
  alt,
  className,
  width = 80,
  height = 80,
  priority = false,
  effect = 'none'
}: HeroIconProps) {
  const effectClass = 
    effect === 'float' ? 'animate-soft-float' : 
    effect === 'pulse' ? 'animate-[pulse-glow_3s_infinite]' : 
    effect === 'heart-beat' ? 'animate-[heart-beat_1.5s_ease-in-out_infinite]' :
    effect === 'shine' ? 'shine-effect' : ''

  return (
    <div className={cn(
      'relative flex items-center justify-center',
      effectClass,
      className
    )}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        priority={priority}
      />
    </div>
  )
}
