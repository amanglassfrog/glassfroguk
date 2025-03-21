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
        <link rel="canonical" href="https://www.glassfrogtech.co.uk/seo-in-birmingham" />
        <meta property="og:url" content="https://www.glassfrogtech.co.uk/seo-in-birmingham"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Best SEO Agency in Birmingham | Rank Higher Today! "/>
<meta property="og:description" content="Boost your rankings with Birmingham's top SEO agency!  Expert SEO, keyword strategy & digital growth for UK businesses. Get a free consultation now!"/>
<meta property="og:image" content="https://www.glassfrogtech.co.uk/logo.svg"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="glassfrogtech.co.uk"/>
<meta property="twitter:url" content="https://www.glassfrogtech.co.uk/seo-in-birmingham"/>
<meta name="twitter:title" content="Best SEO Agency in Birmingham | Rank Higher Today! "/>
<meta name="twitter:description" content="Boost your rankings with Birmingham's top SEO agency!  Expert SEO, keyword strategy & digital growth for UK businesses. Get a free consultation now!"/>
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
    Dominate Search Results with  <span className="text-[#f55c5c]">SEO Birmingham</span> 
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       Are you finding it difficult to boost the visibility and growth of your business in Birmingham city?

The digital market is growing very rapidly. From Google to Instagram, every channel has now become a platform for business growth and development. Visibility of your business, a strategic search engine optimisation strategy is very important. Picking up the right <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO agency Birmingham</a> can help you grow in your city easily. GlassFrog Technologies, one of the leading <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO firm Birmingham</a>, offers great <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO services in Birmingham</a> to help your Business rang on the top of search engine results pages SERPS.</motion.p>
     
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
              
<motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What is SEO Marketing?
        </motion.h1>
        <p className="mt-4 text-lg ">
         SEO marketing is the process of website optimisation in order to improve the online presence in search engine results. This is a kind of organic marketing, which is often considered as an unpaid one. When the targeted customer search for important keywords relevant to your business, a number of results appear to them. These include your competitors. In a city, customers need location, specific results. Therefore, businesses go for <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO Birmingham</a>. 
<br></br><br></br>
A good SEO strategy focuses on local SEO on general such as Google to enhance your rankings within your city such as Birmingham. This increases the chances of higher visibility of your website and business, eventually bringing growth.

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
  <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our SEO Process
                      </motion.h2>
                      <p>At GlassFrog Technologies, we follow a specific strategy while implementing our <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>Birmingham SEO services</a>. This technique is driven by data, analytics, and is fuelled by AI processes. Our automation and analytical approach has proved to be very relevant in the highly growing and competitive market.</p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Analysis and Identification */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Analysis and Identification</h3>
            <p className="text-gray-600">
              the first step in the process is understanding the business. It is important to identify the target audience and the competitors. Therefore, we conduct a website audit in order to find out the scope of growth. This includes checking the technical aspects of your website, analysing the keywords, auditing the content, and understanding the competition. With this step, it is easier to understand the direction in which your <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO services Birmingham</a> must proceed. 
            </p>
          </motion.div>

          {/* One Page Optimisation */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">One Page Optimisation</h3>
            <p className="text-gray-600">
              after the analytics of your website, the optimisation process begins. This includes optimising the website structure, content, and design to make it more user friendly. The easier it is for users to access your website, the better it is for search engines to rank it. Therefore, we fix your title tags, meta descriptions, header tags, image alt text, mobile responsiveness, and much more. As <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO Birmingham</a> experts, we run every possible technique that can help you grow.
            </p>
          </motion.div>

          {/* Off-Page Optimisation */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Off-Page Optimisation</h3>
            <p className="text-gray-600">
              The on-page optimisation helps your website become more user friendly. The off-page optimisation makes it more accessible. Thus, building good and high quality backlinks is an important part of the process. We rely on reputable sites to build your backlinks which can indicate the authority and trust in your website. A good ethical and sustainable backlink building process can easily help you improve your rankings on the search engine. 

            </p>
          </motion.div>

          {/* Content Marketing */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Content Marketing</h3>
            <p className="text-gray-600">
               the next part is the content. The popular phrase these days is that content is the king. It can make or break a brand. Creating an engaging content that attracts your website audience is very important. It not only voices your content better but also engages the audience to a point that the bounce rate decreases. While performing high quality <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO Birmingham</a> strategy, we ensure that content is never ignored. 

            </p>
          </motion.div>

          {/* Technical SEO */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical SEO</h3>
            <p className="text-gray-600">
              important technical aspects can never be ignored while handling the search engine optimisation of a website. It can affect the performance of your website on search engine channels. Thus, we take care of the website structure, sitemap, files, security, and more to indicate that your website is absolutely secure and safe for the users to approach. This builds trust of the search engines in your business, ranking it better. 
            </p>
          </motion.div>

          {/* Local SEO */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Local SEO</h3>
            <p className="text-gray-600">
              while trying to rank in cities such as Birmingham, it is important that local SEO techniques are used. This means that we use location specific keywords to help your website rank better. This Birmingham SEO strategy can help you rank better in the city and reach out your audience easily. 
            </p>
          </motion.div>

          {/* Tracking and Reporting */}
          {/* <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tracking and Reporting</h3>
            <p className="text-gray-600">
              We continuously monitor your website's performance, tracking metrics like organic traffic, keyword
              rankings, and conversions to ensure growth.
            </p>
          </motion.div> */}
        </div>
      </div>
</section>
 </div>
      <div>
      {/* Process Section */}
              <section className="py-20 px-5 bg-white">
                  
                  <h2 className="text-3xl font-bold text-center mb-10">Glassfrog Helps You Gain Better Leads with Targeted <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO Birmingham</a></h2>
                  <p className='text-center w-full px-2 md:px-20'>Selecting the best <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO agencies in Birmingham</a> can be a little tricky. Understanding which agencies can help you with specific SEO services and which <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>Birmingham SEO</a> companies will be able to rightly deliver results as per your requirements might be tough. Therefore, we always make sure that there is transparency and consistency. We keep you informed and updated to help you well with the process and get rid of any confusion. Therefore, we stand apart from the other <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO agencies Birmingham</a>. 
<br></br>
Our prime focus is to help you with the best leads. We understand that the purpose of rankings is to drive higher number and quality of leads. This ensures measurable results and performance. Here’s a little insight into our purpose and process: 
</p>
  <div className="grid md:grid-cols-1 gap-6 max-w-6xl mx-auto">
    {[
      { step: 'Targeted Keyword Strategy', description: " in order to reach the audience better, we use the targeted keyboard strategy. This clearly means that we use keywords that are very relevant and specific to your audience. It helps us gather traffic based on the requirements of the customers of your product. Your website ranks on the search engine pages at the right time. This increases its visibility in front of right people at the right time." },
      { step: 'Data driven optimisation', description: "our process includes careful analytics of the data. This SCO strategy basically means that we continuously study data in order to prepare better strategies and maximise return on investment. Theoretical strategies are never helpful in delivering actual results. Analytics based strategies easily can." },
      { step: 'Transparent communication', description: " the major challenges that businesses face with <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO agencies in Birmingham</a> is understanding what process the website is going through in order to rank. Since this is a complicated and technical process, it is difficult for Business to understand the strategy that is being implemented. Therefore, we ensure smooth and transparent communication. It becomes easier for you to track the progress of your website and understand what processes are going through in order to get the results."},
      { step: 'Customised solution', description: " for every problem that you face with your business in terms of <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO services in Birmingham</a>, we create honest solutions. We customise the solutions to your business needs. This is because every business is unique and every product must be approached in a different way. For every product, there is a different audience and market, and we understand that."},
      { step: 'Conversion focused strategies', description: "at the end of the day, what matters is the amount of leads generated and the number of conversions. For every business, it is important that they are able to get conversions. To generate convertible leads, organic traffic has always been a great choice. By making your website more visible, we target customers who are willing to invest in your product. We optimise the content of your website in such a way that the uses are inspired to fill out important information such as contact form or making a purchase."},
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
<section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Finding the Right SEO Partner Among <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO Agencies in Birmingham</a>
        </motion.h2>
<p className='pb-2'>
One of the main challenges with selecting the best SCO agencies in Birmingham is not understanding your business requirements. Finding the best <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO agency Birmingham</a> can be tough. Therefore, to help you make a smoother decision, here is a guide that can help you find a good <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO Birmingham agency</a>:</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Experience */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Experience</h3>
            <p className="text-gray-600">
              while selecting the <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>best agency in Birmingham</a>, always check out how experience they are. Even though experience does not ensure result, it still indicates the expertise.
            </p>
          </motion.div>

          {/* Expertise */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Expertise</h3>
            <p className="text-gray-600">
              a good team always has great SEO professionals. Hence, while selecting an <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO Birmingham agency</a>, you must always look out for an agency that has experienced and expert SEO professionals.
            </p>
          </motion.div>

          {/* Communication */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Communication</h3>
            <p className="text-gray-600">
              as you approach an <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO agency Birmingham</a>, you might always be unable to understand what exactly is happening to your website. Therefore, there has to be some good communication.
            </p>
          </motion.div>

          {/* Transparency */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Transparency</h3>
            <p className="text-gray-600">
             a good <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO agency Birmingham</a> will always be transparent about the process they use and the pricing structure they has to offer. Therefore, before you select your Birmingham SEO agency, always look out for the readiness of the company to provide you with all the details in transparent manner. 
            </p>
          </motion.div>

          {/* Results */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Results</h3>
            <p className="text-gray-600">
               and the end of the day, everything slides down, apart from the results, If you are choosing in <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO company Birmingham</a> always check the results they have delivered. This can help you get an estimate of what the agency can do for you. However, every product and business is different, but the basic approach is the same, and it must always be monetised well. 

            </p>
          </motion.div>
        </div>
      </div>
    </section>
      
      {/* Call to Action */}
      <section className="text-center py-20 px-5">
       
        <p className="mt-4 text-lg">Now you know why Glassfrog is the best choice for <a href='https://www.glassfrogtech.co.uk/seo-in-edinburgh'>SEO services in Edinburgh</a>. We have a team of experts who specialize in crafting SEO strategies, especially for your brand. We have a strong track record boasting about our successes. You can shake hands with Glassfrog Technologies to assist all kinds of businesses to stand out in the dense online economy and reach objective results.</p>
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