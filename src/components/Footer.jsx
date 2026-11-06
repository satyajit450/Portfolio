
export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <a href="#home" className="footer-brand">
                    SATYAJIT<span>.</span>
                </a>

                <p>
                    Building, learning, and turning ideas into reality.
                </p>

                <a href="#home" className="back-to-top">
                    BACK TO TOP ↑
                </a>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Satyajit Sahu. All rights reserved.</p>

                <div className="footer-socials">
                    <a href="https://github.com/satyajit450"
                        target="_blank" rel="noreferrer">GITHUB ↗</a>

                    <a href="https://www.linkedin.com/in/satyajit--sahu/"
                        target="_blank" rel="noreferrer">LINKEDIN ↗</a>
                </div>
            </div>
        </footer>
    );
}
