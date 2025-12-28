import { useState, useEffect } from 'react'

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0)
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const loadInterval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random() * 15
                if (newProgress >= 100) {
                    clearInterval(loadInterval)
                    setTimeout(() => {
                        setHidden(true)
                        if (onComplete) onComplete()
                    }, 500)
                    return 100
                }
                return newProgress
            })
        }, 100)

        return () => clearInterval(loadInterval)
    }, [onComplete])

    return (
        <div className={`loader ${hidden ? 'hidden' : ''}`}>
            <div className="loader-text">UFF</div>
            <div className="loader-progress">{Math.floor(progress)}%</div>
        </div>
    )
}

export default Loader

