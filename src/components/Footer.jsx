import logo from '../public/logo.png'
const Footer = ({ onPageChange }) => {
    return (
        <footer>
            <div className="footer-nav">
                <a onClick={() => onPageChange('home')}>HOME</a>
                <a onClick={() => onPageChange('portfolio')}>PORTFOLIO</a>
                <a onClick={() => onPageChange('stories')}>STORIES</a>
                <a onClick={() => onPageChange('services')}>SERVICES</a>
                <a onClick={() => onPageChange('about')}>ABOUT</a>
                <a onClick={() => onPageChange('contact')}>CONTACT</a>
            </div>
            <div className="signature">
                <img src={logo} alt="Unique Foto Fashion Logo" />
            </div>
            <p>UNIQUEFOTOFASHION © 2026</p>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.7 }}>
                Indian Wedding Photography Studio
            </p>
        </footer>
    )
}

export default Footer

