/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer  id="contact" className="bg-[#0D0B1F] text-white py-10 mt-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-40">
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                <section className="flex-1 mb-6 md:mb-0">
                    <h2 className="text-lg md:text-xl font-semibold mb-4">Contact Information</h2>
                    <p>Email: 
                        <a href="mailto:afnanahmadtariq@hotmail.com" className="text-blue-400 hover:underline">
                        afnanahmadtariq@hotmail.com
                        </a>
                    </p>
                    <p>Phone: 
                        <a href="tel:+923369277332" className="text-blue-400 hover:underline">
                        +923369277332
                        </a>
                    </p>
                </section>

                <section className="flex-1 md:pl-16">
                    <h2 className="text-lg md:text-xl font-semibold mb-4">Follow Me</h2>
                    <div className="flex gap-6 justify-center md:justify-start">
                        <Link href="https://github.com/afnanahmadtariq" passHref>
                        <img src="/icons/github.png" alt="GitHub" className="w-8 h-8 invert hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="https://linkedin.com/in/afnanahmadtariq" passHref>
                        <img src="/icons/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
                        </Link>
                        {/* Uncomment the following for Twitter and Instagram */}
                        {/* <Link href="https://twitter.com/your-username" passHref>
                        <img src="/icons/twitter-icon.png" alt="Twitter" className="w-8 h-8 hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="https://instagram.com/your-username" passHref>
                        <img src="/icons/instagram-icon.png" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
                        </Link> */}
                    </div>
                </section>
            </div>

            <p className="text-center text-sm">
                © {new Date().getFullYear()} Afnan Ahmad Tariq | All rights reserved
            </p>
        </div>

    </footer>
  );
};

export default Footer;
