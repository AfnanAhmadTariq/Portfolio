/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  return (
    <footer  id="contact" className="bg-[#0D0B1F] text-white py-10 mt-20">
        {/* Contact Form */}
        <section className="container mx-auto px-4 py-20 bg-[#0D0B1F]">
            <h2 className="text-2xl text-white font-bold mb-8 animate-fade-in-down">Contact Me</h2>
            <div className="max-w-2xl mx-auto">
            <ContactForm />
            </div>
        </section>
      <div className="container mx-auto px-40">
        <div className="flex justify-between gap-8 mb-8">
          <section className="flex-1">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>Email: <a href="mailto:afnanahmadtariq@gmail.com" className="text-blue-400 hover:underline">afnanahmadtariq@gmail.com</a></p>
            <p>Phone: <a href="tel:+923369277332" className="text-blue-400 hover:underline">+923369277332</a></p>
          </section>

          <section className="flex-1 pl-96">
            <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
            <div className="flex gap-6">
              <Link href="https://github.com/afnanahmadtariq" passHref>
                <img src="/icons/github.png" alt="GitHub" className="w-8 h-8 invert hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://linkedin.com/in/afnanahmadtariq" passHref>
                <img src="/icons/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
              </Link>
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
