'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,           // How long the smooth animation takes (in seconds)
      easing: (t) => 1 - Math.pow(1 - t, 3),  // Smooth easing curve
      smoothWheel: true,       // Enable smooth wheel scrolling
      wheelMultiplier: 1.2,      // Scroll speed multiplier
      touchMultiplier: 2,      // Mobile touch speed
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
