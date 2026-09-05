import { useEffect, useRef, useState } from 'react'

export default function PageLoader() {
    const [progress, setProgress] = useState(0)
    const [hidden, setHidden] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        let frame = 0
        const totalFrames = 50 // ~0.8s at 60fps
        const animate = () => {
            frame++
            const t = frame / totalFrames
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3)
            setProgress(Math.min(eased * 100, 100))
            if (frame < totalFrames) {
                requestAnimationFrame(animate)
            } else {
                setTimeout(() => {
                    if (ref.current) ref.current.classList.add('loader--exit')
                    setTimeout(() => setHidden(true), 700)
                }, 200)
            }
        }
        requestAnimationFrame(animate)
    }, [])

    if (hidden) return null

    return (
        <div className="page-loader" ref={ref}>
            <div className="page-loader__content">
                <div className="page-loader__logo">
                    <span className="page-loader__name">Ahmed</span>
                    <span className="page-loader__dot">.</span>
                </div>
                <div className="page-loader__bar-track">
                    <div
                        className="page-loader__bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span className="page-loader__percent">{Math.round(progress)}%</span>
            </div>
        </div>
    )
}
