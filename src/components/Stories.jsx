const Stories = ({ className = '' }) => {
    const stories = [
        {
            title: 'Royal Wedding Celebration',
            meta: 'GRAND WEDDING · JUNE 2024',
            description: 'A magnificent five-day celebration in Udaipur, capturing the grandeur of traditional rituals, elaborate decorations, and the union of two families in a breathtaking palace setting.'
        },
        {
            title: 'Garden Destination Wedding',
            meta: 'DESTINATION WEDDING · MAY 2024',
            description: 'An elegant outdoor celebration in Goa, beautifully blending modern aesthetics with timeless traditions. Every moment from sunrise to sunset captured with natural beauty.'
        },
        {
            title: 'Intimate Family Affair',
            meta: 'INTIMATE WEDDING · APRIL 2024',
            description: 'A cozy celebration focusing on close family and friends. Capturing the warmth, laughter, and emotional moments that made this intimate wedding truly special.'
        },
        {
            title: 'Colorful Festivities',
            meta: 'TRADITIONAL CELEBRATION · MARCH 2024',
            description: 'Vibrant Mehendi and Haldi ceremonies with traditional music, dance, and joyous celebrations. A visual journey through colorful rituals and cultural richness.'
        },
        {
            title: 'Modern Meets Traditional',
            meta: 'CONTEMPORARY WEDDING · FEBRUARY 2024',
            description: 'A stunning fusion wedding where modern elegance meets traditional customs. Beautifully documented ceremonies that honored both contemporary style and cultural heritage.'
        },
        {
            title: 'Emotional Vidaai',
            meta: 'WEDDING DAY · JANUARY 2024',
            description: 'Capturing the poignant moments of Vidaai - the emotional farewell when a bride leaves her parental home. These heartfelt images preserve the bittersweet emotions of new beginnings.'
        }
    ]

    return (
        <div id="stories" className={`page ${className}`}>
            <div className="stories-grid">
                {stories.map((story, index) => (
                    <div key={index} className="story-card">
                        <img 
                            className="story-image" 
                            src={`https://images.unsplash.com/photo-${index === 0 ? '1519741497674-611481863552' : index === 1 ? '1522673607200-164d1b6ce486' : index === 2 ? '1511285560929-80b456fea0bc' : index === 3 ? '1464366400600-7168b8af9bc3' : index === 4 ? '1465495976277-4387d4b0b4c6' : '1519741497674-611481863552'}?w=600&h=500&fit=crop&q=80`}
                            alt={story.title}
                        />
                        <h3>{story.title}</h3>
                        <p className="story-meta">{story.meta}</p>
                        <p>{story.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stories

