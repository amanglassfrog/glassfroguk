"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/footer";
import { toast,ToastContainer  } from "react-toastify"; // Importing toastify
import "react-toastify/dist/ReactToastify.css"; // Importing the required CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const services = [
  {
    id: 1,
    title: "Local SEO",
    description: "We put you on the map! Get your Website’s rankings soaring in the local charts for an improved business outreach with local SEO services. We help you target users through keywords relevant to your business location. Our local SEO expert services will help you rank in the healthy searches. ",
    icon: "📍", // Replace with an icon component if needed
  },
  {
    id: 2,
    title: "E-Commerce SEO",
    description: "Need your e-commerce business to thrive? Our search engine optimization services can help you approach your customers easily. There are various methods to reach out to your customers. E-commerce SEO is one of them. By targeting users in your product type, we ensure organic sales growth.",
    icon: "🛒",
  },
  
  {
    id: 4,
    title: "SEO Content ",
    description: "Your unique brand deserves a unique voice. But can it help you reach your customers? Yes! Search engines promote optimized and user-friendly content. Our SEO copywriting will not only communicate your product's unique selling points (USPs) but also help you rank on Search Engine Rank Pages (SERPs).",
    icon: "💰",
  },
];

 
const seo = [
  {
    id: 1,
    title: "Website Audit",
    description:
      "Initially, we identify areas where the website needs improvement. Therefore, we conduct a complete website audit. We check the performance of your website on technical and user ease aspects. Hence, we find out what needs maximum improvement.",
    icon: "📊", // Replace with an appropriate icon or image
  },
  {
    id: 2,
    title: "Keyword Research",
    description:
      "The next step is to analyze what type of keywords will fit your audience. We filter out the best keywords for your website. This shall aid in improved outreach of your business. The keyword finalization process is extremely focused on the SEO goals.",
    icon: "✉️",
  },
  {
    id: 3,
    title: "Optimized Content Creation",
    description:
      "Based on the keywords, we start working on creating optimized content, that is, website content, landing pages, blogs, and more. High-quality content that voices your website’s purpose while targeting users through keywords is all your website needs!",
    icon: "🎥",
  },
  {
    id: 4,
    title: "On-Page SEO",
    description:
      "As we create a keyword optimized content, we create engaging meta titles. Moreover, we help you with descriptions and headers. This makes your website more optimized and user friendly. As an SEO agency, this is our main goal.",
    icon: "🔍",
  },
  {
    id: 5,
    title: "Technical SEO",
    description:
      "While we focus on the content and on-site SEO, the backend is balanced by technical SEO. We improve your website page loading time and site structure. Search engines also consider the mobile responsiveness of your site, which we enhance.",
    icon: "💰",
  },
  {
    id: 6,
    title: "Backlinks Building ",
    description:
      "To increase the rankings of your website, high quality, and relevant backlinks are necessary. We create good backlinks for your website. This can help your rankings by enhancing the domain authority. Our link building strategy is personlized.",
    icon: "💬",
  },
  {
    id: 7,
    title: "Improved UI/UX ",
    description:
      "User experience on a website affects the rankings. Hence, it is important that while working on SEO, UI/UX is user friendly. While working on SEO, we work on the ease of navigation. This shall enhance the rankings of the website.",
    icon: "🖥️",
  },
  {
    id: 8,
    title: "Analysis and Mitigation",
    description:
      "As we execute SEO plans, we constantly track website performances. In case a strategy does not perform as expected, we run a thorough analysis. This helps us create relevant plans to maintain and enhance website SEO. ",
    icon: "💻",
  },
];

const seoservices = [
  { title: "Organic Traffic", icon: "🖱️", description: "With our constant efforts, our clients witnessed a general hike of 120% in organic traffic, leading to higher website engagement and reduced bounce rates." },
  { title: "Domain Authority", icon: "📈", description: "Our SEO strategies helped the domain authority of the websites. There was a hike of 30%, which improved their site’s credibility and built trust among its users. " },
  { title: "Keyword Ranking", icon: "🔗", description: "We crafted SEO strategies that helped our clients get a 40% increase in visibility on the search engine results pages SERPs through better keyword rankings. " },
  { title: "On-Page SEO", icon: "🎨", description: "With enhanced SEO strategies for on-page, we recorded a 50% improvement in the click-through rates CTRs across key website pages for our clients." },
  { title: "Technical SEO", icon: "📋", description: "Our constant efforts in SEO resulted in a decrease of 35% in page load times. This helped in better user experience and increased rankings for websites.  " },
  { title: "Backlinking", icon: "💻", description: "Traffic through links grew by 25% for our client's websites after high quality backlinks creation. We ensure increased traffic through link building. " },
  { title: "Content Strategy", icon: "📄", description: "The User dwell time on the websites of our clients was recorded with a 45% increase. This resulted in decreased bounce rates, improving the website ranking." },
  { title: "Targeted Keywords Ranking", icon: "💰", description: " A 90% growth was observed in snippets and position zero rankings with the help of keyword targeting. This SEO measure improved rankings. " },
  { title: "Local SEO", icon: "📦", description: "Our constant efforts in Local SEO hiked visibility by 80% in local searches and map results for our clients on Search Engines Results Pages SERPs " },
  { title: "Mobile SEO", icon: "📚", description: "Most websites are operated on mobile devices. Hence, Mobile SEO is important. Our clients recorded a 70% growth in traffic and engagement. " },
  { title: "Internal Linking", icon: "⭐", description: "Our clients recorded a growth of 50% in page views and distributing link equity. Due to an improved internal linking structure in their SEO." },
  { title: "Website Crawlability", icon: "💬", description: "Our client's websites crawled 60% better with technical SEO services. As an SEO company, we helped them achieve better SEO rankings." },
  
];
const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Example Inc.",
    feedback:
      "This service changed the way we approach customer engagement. Highly recommended!",
    image: "/cgs.webp", // Replace with an actual image path or URL
  },
  {
    name: "Jane Smith",
    title: "Lead Developer, Tech Solutions",
    feedback:
      "Incredible results! The attention to detail and customer support are unmatched.",
    image: "/cgs.webp", // Replace with an actual image path or URL
  },
  {
    name: "Alice Johnson",
    title: "Designer, Creative Agency",
    feedback:
      "The best experience I've had. It helped streamline our design process significantly.",
    image: "/cgs.webp", // Replace with an actual image path or URL
  },
  // Add more testimonials here
];


export default function HowItWorksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    websiteLink: "",
    email: "",
    phoneNumber: "",
  });
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  }); 
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  

  const validateForm = async () => {
    const newErrors = {};

    // Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "First name is required.";
    }
    if (!formData.websiteLink.trim()) {
      newErrors.websiteLink = "Website Link is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true); // Set loading to true during submission

      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Success
          setFormData({
            fullName: "",
            websiteLink: "",
            email: "",
            phoneNumber: "",
          }); // Clear form fields
          setErrors({});
 toast.success("Contact form submitted successfully!");            
        } else {
          const result = await response.json();
          toast.error("Error submitting contact form");
          console.error("Error:", result.error);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false); // Set loading to false after submission
        router.push("/quiz");
      }
    }
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
 toast.success("Contact form submitted successfully!");           setIsContactModalOpen(false); // Close the contact modal after success
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

  // Detect scroll to adjust header width
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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
    const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen);


  

  return (
    <>
   <div className="relative  py-16 px-6 md:px-12 bg-gray-100 ">
  {/* Content */}
        <div className="max-w-7xl mx-auto h-full   flex items-center justify-between text-center md:text-left">
          <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "w-full bg-[#f3f8fc] " : "w-full"
      } text-white py-4 px-6`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/"><img
          src={isScrolled ? "/logo.svg" : "/logo.svg"}
          alt="Logo"
          className={isScrolled ? "h-12" : "h-12"}
        /></a>
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
            href="/about-us"
            className={`${
              isScrolled ? "text-black" : "text-black"
            } hover:text-[#f76c6c] transition-colors`}
          >
            About
          </a>
           <motion.button
            className="ml-4 bg-[#f76c6c] text-white py-1 md:py-3 px-2 md:px-6 rounded-md  transition"
            onClick={toggleContactModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact 
          </motion.button>
        </nav>
      </div>
    </motion.header>
          {/* Text Section */}
          <div className="flex flex-col md:flex-row gap-4 mx-auto">
    <div className="flex-1 h-[80vh] flex flex-col items-center md:items-start  justify-center">
      <motion.h2
        className="text-3xl md:text-6xl mt-16 md:mt-0 font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ lineHeight: "1.4" }}
      >
       It will just take a minute to check your <span className="text-[#f55c5c]">Website’s SEO Score</span> 
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Find out your website’s effectiveness and performance on Search Engines by answering a short series of questions on SEO Services.
      </motion.p>
      <motion.button
        className="bg-[#f76c6c] text-white py-3 px-6 rounded-md hover:bg-[#f55c5c] transition"
        onClick={toggleModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get your SEO Scorecard 
      </motion.button>
    </div>

    {/* Image Section */}
    <div className="flex-1 h-[80vh] flex justify-center md:justify-end items-center">
      <motion.img
        src="/3d11.png"  // Replace with your image path
        alt="Illustration"
        className="max-w-full h-72 md:h-[34rem] object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    </div></div>
  </div>

  {/* Modal (if applicable) */}
  {isModalOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-4 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-black hover:text-gray-600"
        >
          &#x2715;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Enter your details below to start the scorecard
        </h2>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            validateForm();
          }}
        >
          {/* Name Fields */}
          <div className="flex gap-4">
            <div className="w-full">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-black"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="First name"
                className="mt-1 block w-full text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              {errors.fullName && (
                <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={formData.email}
              onChange={handleChange}
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
              placeholder="Phone Number"
              className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Website Link */}
          <div className="w-full">
            <label
              htmlFor="websiteLink"
              className="block text-sm font-medium text-black"
            >
              Website Link *
            </label>
            <input
              type="text"
              id="websiteLink"
              name="websiteLink"
              placeholder="Website Link"
              className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={formData.websiteLink}
              onChange={handleChange}
              required
            />
            {errors.websiteLink && (
              <p className="text-sm text-red-500 mt-1">{errors.websiteLink}</p>
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
              "Start"
            )}
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-sm text-black mt-4 text-center">
          Your personalised results will be emailed to you along with relevant
          marketing tips. You can opt out at any time.
        </p>
        {/* <p className="text-sm text-center mt-2">
          <a href="#" className="text-pink-500 hover:underline">
            Privacy Policy
          </a>
        </p> */}
      </motion.div>
    </div>
        )}
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
                  <p className="text-sm text-red-500 mt-1">{errors.phoneNumber}</p>
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
</div>


         <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-50">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ><p>Your Website Ranking Sorted</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          SEO Services tailored to your Website
        </h2>
        <p className="text-gray-600 md:text-xl text-lg">
We offer a range of Search Engine Optimization (SEO) services. As one of the best SEO agencies in the UK, we carefully plan search marketing strategies for you. While doing so, we consider the requirements of your business goals. This helps us create the perfect plan as an SEO company.        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="hover:bg-white p-6 text-center hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="text-7xl mb-4 text-indigo-500">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      </section>
     
      <div className="bg-[#060f3c] text-white py-12">
      <motion.div
        className="max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Results that leave an impact
        </motion.h2>
        {/* Underline */}
        <motion.div
          className="w-16 h-1 bg-white mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
        {/* Description */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Just ranking ahead of your competitors and getting increased traffic will never solve your real SEO marketing purpose. As an SEO marketing agency, we will refine your traffic. This implies that the kind of users we will draw to your website will be highly specific to your geographic location, product type, service purpose, and business model. This results in improved results, further attracting better sales numbers for you!
          <br></br><span className="font-bold">Check now if your present SEO status will help you draw improved results.</span> 
        </motion.p>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
          className="bg-[#f76c6c] text-white py-3 px-6 rounded-md hover:bg-[#f55c5c] transition"
          onClick={toggleModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         Take SEO performance test 
        </motion.button>
        </motion.div>
      </motion.div>
    </div>
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-50">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our SEO service strategy
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
We do not just start working on your website in order to help you rank. We strategize and execute. Here’s how we plan your search engine optimization services to drive impactful results for your business through your website. 
          </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {seo.map((service, index) => (
          <motion.div
            key={service.id}
            className="flex  p-6 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="text-4xl mb-4 text-indigo-500">{service.icon}</div>
           <div><h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.description}
            </p></div> 
          </motion.div>
        ))}
      </div>
      </section>
        <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         
How our SEO services worked out for our clients

          </motion.h2>
            <p className="text-gray-600 text-sm md:text-base p-[0.8rem] md:p-0">
As the best SEO company in the UK, we have worked with a variety of clients in a variety of domains. By closely working on our plan and applying SEO services,<br></br> we have produced impressive results. Here’s how we have left an impact on other businesses and websites like yours!</p>
      </div>
       <motion.div
      className="grid grid-cols-1 text-left md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {seoservices.map((service, index) => (
        <motion.div
          key={index}
          className="flex flex-col text-left items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            <span className="text-2xl bg-[#f76c6c] text-white p-2 rounded-full">
              {service.icon}
            </span>
          </div>

          {/* Description Box */}
          <motion.div
            className="mt-4 text-sm text-gray-600 text-left"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3 },
            }}
            whileHover={{ opacity: 1 }}
          >
            {service.description}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
      </section>
      <div className="w-full py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Clients Say
        </motion.h2>

        <Swiper
          modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
              
               <motion.p
                className="text-lg text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                "{testimonial.feedback}"
              </motion.p>
              <motion.p
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                {testimonial.name}
              </motion.p>
              <div className="flex justify-center items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className=" h-8 object-cover"
                />
<motion.p
                className="text-sm text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              > 
                {testimonial.title}
              </motion.p>

              </div>
              
              
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
      <Footer />
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop />

      </>
  );
}
