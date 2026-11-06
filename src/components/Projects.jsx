
function RagIcon() {
    return (
        <svg viewBox="0 0 100 100" className="project-logo" fill="none">
            <rect x="9" y="17" width="58" height="48" rx="9"
                stroke="currentColor" strokeWidth="2.5" />
            <path d="M33 31L49 41L33 51V31Z" fill="currentColor" />
            <circle cx="72" cy="59" r="17"
                stroke="#ff6262" strokeWidth="2.5" />
            <path d="M72 49V69M62 59H82"
                stroke="#ff6262" strokeWidth="2" />
        </svg>
    );
}

function HousingIcon() {
    return (
        <svg viewBox="0 0 100 100" className="project-logo" fill="none">
            <path d="M12 46L43 19L74 46V78H12V46Z"
                stroke="currentColor" strokeWidth="2.5" />
            <path d="M35 78V54H51V78"
                stroke="#ff6262" strokeWidth="2.5" />
            <rect x="62" y="53" width="28" height="27" rx="5"
                stroke="#ff6262" strokeWidth="2" />
            <path d="M68 72L74 65L79 68L85 59"
                stroke="#ff6262" strokeWidth="2.5" />
        </svg>
    );
}

export default function Projects() {
    const projects = [
        {
            number: '01',
            category: 'ARTIFICIAL INTELLIGENCE',
            title: 'Video-Based RAG System',
            description:
                'An AI-powered system that uses Retrieval-Augmented Generation to retrieve relevant information from video content and generate context-aware responses.',
            technologies: ['Python', 'RAG', 'LLM', 'AI'],
            link: 'https://github.com/satyajit450/RAG_MODEL',
            Icon: RagIcon,
        },
        {
            number: '02',
            category: 'MACHINE LEARNING',
            title: 'Housing Price Prediction Model',
            description:
                'A machine learning project focused on analysing housing data and predicting property prices using data processing and predictive modelling.',
            technologies: ['Python', 'Pandas', 'Machine Learning'],
            link: 'https://github.com/satyajit450/Housing-Price-Prediction-Model',
            Icon: HousingIcon,
        },
    ];

    return (
        <section className="projects-section section-wrap" id="work">
            <div className="section-heading">
                <p className="eyebrow">SELECTED WORK</p>
                <h2>Things I've <span>built.</span></h2>
                <p>Some projects from my learning and development journey.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => {
                    const Icon = project.Icon;

                    return (
                        <article className="project-card" key={project.number}>
                            <div className="project-visual">
                                <Icon />
                                <span className="project-visual-number">
                                    PROJECT / {project.number}
                                </span>
                            </div>

                            <span className="project-number">{project.number}</span>
                            <p className="eyebrow">{project.category}</p>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-tags">
                                {project.technologies.map((technology) => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>

                            <a href={project.link} target="_blank" rel="noreferrer">
                                VIEW PROJECT ↗
                            </a>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
