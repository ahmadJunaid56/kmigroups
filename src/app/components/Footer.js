// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="my-20 pt-8 bg-gray-50">
      <div className="mx-auto px-6 max-w-screen-xl grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Introduction */}
        <div className="logo">
            <Link href="/">
              <img
                src="/kmilogo.png" // Update this path with the correct path to your logo
                alt="KMI Groups Logo"
                className="h-12 w-auto" // Adjust size as needed
              />
            </Link>
          </div>

        {/* Sitemap Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold  uppercase text-black mb-4">Sitemap</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/design-diaries" className="footer-link ">Design Diaries</Link>
            </li>
            <li>
              <Link href="/sheets" className="footer-link ">Sheets</Link>
            </li>
            <li>
              <Link href="/collections" className="footer-link ">Collections</Link>
            </li>
            <li>
              <Link href="/about" className="footer-link ">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="footer-link ">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold  uppercase text-black mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="footer-link ">Facebook</Link>
            </li>
            <li>
              <Link href="#" className="footer-link ">LinkedIn</Link>
            </li>
            <li>
              <Link href="#" className="footer-link ">Instagram</Link>
            </li>
            <li>
              <Link href="#" className="footer-link ">Twitter</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold  uppercase text-black mb-4">Contact Us</h3>
          <span className="text-base text-[#4f4638] font-semibold font-sans">Head Office:</span>
          <span className="text-base text-black ">Chanchal Wala Road, Near Sabz Mandi Jhang Road, Faisalabad.</span>
          <span className="text-base text-[#4f4638] font-semibold mt-2 font-sans">Factory Address:</span>
          <span className="text-base text-black ">2-KM, Jhang Bhakkar Road, Mankera</span>
          <span className="text-base text-[#4f4638] font-semibold mt-2 font-sans">Phone: </span>
          <span className="text-base text-black ">+92-344-444-4446</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 flex justify-center mt-8 pt-4">
        <span className="text-black ">
          © 2024 Kmi Group. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
