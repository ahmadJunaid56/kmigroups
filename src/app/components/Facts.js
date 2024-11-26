// components/Banner.js
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="bg-[#4d6b4f] text-center py-32 mt-16 px-4">
      <h2 className="text-4xl lg:text-6xl text-white font-light mb-4 tracking-wide" data-aos="fade-up">
        Wanna Decorate Your Home?
      </h2>
      <span className="text-white text-center text-xl lg:text-2xl mb-8 block" data-aos="fade-up">
        KMI vendors are available in 100+ cities of Pakistan 
      </span>
      <Link href="/design-diaries">
        <div className="bg-white text-green-900 px-4 py-3 text-xl hover:bg-gray-100 cursor-pointer inline-block" data-aos="fade-up">
          Search our Design
        </div>
      </Link>
    </div>
  );
}
