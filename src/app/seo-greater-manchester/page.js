"use client";
import Footer from '@/components/footer/footer'
import Header from '@/components/header/Header'
import React from 'react'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/ToastContext";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; // Importing toastify
import "react-toastify/dist/ReactToastify.css"; // Importing the required CSS

const page = () => {

     const { showToast } = useToast();
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isContactModalOpen, setIsContactModalOpen] = useState(false); 
      const [isScrolled, setIsScrolled] = useState(false);
      const [formData, setFormData] = useState({
        firstName: "",
        websiteLink: "",
        email: "",
        phoneNumber: "",
      });
    const [errors, setErrors] = useState({});
      const [loading, setLoading] = useState(false);
      const [openIndex, setOpenIndex] = useState(null);

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
      setLoading(true);

      try {
        const response = await fetch('/api/contact', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phoneNumber,
            message: `Website Link: ${formData.websiteLink}\n\nThis is a submission from the website form.`,
            source: "website_form"
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Failed to submit form');
        }

        showToast("Form submitted successfully!", "success");
        setFormData({
          fullName: "",
          websiteLink: "",
          email: "",
          phoneNumber: "",
        });
        setErrors({});
        router.push("/quiz");
      } catch (error) {
        console.error("Error submitting form:", error);
        showToast("Error submitting form", "error");
      } finally {
        setLoading(false);
      }
    }
    };
    
    const router = useRouter();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
  return (
      <>
          <Header />
          <div className="flex flex-col md:flex-row gap-4 mx-auto py-20 px-6 md:px-12">
    <div className="flex-1 h-[80vh] flex flex-col items-center md:items-start  justify-center">
      <motion.h1
        className="text-3xl md:text-6xl mt-16 md:mt-0 font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ lineHeight: "1.4" }}
      >
       Still tangling with the ranking numbers?  <span className="text-[#f55c5c]">We got your back!</span> 
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       Running in a digital marketing race? The boost your business needs is expert SEO services. Using an organic SEO strategy is the most effective way to increase your online visibility! Come, let's dive into this digital ocean with GlassFrog Technologies, the top <a href='/seo-greater-manchester' className='font-bold'>SEO agency in Manchester</a>.</motion.p>
     
    </div>

    <div className="flex-1 h-[80vh] flex justify-center md:justify-end items-center">
      <motion.div
        className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-4 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-black hover:text-gray-600"
        >
          
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

        <p className="text-sm text-black mt-4 text-center">
          Your personalised results will be emailed to you along with relevant
          marketing tips. You can opt out at any time.
        </p>
      </motion.div>
    </div>
          </div>
          
            <div className="bg-[#060f3c] text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center pt-10 px-5">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Wondering why? We have answers to all your queries and confusions.<br></br> Just stick around!
        </motion.h1>
        <p className="mt-4 text-lg max-w-2xl">
          As an <a href='/seo-greater-manchester' className='font-bold'>SEO consultant in Manchester</a>, GlassFrog Technologies creates SEO strategies that are dedicated to your industry niche, target audience, and business goals. We ensure that neither our strategies nor your hopes with them go in vain! We have a team of experts who keep their eyes on all the SEO trends leading the market to provide you with the best!
        </p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          
        </motion.div>
      </section>
     
          {/* Services Section */}
          
      <section className="px-5 max-w-6xl mx-auto pb-10">
  <h2 className="text-3xl font-bold text-center mb-10">SEO Services in Manchester Designed For Your Needs</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      { title: 'Local SEO', desc: "We use maps to deliver these services. Why? To get your website's rankings soaring in the local charts. This enhances the business's outreach through local SEO services. We assist you in using the important keywords for the area of your business for the target audience. You will rank higher in healthy searches with the help of our local <a href='/seo-greater-manchester' className='font-bold'><strong> SEO consultant in Manchester</strong></a>." },
      { title: 'E-Commerce SEO', desc: "Need your online business to succeed? You can effortlessly reach your target audience with the help of our <a href='/seo-greater-manchester' ><strong>SEO in Greater Manchester</strong</a>. There are several ways to connect with your clients. Among them is SEO for e-commerce. We guarantee organic sales growth by focusing on users of your product kind." },
      { title: 'SEO Content', desc: "The uniqueness of your brand deserves a unique tone. Then, what can be better than an SEO strategy that's designed especially for you? Can it help you connect with your clients? Yes! We, as an <a href='/seo-greater-manchester' ><strong>SEO agency in Manchester</strong></a>, deliver content that is optimized and easy to use. The bonus point is that it is promoted by search engines. In addition to communicating your product's unique selling points (USPs), our SEO copywriting will improve your website's search engine ranking (SERP)." },
      { title: 'On-Page SEO', desc: "The <a href='/seo-greater-manchester' ><strong>SEO in Manchester</strong></a> includes the on-page <a href='/' ><strong>SEO services</strong></a> too! You must be thinking, 'Why do I need an on-page SEO?' Right? Well, your brand needs this to make sure that your website is effectively optimized for search engines, leading to increased visibility and traffic. Our on-page SEO techniques are concerned with optimizing elements such as meta tags, headings, and keyword placement to improve your overall search engine ranking."},
      { title: 'Off-Page SEO', desc: "'Off-Page SEO? Now why would I need that?' Is it exactly what you thought? Let's answer this for you. Off-page SEO is needed to improve your website's authority and credibility in the eyes of search engines. By generating useful backlinks and creating a strong online presence through social media and other platforms. This helps your website rank better in search results and draw more organic traffic." },
      { title: 'Small Business SEO', desc: "You were thinking that having a small business will not allow you to compete with larger companies in the online world. Think again. Small business <a href='/seo-greater-manchester' className='font-bold'><strong> SEO services in Manchester</strong></a> are important for increasing your visibility and attracting local customers. We optimize your content according to your desired market so that you can reach your target audience more in no time." },
    ].map((service, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white p-5 rounded-xl shadow-md h-full flex flex-col">
          <h3 className="text-xl text-black font-semibold mb-2" dangerouslySetInnerHTML={{ __html: service.title }}></h3>
          <p className="text-gray-400 flex-grow" dangerouslySetInnerHTML={{ __html: service.desc }}></p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
 </div>
      <div>
      {/* Process Section */}
              <section className="py-20 px-5 bg-white">
                  <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         Now comes the question: why choose <br></br> Glassfrog Technologies?
        </motion.h2>
                  <p className="mt-4 text-lg  text-center">
                      But do you know that we have helped businesses increase their ranking by 40% through <a href='/seo-greater-manchester' className='font-bold'>SEO services in Manchester?</a> We have a team of experts who specialize in crafting SEO strategies, especially for your brand. We have a strong track record boasting about our successes. You can shake hands with Glassfrog Technologies to assist all kinds of businesses to stand out in the dense online economy and reach objective results.
        </p>
  <h2 className="text-3xl font-bold text-center mb-10">Steps We Follow To Bring Your Website To Your Desired Ranking:</h2>
  <div className="grid md:grid-cols-1 gap-6 max-w-6xl mx-auto">
    {[
      { step: 'Website Audit', description: "At the outset, we pinpoint the website's shortcomings. Thus, we carry out a thorough audit of the website. We evaluate your website's functionality in terms of both technical and usability. Thus, we identify the areas that require the most work." },
      { step: 'Keyword Research', description: "Analyzing the kind of keywords that will work best for your audience is the next stage. The best keywords for your website are filtered out. This will help your business reach a wider audience. The SEO objectives are the primary focus of the keyword finalization process." },
      { step: 'Content Optimization', description: "We begin developing optimized material, such as landing pages, blogs, and website content, based on the keywords. All your website needs is high-quality content that uses keywords to target viewers and communicates the goal of your website!"},
      { step: 'On-Page SEO', description: "We write captivating meta titles in addition to content that is targeted for keywords. We also assist you with headers and descriptions. Your website becomes more user-friendly and optimized as a result. This is our primary objective as an <a href='/seo-greater-manchester' className='font-bold'>SEO Agency London</a>."},
      { step: 'Technical SEO', description: "Technical SEO balances the backend while we concentrate on the content and on-site SEO. We enhance the structure and page loading speed of your website. We improve your site's mobile friendliness, which search engines take into account as well."},
      { step: 'Backlink Building', description: "High-quality, pertinent backlinks are essential to raising your website's ranks. We build high-quality backlinks to your website. Increasing the domain authority can improve your rankings. Our link-building approach is tailored to each individual."},
      { step: 'UI/UX Improvement', description: "A website's user experience has an impact on its rankings. Therefore, UI/UX must be user-friendly when working on SEO. As we work on SEO, we also work on usability. This will improve the website's ranks." },
      { step: 'Analysis & Mitigation', description: "We continuously monitor website performance as we carry out SEO strategies. We do a comprehensive study if a strategy does not work as planned. This aids in the development of pertinent strategies for preserving and improving website SEO." }
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
      >
        <div className="bg-[#060f3c] p-5 rounded-xl shadow-md text-center">
          <h3 className="text-xl text-white font-semibold" dangerouslySetInnerHTML={{ __html: item.step }}></h3>
          <p className="text-white mt-2" dangerouslySetInnerHTML={{ __html: item.description }}></p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      
      {/* Call to Action */}
      <section className="text-center py-20 px-5">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ready to Boost Your Rankings?
        </motion.h2>
        <p className="mt-4 text-lg">Partner with us for strategic and results-driven SEO solutions.</p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* <button className="px-6 py-3 text-lg bg-[#f76c6c] text-white rounded-xl shadow-md ">
            Contact Us
          </button> */}
        </motion.div>
      </section>
    </div>

          <Footer/>
      
      
      </>
  )
}

export default page