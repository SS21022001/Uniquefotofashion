import { useState, useEffect, useRef } from 'react'

const Navigation = ({ onPageChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navRef = useRef(null)

    const handleNavClick = (page) => {
        onPageChange(page)
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <>
            <nav ref={navRef}>
                <div className="logo" onClick={() => handleNavClick('home')}>
                    UNIQUEFOTOFASHION
                </div>
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a onClick={() => handleNavClick('home')}>HOME</a>
                    <a onClick={() => handleNavClick('portfolio')}>PORTFOLIO</a>
                    <a onClick={() => handleNavClick('stories')}>STORIES</a>
                    <a onClick={() => handleNavClick('services')}>SERVICES</a>
                    <a onClick={() => handleNavClick('about')}>ABOUT</a>
                    <button className="nav-btn" onClick={() => handleNavClick('contact')}>
                        BOOK NOW
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div 
                    className="nav-backdrop" 
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </>
    )
}

export default Navigation

