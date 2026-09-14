import footerLogo from "./assets/logo-text.png";

const Footer = () => {
    return (
        <section className="pt-20">
            <div className="border border-gray-100"></div>
            <footer className="container mx-auto px-4 pt-20">
                <div className="hidden md:grid grid-cols-5 gap-8 border-gray-200 pb-8">
                    <div className="col-span-2 space-y-4 pr-12">
                        <img src={footerLogo} alt="Dev Stack" />
                        <p className="max-w-sm text-sm leading-relaxed text-secondary">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>
                        <div className="flex gap-4 pt-2 text-sm font-medium text-secondary">
                            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Product</h3>
                        <ul className="space-y-2 text-sm text-secondary">
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary"> Company</h3>
                        <ul className="space-y-2 text-sm text-secondary">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Legal</h3>
                        <ul className="space-y-2 text-sm text-secondary">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                {/* mobile view */}
                <div className="md:hidden w-full max-w-sm mx-auto p-6 bg-white text-center rounded-lg">
                    <div className="flex justify-center mb-3">
                        <img src={footerLogo} alt="Footer Logo" />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 px-2">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className="flex items-center justify-center gap-3 text-sm text-secondary font-medium">
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                        <span className="text-gray-400">•</span>
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <span className="text-gray-400">•</span>
                        <a href="#" className="hover:text-primary gray-900 transition-colors">LinkedIn</a>
                    </div>
                </div>

                <div className="border border-gray-100"></div>
                <div className="text-center space-y-1 md:flex items-center justify-between py-6 text-sm text-secondary">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <ul className="flex justify-center gap-4">
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
