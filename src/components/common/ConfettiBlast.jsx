import { useEffect, useRef } from 'react'

export function ConfettiBlast() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // Resize canvas to full viewport
    const width = (canvas.width = window.innerWidth)
    const height = (canvas.height = window.innerHeight)

    const colors = [
      '#0071e3', // Apple Blue
      '#2997ff', // Vivid Blue
      '#34c759', // Apple Green
      '#ffd60a', // Apple Gold
      '#ff375f', // Apple Pink/Red
      '#bf5af2', // Apple Purple
      '#ffffff', // White
      '#e5a97d'  // Desert Titanium
    ]

    const particleCount = 140
    const particles = []

    // Origin: Center-top or center of the modal
    const originX = width / 2
    const originY = height * 0.4

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 14 + 6
      const size = Math.random() * 8 + 4

      particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4, // slight upward launch bias
        size: size,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        gravity: 0.28,
        drag: 0.96,
        shape: Math.random() > 0.4 ? 'rect' : 'circle'
      })
    }

    let animationFrameId

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      let activeParticles = 0

      particles.forEach((p) => {
        if (p.alpha <= 0.01) return

        p.x += p.vx
        p.y += p.vy
        p.vy += p.gravity
        p.vx *= p.drag
        p.vy *= p.drag
        p.rotation += p.rotationSpeed
        p.alpha -= 0.007 // smooth fade out over ~2.5 seconds

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.globalAlpha = Math.max(0, p.alpha)
        ctx.fillStyle = p.color

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
        activeParticles++
      })

      if (activeParticles > 0) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
    />
  )
}
