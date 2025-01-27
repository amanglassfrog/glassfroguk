"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify"; // Importing toastify
import "react-toastify/dist/ReactToastify.css"; // Importing the required CSS

const Header = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateContactForm = async () => {
    const newErrors = {};

    // Validate Name
    if (!contactFormData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactFormData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(contactFormData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!contactFormData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(contactFormData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }

    // Validate Message
    if (!contactFormData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true); // Set loading to true during submission

      try {
        const response = await fetch("/api/csend", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactFormData),
        });

        if (response.ok) {
          console.log("Contact form submitted successfully");
          setContactFormData({
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
          }); // Clear form fields
          setErrors({});
          toast.success("Contact form submitted successfully!");
          setIsContactModalOpen(false); // Close the contact modal after success
        } else {
          const result = await response.json();
          toast.error("Error submitting contact form");
          console.error("Error:", result.error);
        }
      } catch (error) {
        console.error("Error submitting contact form:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "w-full bg-[#f3f8fc] " : "w-full"
        } text-white py-4 px-6`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/">
            <img
              src={isScrolled ? "/logo.svg" : "/logo.svg"}
              alt="Logo"
              className={isScrolled ? "h-12" : "h-12"}
            />
          </a>
          <nav className="flex space-x-6 items-center">
            <a
              href="/"
              className={`${
                isScrolled ? "text-black" : "text-black"
              } hover:text-[#f76c6c] transition-colors`}
            >
              Home
            </a>
            <a
              href="/#about"
              className={`${
                isScrolled ? "text-black" : "text-black"
              } hover:text-[#f76c6c] transition-colors`}
            >
              About
            </a>
            <motion.button
              className="ml-4 bg-[#f76c6c] text-white py-3 px-6 rounded-md  transition"
              onClick={toggleContactModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {isContactModalOpen && (
        <div className="fixed w-full inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="bg-white rounded-lg p-8 shadow-lg w-[50%] mx-4 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={toggleContactModal}
              className="absolute top-4 right-4 text-black hover:text-gray-600"
            >
              &#x2715;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-black">
              Contact Us
            </h2>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                validateContactForm();
              }}
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  value={contactFormData.name}
                  onChange={handleContactChange}
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  value={contactFormData.email}
                  onChange={handleContactChange}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-black"
                >
                  Phone Number *
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Your phone number"
                  className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  value={contactFormData.phoneNumber}
                  onChange={handleContactChange}
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  rows="4"
                  value={contactFormData.message}
                  onChange={handleContactChange}
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#f76c6c] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#f55c5c] transition flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 000 8v4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
      />
    </>
  );
};

export default Header;
