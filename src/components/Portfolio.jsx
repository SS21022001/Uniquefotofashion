import { useEffect } from 'react'

const Portfolio = ({ className = '' }) => {
    useEffect(() => {
        // 3D Tilt Effect on Portfolio Items
        const portfolioItems = document.querySelectorAll('.portfolio-item')
        
        portfolioItems.forEach(item => {
            const handleMouseMove = (e) => {
                const rect = item.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                
                const rotateX = (y - centerY) / 20
                const rotateY = (centerX - x) / 20
                
                item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
            }
            
            const handleMouseLeave = () => {
                item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
            }
            
            item.addEventListener('mousemove', handleMouseMove)
            item.addEventListener('mouseleave', handleMouseLeave)
            
            return () => {
                item.removeEventListener('mousemove', handleMouseMove)
                item.removeEventListener('mouseleave', handleMouseLeave)
            }
        })
    }, [])

    return (
        <div id="portfolio" className={`page ${className}`}>
            <section className="portfolio-section">
                <h2 className="section-title">OUR PORTFOLIO</h2>
                <div className="portfolio-grid">
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&q=80" alt="Wedding Ceremony" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&q=80" alt="Bridal Portrait" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop&q=80" alt="Mehendi Ceremony" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&q=80" alt="Haldi Ceremony" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop&q=80" alt="Sangam Ceremony" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&q=80" alt="Wedding Rituals" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&q=80" alt="Saptapadi" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop&q=80" alt="Reception" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&q=80" alt="Baraat" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop&q=80" alt="Vidaai" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&q=80" alt="Pre-Wedding" />
                    <img className="portfolio-item" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&q=80" alt="Wedding Decorations" />
                </div>
            </section>
        </div>
    )
}

export default Portfolio

