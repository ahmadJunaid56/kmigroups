"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300" data-aos="fade-up">
      <button
        className="w-full text-left py-4 px-4 font-semibold text-lg text-gray-800 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="ml-2">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-700 text-md leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-out", // Smooth easing
      once: false, // Ensure animations trigger every scroll
      mirror: true, // Allow animations on scroll back
    });
    AOS.refresh(); // Refresh AOS to ensure animations are applied
  }, []);

  const faqs = [
    {
      question: "What products does KMI offer?",
      answer:
        "KMI specializes in premium chipboard and laminated boards designed for interior spaces, blending durability with aesthetic appeal.",
    },
    {
      question: "Are KMI materials eco-friendly?",
      answer:
        "Yes, sustainability is at the core of our manufacturing process. We use eco-friendly practices to ensure our products are both durable and environmentally responsible.",
    },
    {
      question: "Where are KMI products available?",
      answer:
        "Our products are available globally through trusted distributors and retailers. Contact us for specific availability in your region.",
    },
    {
      question: "Can KMI materials be customized?",
      answer:
        "Absolutely! We offer customization options to meet the unique needs of your projects, ensuring a perfect match for your design vision.",
    },
    {
      question: "How do I get in touch with KMI?",
      answer:
        "You can reach out to us via our website or contact our customer support team for inquiries and assistance.",
    },
  ];

  return (
    <>
      <section
        className="py-16 px-4"
        data-aos="fade-right"
      >
        <h2 className="text-4xl lg:text-6xl text-center mt-24 text-[#4d6b4f] font-bold mb-8 max-w-[90%] mx-auto">
          About Us
        </h2>
        <div
          className="relative max-w-[90%] h-[400px] mx-auto rounded-xl overflow-hidden shadow-lg"
          data-aos="fade-up"
        >
          <Image
            src="/diary (3).jpg"
            alt="KMI Groups Design Patterns"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p
          className="text-gray-700 text-lg mx-auto max-w-[90%] text-justify mt-8 leading-relaxed"
          data-aos="fade-left"
        >
          Our company stands at the forefront of interior design materials,
          specializing in the manufacturing of premium chipboard and laminated
          boards crafted to meet the demands of modern spaces. With a dedication
          to quality and innovation, we provide materials that blend strength
          with exceptional design, enabling designers and builders to achieve
          beautiful, enduring interiors. We pride ourselves on a commitment to
          sustainability and quality control, ensuring that each product not
          only meets industry standards but also reflects our dedication to
          eco-friendly practices. Through rigorous testing and refined
          manufacturing processes, we guarantee consistency and precision in
          every board we produce.
        </p>
      </section>

      <section
        className="bg-white px-4"
        data-aos="fade-up"
      >
        <h2 className="text-4xl text-gray-800 mb-8 max-w-[90%] mx-auto">
          Who We Are
        </h2>
        <p
          className="text-gray-700 text-lg max-w-[90%] mx-auto text-justify leading-relaxed"
          data-aos="fade-left"
        >
          Founded with a passion for innovation and quality, KMI has grown into
          a trusted name in the interior design materials industry. Our journey
          began with a simple mission: to create durable, stylish, and
          eco-friendly materials that empower designers and builders to bring
          their visions to life. Over the years, we have built a reputation for
          excellence, combining cutting-edge technology with timeless
          craftsmanship to produce materials that stand out for their
          reliability and aesthetic appeal.
        </p>
      </section>

      <section className="py-16 bg-white px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          <div className="p-6 bg-white shadow-lg rounded-lg" data-aos="zoom-in">
            <h3 className="text-3xl text-gray-800 mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to enhance interior spaces by providing
              high-quality, innovative, and sustainable materials that empower
              designers, architects, and builders to bring their creative
              visions to life.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg" data-aos="zoom-in">
            <h3 className="text-3xl text-gray-800 mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to become a global leader in the interior design
              materials industry, known for our innovation, sustainability, and
              commitment to quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <h3 className="text-4xl text-gray-800 mb-8 max-w-[90%] mx-auto" data-aos="fade-right">
          Frequently Asked Questions
        </h3>
        <div className="max-w-[90%] mx-auto">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
