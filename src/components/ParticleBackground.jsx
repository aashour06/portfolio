import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animId
        let particles = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const PARTICLE_COUNT = Math.min(60, Math.floor(window.innerWidth / 25))

        class Particle {
            constructor() {
                this.reset()
            }
            reset() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 0.5
                this.speedX = (Math.random() - 0.5) * 0.4
                this.speedY = (Math.random() - 0.5) * 0.4
                this.opacity = Math.random() * 0.5 + 0.1
                this.pulseSpeed = Math.random() * 0.02 + 0.005
                this.pulseOffset = Math.random() * Math.PI * 2
            }
            update(time) {
                this.x += this.speedX
                this.y += this.speedY

                // wrap around edges
                if (this.x < 0) this.x = canvas.width
                if (this.x > canvas.width) this.x = 0
                if (this.y < 0) this.y = canvas.height
                if (this.y > canvas.height) this.y = 0

                this.currentOpacity = this.opacity * (0.5 + 0.5 * Math.sin(time * this.pulseSpeed + this.pulseOffset))
            }
            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(200, 149, 46, ${this.currentOpacity})`
                ctx.fill()
                // glow
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(200, 149, 46, ${this.currentOpacity * 0.15})`
                ctx.fill()
            }
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle())
        }

        let time = 0
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            time++

            // update & draw particles
            particles.forEach(p => {
                p.update(time)
                p.draw()
            })

            // draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 120) {
                        const opacity = (1 - dist / 120) * 0.12
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(200, 149, 46, ${opacity})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }

            animId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0.6,
            }}
        />
    )
}
