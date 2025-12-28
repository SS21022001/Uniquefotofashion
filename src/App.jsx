import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Stories from './components/Stories'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
    const [currentPage, setCurrentPage] = useState('home')
    const [loaderComplete, setLoaderComplete] = useState(false)

    const handlePageChange = (pageName) => {
        setCurrentPage(pageName)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleLoaderComplete = () => {
        setLoaderComplete(true)
    }

    const renderPage = (pageName) => {
        const isActive = currentPage === pageName
        switch (pageName) {
            case 'home':
                return <Home key="home" className={isActive ? 'active' : ''} onPageChange={handlePageChange} />
            case 'portfolio':
                return <Portfolio key="portfolio" className={isActive ? 'active' : ''} />
            case 'stories':
                return <Stories key="stories" className={isActive ? 'active' : ''} />
            case 'services':
                return <Services key="services" className={isActive ? 'active' : ''} />
            case 'about':
                return <About key="about" className={isActive ? 'active' : ''} />
            case 'contact':
                return <Contact key="contact" className={isActive ? 'active' : ''} />
            default:
                return null
        }
    }

    return (
        <div className="App">
            {!loaderComplete && <Loader onComplete={handleLoaderComplete} />}
            <Navigation onPageChange={handlePageChange} />
            {renderPage('home')}
            {renderPage('portfolio')}
            {renderPage('stories')}
            {renderPage('services')}
            {renderPage('about')}
            {renderPage('contact')}
            <Footer onPageChange={handlePageChange} />
        </div>
    )
}

export default App

