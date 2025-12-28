const Contact = ({ className = '' }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your inquiry! We will get back to you within 24 hours to discuss your wedding photography needs.')
        e.target.reset()
    }

    return (
        <div id="contact" className={`page ${className}`}>
            <section className="contact-section" style={{ paddingTop: '8rem' }}>
                <div className="contact-content">
                    <h2>LET'S CAPTURE YOUR SPECIAL DAY</h2>
                    <p style={{ marginBottom: '3rem', fontSize: '1.1rem', fontWeight: 300 }}>
                        Ready to document your beautiful wedding celebration? Get in touch with us to discuss your wedding photography needs.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="tel" placeholder="Phone Number" />
                        <input type="text" placeholder="Wedding Type (Traditional/Destination/Intimate)" />
                        <input type="date" placeholder="Wedding Date" />
                        <textarea placeholder="Tell us about your wedding plans, number of events, and any special requirements..."></textarea>
                        <button type="submit" className="submit-btn">SEND MESSAGE</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact

