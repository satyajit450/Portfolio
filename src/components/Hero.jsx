
export default function Hero() {
    return (
        <section className="hero section-wrap" id="home">

            <div className="hero-watermark">PORTFOLIO</div>

            <div className="hero-copy">
                <p className="eyebrow hero-animate">
                    <span className="status-dot"></span>
                    BCA STUDENT <b>·</b> DEVELOPER IN PROGRESS
                </p>

                <h1 className="hero-animate">
                    Build ideas.<br />
                    Make them <span>real.</span>
                </h1>

                <p className="hero-description hero-animate">
                    I'm Satyajit — an aspiring developer exploring software
                    development, data, and AI. I learn by building practical
                    projects, experimenting with technology, and solving
                    problems step by step.
                </p>

                <div className="hero-actions hero-animate">
                    <a className="button button-primary" href="#work">
                        EXPLORE MY WORK <span>↗</span>
                    </a>

                    <a className="button button-outline" href="#contact">
                        GET IN TOUCH <span>↗</span>
                    </a>
                </div>

                <div className="social-links hero-animate">
                    <a href="https://github.com/satyajit450"
                        target="_blank" rel="noreferrer">
                        ◉ GitHub ↗
                    </a>

                    <a href="https://www.linkedin.com/in/satyajit--sahu/"
                        target="_blank" rel="noreferrer">
                        in LinkedIn ↗
                    </a>
                </div>

                <div className="hero-footnote hero-animate">
                    <span>BASED IN INDIA</span>
                    <span>OPEN TO LEARNING & COLLABORATION</span>
                </div>
            </div>

            <div className="hero-visual">
                <div className="visual-orb orb-one"></div>
                <div className="visual-orb orb-two"></div>
                <div className="visual-grid"></div>

                <div className="hero-ring hero-ring-one"></div>
                <div className="hero-ring hero-ring-two"></div>

                <div className="photo-label">
                    PROFILE <span>/ 01</span>
                </div>

                <div className="portrait-frame">
                    <img
                        src="/assets/profile.jpg"
                        alt="Portrait of Satyajit Sahu"
                    />
                </div>

                <div className="portrait-stamp">
                    CURIOUS BY NATURE<br />
                    <strong>BUILDER BY PRACTICE.</strong>
                </div>

                <div className="side-note">
                    DEVELOPER<br />
                    & PROBLEM SOLVER
                </div>
            </div>

            <div className="section-index">
                01 — INTRODUCTION
            </div>

            <div className="hero-scroll-indicator">
                <span></span>
                SCROLL TO EXPLORE
            </div>

        </section>
    );
}
