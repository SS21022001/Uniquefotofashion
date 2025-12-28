import { useEffect, useRef } from 'react'

const Home = ({ onPageChange, className = '' }) => {
    const heroScrollRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const homePage = document.getElementById('home')
            if (!homePage || !homePage.classList.contains('active')) return

            const parallaxGallery = document.querySelector('.parallax-gallery')
            if (!parallaxGallery) return

            const galleryRect = parallaxGallery.getBoundingClientRect()
            const scrolled = window.pageYOffset
            const galleryTop = parallaxGallery.offsetTop
            const galleryHeight = parallaxGallery.offsetHeight
            const windowHeight = window.innerHeight

            // Parallax Gallery - horizontal scroll based on vertical scroll
            const galleryStart = galleryTop - windowHeight * 0.5
            const galleryEnd = galleryTop + galleryHeight + windowHeight * 0.5
            const scrollRange = galleryEnd - galleryStart
            
            if (scrolled > galleryStart && scrolled < galleryEnd) {
                document.querySelectorAll('.gallery-row').forEach(row => {
                    const speed = parseFloat(row.dataset.speed) || 0
                    // Calculate progress from 0 to 1 as user scrolls through gallery
                    const progress = (scrolled - galleryStart) / scrollRange
                    const clampedProgress = Math.max(0, Math.min(1, progress))
                    
                    // Get row dimensions
                    const rowWidth = row.scrollWidth
                    const containerWidth = window.innerWidth
                    const maxTranslate = Math.max(0, rowWidth - containerWidth)
                    
                    // Apply transform with speed multiplier
                    const translateX = clampedProgress * maxTranslate * speed
                    row.style.transform = `translateX(-${translateX}px)`
                })
            } else if (scrolled <= galleryStart) {
                // Before gallery - reset to start
                document.querySelectorAll('.gallery-row').forEach(row => {
                    row.style.transform = `translateX(0px)`
                })
            } else {
                // Past gallery - set to end
                document.querySelectorAll('.gallery-row').forEach(row => {
                    const speed = parseFloat(row.dataset.speed) || 0
                    const rowWidth = row.scrollWidth
                    const containerWidth = window.innerWidth
                    const maxTranslate = Math.max(0, rowWidth - containerWidth)
                    row.style.transform = `translateX(-${maxTranslate * speed}px)`
                })
            }

            // Parallax Images (disabled for meet-section to prevent overflow)
            const images = document.querySelectorAll('.intro-image, .work-image')
            images.forEach((img, i) => {
                const speed = 0.5 + (i * 0.1)
                img.style.transform = `translateY(${scrolled * speed * 0.05}px)`
            })
        }

        handleScroll() // Initial call
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Scroll Reveal for Work Cards
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, observerOptions)

        document.querySelectorAll('.work-card').forEach(card => {
            observer.observe(card)
        })

        return () => {
            document.querySelectorAll('.work-card').forEach(card => {
                observer.unobserve(card)
            })
        }
    }, [])

    const handleHeroScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    return (
        <div id="home" className={`page ${className}`}>
            <section className="hero">
                <div className="hero-text">
                    <span>ELEGANT</span>
                    <span>MEMORABLE &</span>
                    <span>ETERNAL</span>
                </div>
                <div className="hero-scroll" ref={heroScrollRef} onClick={handleHeroScroll}>
                    ↓
                </div>
            </section>

            <section className="featured">
                <h3>Featured in</h3>
                <div className="logos">
                    <span>WEDDING WIRE</span>
                    <span>BRIDES TODAY</span>
                    <span>SHAADI.COM</span>
                    <span>WEDMEGOOD</span>
                    <span>MARRIAGE</span>
                </div>
            </section>

            <section className="image-grid">
                <div className="grid-intro">
                    <div className="intro-images">
                        <img 
                            className="intro-image" 
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&q=80" 
                            alt="Indian wedding photography"
                        />
                        <img 
                            className="intro-image" 
                            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop&q=80" 
                            alt="Wedding celebration"
                        />
                    </div>
                    <div className="intro-text">
                        <p>Welcome to UniqueFotoFasion, where we capture the magic and emotions of your special day. Our Indian wedding photography celebrates tradition, culture, and love, creating timeless memories that will be treasured for generations. Every frame tells the beautiful story of your union, preserving the vibrant colors, intricate details, and heartfelt moments that make Indian weddings truly extraordinary.</p>
                    </div>
                </div>
            </section>

            <div className="parallax-gallery">
                <div className="gallery-row" data-speed="1">
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop&q=80" 
                        alt="Indian wedding ceremony"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=500&fit=crop&q=80" 
                        alt="Wedding celebration"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop&q=80" 
                        alt="Bridal portraits"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=500&fit=crop&q=80" 
                        alt="Wedding rituals"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=500&fit=crop&q=80" 
                        alt="Mehendi ceremony"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop&q=80" 
                        alt="Sangam ceremony"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop&q=80" 
                        alt="Wedding decorations"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=500&fit=crop&q=80" 
                        alt="Reception celebration"
                    />
                </div>
                <div className="gallery-row" data-speed="-0.5">
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=500&fit=crop&q=80" 
                        alt="Haldi ceremony"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop&q=80" 
                        alt="Groom portraits"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop&q=80" 
                        alt="Wedding traditions"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=500&fit=crop&q=80" 
                        alt="Baraat procession"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=500&fit=crop&q=80" 
                        alt="Vidaai moment"
                    />
                    <img 
                        className="gallery-image" 
                        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop&q=80" 
                        alt="Saptapadi ceremony"
                    />
                </div>
            </div>

            <div className="marquee">
                <div className="marquee-content">
                    <span className="marquee-text">WEDDINGS · CEREMONIES · TRADITIONS</span>
                    <span className="marquee-text">WEDDINGS · CEREMONIES · TRADITIONS</span>
                    <span className="marquee-text">WEDDINGS · CEREMONIES · TRADITIONS</span>
                    <span className="marquee-text">WEDDINGS · CEREMONIES · TRADITIONS</span>
                </div>
            </div>

            <section className="featured-work">
                <h2 className="section-title">RECENT WEDDINGS</h2>
                
                <div className="work-grid">
                    <div className="work-card">
                        <img 
                            className="work-image" 
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&q=80" 
                            alt="Grand Wedding Celebration"
                        />
                        <div className="work-content">
                            <h3>Grand Wedding Celebration</h3>
                            <h4>Traditional Ceremony</h4>
                            <p>A magnificent five-day celebration capturing every moment from the vibrant Mehendi to the sacred Saptapadi. This stunning wedding showcased the beauty of Indian traditions with elaborate decorations, traditional rituals, and heartfelt emotions.</p>
                            <a className="cta-link">DISCOVER →</a>
                        </div>
                    </div>

                    <div className="work-card">
                        <img 
                            className="work-image" 
                            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop&q=80" 
                            alt="Intimate Wedding Story"
                        />
                        <div className="work-content">
                            <h3>Intimate Wedding Story</h3>
                            <h4>Destination Wedding</h4>
                            <p>An elegant destination wedding that beautifully blended modern aesthetics with traditional customs. Captured in a picturesque location, every frame tells the story of two souls uniting in love, surrounded by close family and friends.</p>
                            <a className="cta-link">DISCOVER →</a>
                        </div>
                    </div>

                    <div className="work-card">
                        <img 
                            className="work-image" 
                            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop&q=80" 
                            alt="Colorful Festivities"
                        />
                        <div className="work-content">
                            <h3>Colorful Festivities</h3>
                            <h4>Multi-Day Celebration</h4>
                            <p>A vibrant celebration of love, culture, and traditions. From the colorful Haldi ceremony to the emotional Vidaai, we documented every precious moment of this joyful union. The rich colors, intricate details, and genuine emotions created a timeless visual narrative.</p>
                            <a className="cta-link">DISCOVER →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="meet-section">
                <div className="meet-content">
                    <h2>Meet Our Team</h2>
                    <p>UniqueFotoFasion is a team of passionate wedding photographers dedicated to capturing the magic and emotions of your special day. We understand that Indian weddings are not just events—they are celebrations of love, family, and tradition.</p>
                    <p>We specialize in documenting every moment of your wedding journey, from the intimate pre-wedding ceremonies to the grand reception. Our work is characterized by attention to detail, cultural sensitivity, and a deep appreciation for the rich traditions that make Indian weddings so beautiful and meaningful.</p>
                    <a className="cta-link" onClick={() => onPageChange('about')} style={{ cursor: 'pointer' }}>ABOUT US →</a>
                </div>
                <div className="meet-images">
                    <img 
                        className="meet-image" 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&q=80" 
                        alt="Wedding Photography Team"
                    />
                    <img 
                        className="meet-image" 
                        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&q=80" 
                        alt="Wedding Documentation"
                    />
                </div>
            </section>
        </div>
    )
}

export default Home

