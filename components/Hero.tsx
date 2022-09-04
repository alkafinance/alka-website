import React from 'react'

export interface HeroProps {
  children: React.ReactNode
}

export function Hero({children}: HeroProps) {
  return (
    <article className="prose mx-auto w-full max-w-3xl py-12 px-4 prose-headings:font-display prose-headings:font-bold lg:prose-lg">
      {children}
    </article>
  )
}
