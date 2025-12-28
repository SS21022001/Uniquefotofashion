const About = ({ className = '' }) => {
    const teamMembers = [
        { name: 'Rajesh Kumar', role: 'LEAD WEDDING PHOTOGRAPHER' },
        { name: 'Priya Sharma', role: 'CREATIVE DIRECTOR' },
        { name: 'Amit Patel', role: 'CANDID PHOTOGRAPHER' },
        { name: 'Sneha Reddy', role: 'VIDEOGRAPHER' }
    ]

    return (
        <div id="about" className={`page ${className}`}>
            <div className="about-hero">
                <h1 className="section-title">ABOUT UNIQUEFOTOFASHION</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
                    Capturing your love story with passion and precision
                </p>
            </div>
            
            <div className="about-content">
                <p className="about-text">
                    Founded in 2015, UniqueFotoFashion has established itself as a premier Indian wedding photography studio. Our team brings together talented photographers and videographers who understand the cultural significance and emotional depth of Indian weddings.
                </p>
                <p className="about-text">
                    We believe that wedding photography goes beyond just capturing moments—it's about preserving traditions, emotions, and the beautiful journey of two families coming together. Our approach combines artistic vision with cultural sensitivity, ensuring every ceremony, ritual, and celebration is documented with authenticity and elegance.
                </p>
                <p className="about-text">
                    Having documented over 500 weddings across India, from intimate ceremonies to grand multi-day celebrations, we've built a reputation for delivering exceptional quality and creating timeless memories. Our work celebrates the rich traditions, vibrant colors, and heartfelt emotions that make Indian weddings truly unforgettable.
                </p>
            </div>
        </div>
    )
}

export default About

