// src/components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6 px-4 md:px-10">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Column 1 */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Press</a></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                        <li><a href="#" className="hover:underline">Community</a></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
                        <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" /></a>
                        <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
                        <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-10 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
