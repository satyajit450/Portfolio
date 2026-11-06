
export default function Toolkit() {
    const technologyGroups = [
        {
            number: '01',
            title: 'PROGRAMMING',
            technologies: ['C', 'C++', 'Python', 'Java'],
        },
        {
            number: '02',
            title: 'WEB DEVELOPMENT',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        },
        {
            number: '03',
            title: 'DATA SCIENCE & AI',
            technologies: ['NumPy', 'Pandas', 'Matplotlib', 'Machine Learning'],
        },
        {
            number: '04',
            title: 'TOOLS & PLATFORMS',
            technologies: ['VS Code', 'Git', 'GitHub', 'MySQL'],
        },
    ];

    return (
        <section className="toolkit-section" id="toolkit">
            <div className="section-heading">
                <p className="eyebrow">MY TECHNOLOGY STACK</p>
                <h2>Tools of the <span>trade.</span></h2>
                <p>
                    Technologies and tools I'm learning and using in my projects.
                </p>
            </div>

            <div className="toolkit-grid">
                {technologyGroups.map((group) => (
                    <article className="toolkit-card" key={group.number}>
                        <span className="toolkit-number">{group.number}</span>
                        <h3>{group.title}</h3>

                        <div className="toolkit-tags">
                            {group.technologies.map((technology) => (
                                <span className="tool-tag" key={technology}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
