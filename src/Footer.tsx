import footerLogo from "./assets/logo-text.png";

const Footer = () => {
    return (
        <section>
            {/* <div className="divider"></div> */}
            <footer className="container mx-auto px-4 pt-20">

                {/* Desktop Footer Links */}
                <div className="hidden md:grid grid-cols-5 gap-8 border-gray-200 pb-8">

                    {/* Brand */}
                    <div className="col-span-2 space-y-4 pr-12">
                        <img src={footerLogo} alt="Dev Stack" />

                        <p className="max-w-sm text-sm leading-relaxed text-gray-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="flex gap-4 pt-2 text-sm font-medium text-gray-700">
                            <span>GitHub</span>
                            <span>Twitter</span>
                            <span>LinkedIn</span>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-900">
                            Product
                        </h3>

                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-900">
                            Company
                        </h3>

                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-900">
                            Legal
                        </h3>

                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                {/* only mobile view */}
                <div className="md:hidden w-full max-w-sm mx-auto p-6 bg-white text-center rounded-lg">
                    {/* Logo Section */}
                    <div className="flex justify-center mb-3">
                        <img src={footerLogo} alt="Footer Logo" />
                    </div>

                    {/* Subtitle Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 px-2">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-3 text-sm text-gray-600 font-medium">
                        <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
                        <span className="text-gray-400">•</span>
                        <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                        <span className="text-gray-400">•</span>
                        <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                    </div>
                </div>

                <div className="divider"></div>

                {/* Copyright */}
                <div className="text-center space-y-1 md:flex items-center justify-between py-6 text-sm text-gray-500">
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
