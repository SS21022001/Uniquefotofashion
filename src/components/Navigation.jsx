const Navigation = ({ onPageChange }) => {
    return (
        <nav>
            <div className="logo" onClick={() => onPageChange('home')}>
                UNIQUEFOTOFASION
            </div>
            <div className="nav-links">
                <a onClick={() => onPageChange('home')}>HOME</a>
                <a onClick={() => onPageChange('portfolio')}>PORTFOLIO</a>
                <a onClick={() => onPageChange('stories')}>STORIES</a>
                <a onClick={() => onPageChange('services')}>SERVICES</a>
                <a onClick={() => onPageChange('about')}>ABOUT</a>
                <button className="nav-btn" onClick={() => onPageChange('contact')}>
                    BOOK NOW
                </button>
            </div>
        </nav>
    )
}

export default Navigation

