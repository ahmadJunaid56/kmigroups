"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTools, FaCube, FaPaintBrush, FaRulerCombined } from "react-icons/fa";

export default function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation duration
      easing: "ease-out", // Smooth easing
      mirror: true, // Trigger animations during scrolling up
      once: false, // Ensure animations trigger every scroll
    });

    // Reinitialize AOS on scroll to ensure animations are retriggered
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container2">
      <div className="card" data-aos="fade-up">
        <div className="face face1">
          <div className="content">
            <FaTools />
            <h3>Materials</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              A premium KMI sheet features a durable MDF core with a sleek,
              scratch-resistant finish, ideal for stylish cabinetry and modern
              interiors.
            </p>
          </div>
        </div>
      </div>

      <div className="card" data-aos="fade-up">
        <div className="face face1">
          <div className="content">
            <FaCube />
            <h3>Durability</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              KMI sheets offer high density and durability, providing a solid,
              impact-resistant surface ideal for heavy-duty applications in
              modern interiors.
            </p>
          </div>
        </div>
      </div>

      <div className="card" data-aos="fade-up">
        <div className="face face1">
          <div className="content">
            <FaPaintBrush />
            <h3>Designs</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              Modern LMDF sheet designs feature sleek finishes and realistic
              wood textures, perfect for stylish, contemporary interior
              applications.
            </p>
          </div>
        </div>
      </div>

      <div className="card" data-aos="fade-up">
        <div className="face face1">
          <div className="content">
            <FaRulerCombined />
            <h3>Structure</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              KMI's sheets have a consistent structure, ensuring uniform
              stability, which enhances durability and precision for smooth,
              reliable installations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
