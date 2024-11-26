import React from 'react';

const Contact = () => {
  return (
    <>
      <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl mt-32 mb-6 text-[#4d6b4f] text-center">
        Contact us
      </h2>
      <div className="flex flex-col items-center justify-center pb-20">
        <div className="container mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[95%] bg-gray-50 shadow-lg rounded-lg overflow-hidden p-8 border border-gray-300">
            {/* Contact Form Section (Left) */}
            <div className="p-6">
              <form>
                <div className="mb-6">
                  <label className="block text-gray-600 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-600 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-600 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your message here"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full active-gradient text-white py-3 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section (Right) */}
            <div className="h-96 md:h-auto p-6 border-l border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b1b6e5c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633072829787!5m2!1sen!2sau"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-none rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
