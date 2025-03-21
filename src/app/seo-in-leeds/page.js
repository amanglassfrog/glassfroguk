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
      <head>
        <link rel="canonical" href="https://www.glassfrogtech.co.uk/seo-in-leeds" />
        <meta property="og:url" content="https://www.glassfrogtech.co.uk/seo-in-leeds"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Here’s how an SEO agency in Leeds can be helpful"/>
<meta property="og:description" content="An SEO company in Leeds not only helps you get good ranking but also optimizes your website content to reach your target audience."/>
<meta property="og:image" content="https://www.glassfrogtech.co.uk/logo.svg"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="glassfrogtech.co.uk"/>
<meta property="twitter:url" content="https://www.glassfrogtech.co.uk/seo-in-leeds"/>
<meta name="twitter:title" content="Here’s how an SEO agency in Leeds can be helpful"/>
<meta name="twitter:description" content="An SEO company in Leeds not only helps you get good ranking but also optimizes your website content to reach your target audience."/>
<meta name="twitter:image" content="https://www.glassfrogtech.co.uk/logo.svg"/>

        </head>
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
     Most Reliable SEO Agency  <span className="text-[#f55c5c]">Leeds</span> 
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       Having a recognizable online presence is a necessity, but... Getting it is a tricky game! Thus, it is advised to work with a reliable digital marketing agency in Leeds.</motion.p>
     
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
          <section className="pt-5 max-w-7xl mx-auto pb-10 text-center">
              
<motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Doubtful about working with an <a href='https://www.glassfrogtech.co.uk/seo-in-leeds'>SEO company in Leeds</a>?
        </motion.h1>
        <p className="mt-4 text-lg ">
         Don't think too much, and just keep scrolling!
        </p>
          </section>
            <div className="bg-[#060f3c] text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center pt-10 px-5">
        
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
  <h2 className="text-3xl font-bold text-center mb-10">Following are the benefits you'll get from working with Glassfrog Technologies:</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      { title: 'Organic Traffic', desc: "We delivered a hike of <strong>120%</strong> in organic traffic to our clients, leading to an increase in their website's engagement. It also helped with reduced bounce rates." },
      { title: 'Domain Authority', desc: "The SEO strategies curated by our experts helped the domain authority of the websites. Our clients' websites saw a hike of <strong>30%<strong> that improved their credibility among their users as well!" },
      { title: 'Keyword Ranking', desc: "Our SEO strategies helped our clients achieve a <strong>40%</strong> increase in visibility on SERP by improving their keyword rankings." },
      { title: 'Backlinking', desc: "Our SEO strategies include backlinking that grows traffic by <strong>25%</strong> for our client's websites. We guarantee our clients engagement, and we ensure that by doing backlinking."},
      { title: 'Targeted Keywords Ranking', desc: "Our SEO strategy of targeted keyword ranking helped improve rankings by <strong>90%</strong>. This was achieved by identifying the most effective keywords for our clients' specific target audience." },
      { title: 'Mobile SEO', desc: "We understand the importance of mobile SEO; thus, we include this in our SEO strategy. We helped our clients receive a <strong>70%</strong> growth in engagement." },
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
          
          <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Let’s look at the SEO services in Leeds we offer:</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* E-Commerce SEO */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">E-Commerce SEO</h3>
            <p className="text-gray-600">
You can effortlessly reach your target audience with the help of our <a href='https://www.glassfrogtech.co.uk/seo-in-leeds'>SEO marketing in Leeds</a>. Do you know there are so many ways in which you can connect with your clients? Among them is SEO for e-commerce. We guarantee organic sales growth by focusing on users of your product kind            </p>
          </div>

          {/* Small Business SEO */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Small Business SEO</h3>
            <p className="text-gray-600">
Many people think that small businesses cannot do well in terms of digital marketing. But that's a myth! Small business <a href='https://www.glassfrogtech.co.uk/seo-in-leeds'>SEO services in Leeds</a> are important for higher visibility and engagement. We optimize your content in such a way that it becomes quite easy for you to reach your target audience.            </p>
          </div>

          {/* Local SEO */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Local SEO</h3>
            <p className="text-gray-600">
To get your website's rankings soaring in the local charts, we ensure your location with the help of maps. By using local SEO services, the company's reach is improved. We help you use the right keywords for the target audience in the area of your business. Our <a href='https://www.glassfrogtech.co.uk/seo-in-leeds'>SEO agency in Leeds</a> will help you rank better in healthy searches.            </p>
          </div>

          {/* On-Page SEO */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">On-Page SEO</h3>
            <p className="text-gray-600">
The <a href='https://www.glassfrogtech.co.uk/seo-in-leeds'>SEO in Leeds</a> includes the on-page SEO services too! Your questioning the need for on-page SEO is absolutely right! The answer to your question is that your brand needs on-page SEO to make sure that your website is effectively optimized for search engines, leading to increased visibility and traffic. Our on-page strategies focus on optimizing meta tags and headers as well as keyword placements. All these steps are taken to increase your website's ranking.            </p>
          </div>

          {/* Off-Page SEO */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Off-Page SEO</h3>
            <p className="text-gray-600">
Are you also one of those who have the misconception that they don't need off-page SEO? Let's clear it out for you. Off-page SEO is needed to increase your website's credibility in rankings. This process includes building a solid online presence on social media and other channels, as well as producing helpful backlinks. This helps your website's ranking and increases organic traffic.            </p>
          </div>

          {/* SEO Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Content</h3>
            <p className="text-gray-600">
Every brand is unique, thus it deserves an SEO strategy planned especially for it. It can help you connect with your clients! We, as an <a href='https://www.glassfrogtech.co.uk/seo-in-leeds'>SEO company in Leeds</a>, deliver content that is optimized and easy to use. Our SEO copywriting will not only convey the unique selling points (USPs) of your product but also raise the search engine ranking (SERP) of your website.            </p>
          </div>
        </div>
      </div>
          </section>
          
          <section className="pt-5 max-w-7xl mx-auto pb-10 text-center">
              
<motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Glassfrog Technology: Your  <a href='https://www.glassfrogtech.co.uk/seo-in-leeds'>SEO Marketing Company in Leeds</a>
        </motion.h1>
        <p className="mt-4 text-lg ">
         Glassfrog Technologies is an <a href='https://www.glassfrogtech.co.uk/seo-in-leeds'>SEO Company in Leeds</a>. We are determined to provide skilled SEO services to the brands who are willing to have an online presence. We have a team of experts who specialize in crafting SEO strategies, especially for your brand. We have a strong track record boasting about our successes. You can shake hands with Glassfrog Technologies to assist all kinds of businesses to stand out in the dense online economy and reach objective results.
        </p>
          </section>
      <div>
      {/* Process Section */}
              <section className="py-20 px-5 bg-white">
                  
  <h2 className="text-3xl font-bold text-center mb-10">Here's how we bring your website to the top ranking:</h2>
  <div className="grid md:grid-cols-1 gap-6 max-w-6xl mx-auto">
    {[
      { step: 'Website Audit', description: "First, we understand the shortcomings of the website. As a result, we carefully look at the website. We analyze the technical and usage aspects of your website's operation. As a result, we determine which areas need the greatest attention." },
      { step: 'Keyword Research', description: "Understanding the kind of keywords that will work best for your target audience is the next step we follow. Then we filter out the best keywords for your website. This step helps your business reach a larger audience." },
      { step: 'Optimized Content Creation', description: "We start developing optimized content, like landing pages, blogs, and website content, based on the selected keywords. All your website needs is high-quality content that uses keywords to target viewers and communicates the goal of your website!"},
      { step: 'On-Page SEO', description: "We write captivating meta titles in addition to content that is targeted for keywords. We also assist you with headers and descriptions. Your website becomes more user-friendly and optimized as a result. This is our primary objective as an <a href='https://www.glassfrogtech.co.uk/'>SEO agency in London</a>."},
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
       
        <p className="mt-4 text-lg">Now you know why Glassfrog is the best choice for <a href='https://www.glassfrogtech.co.uk/seo-in-leeds'>SEO services in Leeds</a>. We have a team of experts who specialize in crafting SEO strategies, especially for your brand. We have a strong track record boasting about our successes. You can shake hands with Glassfrog Technologies to assist all kinds of businesses to stand out in the dense online economy and reach objective results.</p>
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