const Services = ({ className = '' }) => {
    const services = [
        {
            icon: 'Icon',
            title: 'Pre-Wedding Photography',
            description: 'Capture your love story with beautiful pre-wedding shoots. From romantic outdoor sessions to traditional setups, we create stunning images that reflect your unique bond and style.'
        },
        {
            icon: 'Icon',
            title: 'Wedding Day Coverage',
            description: 'Comprehensive documentation of your entire wedding day. We capture every ceremony, ritual, and emotional moment from dawn to dusk, ensuring no precious memory is missed.'
        },
        {
            icon: 'Icon',
            title: 'Multi-Day Events',
            description: 'Full coverage of all wedding functions including Mehendi, Haldi, Sangam, Sangeet, and Reception. We document every celebration with attention to detail and cultural authenticity.'
        },
        {
            icon: 'Icon',
            title: 'Candid Photography',
            description: 'Natural, unposed moments that capture genuine emotions and interactions. Our candid photography style preserves authentic expressions and spontaneous celebrations.'
        },
        {
            icon: 'Icon',
            title: 'Portrait Sessions',
            description: 'Elegant bridal and groom portraits, family portraits, and couple sessions. Professional lighting and styling to create timeless images you will treasure forever.'
        },
        {
            icon: 'Icon',
            title: 'Cinematic Videography',
            description: 'Beautiful wedding films and highlight reels that tell your unique love story. From traditional ceremonies to modern celebrations, we create cinematic memories.'
        }
    ]

    return (
        <div id="services" className={`page ${className}`}>
            <div className="services-hero">
                <h1 className="section-title">OUR SERVICES</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
                    We offer comprehensive wedding photography and videography services tailored to capture every precious moment of your special celebration.
                </p>
            </div>
            
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services

