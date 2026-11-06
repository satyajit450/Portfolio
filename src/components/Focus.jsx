
export default function Focus() {
    const areas = [
        {
            number: '01',
            title: 'Web Development',
            description:
                'Building responsive websites and interactive user experiences using modern web technologies.',
            tags: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            number: '02',
            title: 'AI & Data Science',
            description:
                'Exploring data analysis, machine learning, and AI-powered applications through practical projects.',
            tags: ['Python', 'Pandas', 'Machine Learning', 'AI']
        },
        {
            number: '03',
            title: 'Problem Solving',
            description:
                'Strengthening programming fundamentals, logical thinking, and algorithmic problem-solving.',
            tags: ['C++', 'DSA', 'Algorithms', 'Logic']
        }
    ];

    return (
        <section className="focus-section section-wrap" id="focus">
            <div className="section-heading">
                <p className="eyebrow">WHAT I'M EXPLORING</p>
                <h2>Areas of <span>focus.</span></h2>
            </div>

            <div className="focus-grid">
                {areas.map((area) => (
                    <article className="focus-card" key={area.number}>
                        <span className="focus-number">{area.number}</span>
                        <h3>{area.title}</h3>
                        <p>{area.description}</p>

                        <div className="focus-tags">
                            {area.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
