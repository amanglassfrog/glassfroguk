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
          <div className="flex max-w-7xl mx-auto  flex-col md:flex-row gap-4 pt-28 md:h-screen">
    <div className="flex-1 h-[80vh] flex flex-col items-center md:items-start  justify-center">
      <motion.h1
        className="text-3xl md:text-6xl mt-16 md:mt-0 font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ lineHeight: "1.4" }}
      >
    Conquer Liverpool's Searches: Partner with a Premier   <span className="text-[#f55c5c]"><a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO Agency in Liverpool</a> </span> 
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      Are you looking to rise above the competition in the city of Liverpool for your business? The key is digital marketing. With targeted <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO in Liverpool</a>, you can easily achieve all your ranking goals. But are you wondering where to start? Well, the answer is a good <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO agency in Liverpool</a>. 
                  </motion.p>
     
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
          <section className="pt-5 max-w-7xl mx-auto pb-10">
              

        <p className="mt-4 text-lg ">
Glassfrog Technologies is one of the premier agencies in the city that offers <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO services in Liverpool</a>. As an <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO Consultant Liverpool</a>, we focus on helping our clients to not only meet their ranking goals but also drive impactful traffic to their website. This is everything that you need in order to grow your business in a targeted location such as Liverpool.
                  <br></br><br></br>
Looking to know more about <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO services Liverpool</a>? Look no further. As the best <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO Agency in Liverpool</a>, we are here to help you. Scroll down and learn more about our services, process and how can we impact your business with our <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>Liverpool SEO Services</a>. 
        </p>
          </section>

          <section className="pt-5 max-w-7xl mx-auto pb-10">
              
<motion.h3
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>
Liverpool SEO Services</a> that your business needs
        </motion.h3>
        <p className="mt-4 text-lg ">
If you are looking for an <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO Agency in Liverpool</a> that can help you market your business in the city organically, we are the right choice. Our services in SEO are based on a simple understanding of search engine optimisation. We do not simply use it to just enhance your website’s ranking. We also employ it to drive a good amount of organic traffic on your website. Good <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO services Liverpool</a> will help you get audience that is highly interested in your product and services. As a good <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO agency Liverpool</a>, we focus on that. Therefore, we offer the following <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO services in Liverpool</a> to help you out:  </p>
          </section>
          
            
      <div>
      {/* Process Section */}
              <section className="py-20 px-5 bg-white">
                  
                  
  <div className="grid md:grid-cols-1 gap-6 max-w-6xl mx-auto">
    {[
      { step: 'Website Audit', description: " One of our main processes as a part of <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO services in Liverpool</a> is to conduct a thorough website audit. This helps us understand your website and check its competency with the present SEO standards. This helps us analyse the technical and content aspects of your website. Through this analysis, we can easily devise which <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>Liverpool SEO services</a> and strategies we need to improve to help your business achieve its ranking goals." },
      { step: 'Targeting Keywords', description: "  A good <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO Liverpool</a> consultant will find the keywords that match your business objectives. This targeted keyword research will help us find the best keywords that your specific audience searches. Through this, we drive traffic that is relevant and most likely to invest in your product or services. " },
      { step: 'Local SEO', description: "While working on <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO Liverpool</a> for your business, we invest in Local SEO services. This implies that we carefully use location based keywords such as, “best bakery in Liverpool”, “top tutors in Liverpool”, “best Liverpool jewellery stores”, and many more, depending on your business. As a premium <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO Agency in Liverpool</a>, we focus on writing content that is specific and most suited to your location, which is Liverpool. "},
      { step: 'GMB Optimisation', description: "  GMB is the first thing that your audience sees as they search for your business. Thus, having an optimised Google My Business is very important. While focusing on <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO in Liverpool</a> for you business, we specifically focus on how your GMB omes across as this is highly non-negotiable. Therefore, we make sure that your GMB is complete, optimised, and consistent across the web. "},
      { step: 'SEO Liverpool Content', description: " Your website’s content can make or break its rankings. For search engines, it is important that the websites ca easily communicate what is important for the users. If the content is confusing, non-readable, tough to follow, and not optimised with the best keywords, the search engines will not rank it. Thus, you must have optimised content on your website. "},
      { step: 'Technical SEO in Liverpool ', description: "A good <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO agency in Liverpool</a> will not only focus on the content and keyword parts of the SEO but also carefully assess the technical parts. This means that the website must be easy to follow. It should have a good User Interface and Design which makes it accessible and easy to navigate through."},
              { step: 'Quality Backlink Building ', description: " While doing your <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>Liverpool SEO</a>, we focus on high quality back link building. This helps us register a domain authority for your website. Additionally, it helps us completely build the trustworthiness of your website. This makes the search engine result pages understand your website better and gain a more insightful experience with it. Furthermore, the search engine result pages rank the website better. "},
      { step: 'Performance Tracking ', description: "   A good <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO  agency in Liverpool</a> will not only prove your <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO services Liverpool</a> but also help you by tracking the results. By analysing the results on a regular basis, you will get results that are relevant. Additionally, your website will be able to attract customers who are more likely to buy your product or services. "},
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
       <motion.h3
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>Liverpool SEO</a> Process
        </motion.h3>
        <p className="mt-4 text-lg">At Glassfrog, best <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO Agency Liverpool</a>, the process is simple. We understand your business, study your goals, strategise your marketing plans, and execute them. This helps us deliver the results. If you are looking for an <a href='https://www.glassfrogtech.co.uk/seo-in-liverpool'>SEO agency in Liverpool</a> which can carefully help you achieve your marketing goals through Search Engine Marketing, we are the right choice. 
Connect with us now and change the way you approach your customers! 
</p>
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