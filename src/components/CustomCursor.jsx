import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const [hovering, setHovering] = useState(false)

    useEffect(() => {
        // Only show on non-touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return

        let mouseX = 0, mouseY = 0
        let ringX = 0, ringY = 0

        const move = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
            if (!visible) setVisible(true)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
            }
        }

        const onEnterInteractive = () => setHovering(true)
        const onLeaveInteractive = () => setHovering(false)

        const trackInteractives = () => {
            const els = document.querySelectorAll('a, button, .glass-card, .btn, input, textarea, .skills__tool, .about__tag, .project-card__link')
            els.forEach(el => {
                el.addEventListener('mouseenter', onEnterInteractive)
                el.addEventListener('mouseleave', onLeaveInteractive)
            })
            return els
        }

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12
            ringY += (mouseY - ringY) * 0.12
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
            }
            requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', move)
        requestAnimationFrame(animate)

        // track interactives after a tick
        let els
        const timer = setTimeout(() => { els = trackInteractives() }, 500)

        // Use MutationObserver for dynamically added elements
        const observer = new MutationObserver(() => {
            if (els) {
                els.forEach(el => {
                    el.removeEventListener('mouseenter', onEnterInteractive)
                    el.removeEventListener('mouseleave', onLeaveInteractive)
                })
            }
            els = trackInteractives()
        })
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener('mousemove', move)
            clearTimeout(timer)
            observer.disconnect()
            if (els) {
                els.forEach(el => {
                    el.removeEventListener('mouseenter', onEnterInteractive)
                    el.removeEventListener('mouseleave', onLeaveInteractive)
                })
            }
        }
    }, [visible])

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

    return (
        <>
            <div
                ref={dotRef}
                className={`custom-cursor__dot ${visible ? 'visible' : ''} ${hovering ? 'hover' : ''}`}
            />
            <div
                ref={ringRef}
                className={`custom-cursor__ring ${visible ? 'visible' : ''} ${hovering ? 'hover' : ''}`}
            />
        </>
    )
}
