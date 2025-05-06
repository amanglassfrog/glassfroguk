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
    Glassfrog Technologies - Your Strategic  <span className="text-[#f55c5c]">SEO Agency in Bristol</span> 
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      The present digital market is changing rapidly with every passing minute. You have to be updated with every trend and do things differently. Thus, just having a website is not enough. You need to be more visible and attract the best customers for your website. These customers can be then turned into assured leads. This is what a good SEO can do for you. </motion.p>
     
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
SEO is not just simply ranking on the search engine pages. It is using that to attract more leads and customers for your business. If you are located in a city such as Bristol, a good <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO agency Bristol</a> will consider your location as well. They will understand you business, it’s needs, it’s quality, and it’s nature. Accordingly, they shall strategise to help you with the best SEO marketing that can not increase your visibility but also help you grow. <br></br><br></br>
As one of the <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO agencies in Bristol</a>, we focus on doing this for your business. We aim to help you reach out to the right set of customers in the right way. By using basic <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO services Bristol</a>, we produce extraordinary results. We are not just any SEO agency in Bristol, we are your SEO marketing partner. 
        </p>
          </section>

          <section className="pt-5 max-w-7xl mx-auto pb-10">
              
<motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Searching for the best <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO agency Bristol</a>? We are here! 
        </motion.h1>
        <p className="mt-4 text-lg ">
If you are looking for the best <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO agencies in Bristol</a>, the common promises you will come across are of top rankings. But rankings don’t get you business altogether. It is the quality that comes into the play as well. Attracting quality leads that are right for your business is very important. You need to find the traffic that is interested in your business and product. We understand that.
                  <br></br><br></br>
We focus on helping to attract the right kind of traffic. This traffic can help you increase your sales numbers and grow your business exponentially. We optimise your website with best keywords. We different from the other SEO companies in Bristol. Our strength lies in our process. We analyse, strategise, and implement. We simply just don’t optimise and show rankings, we bring results!         </p>
          </section>
          <section className="pt-5 max-w-7xl mx-auto pb-10">
              
<motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO Services Bristol</a> to help you find your customers  
        </motion.h1>
              <p className="mt-4 text-lg pb-4">
                  Every business is found with a different purpose and approach. Therefore, every business is different and unique. We tailor our services to your business. Our <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO services Bristol</a> are strategised in a way that they can help you find the best solution to your rankings as well as lead generation problems. We start by understanding your business and product. Accordingly, we strategise in the best way to create a solution that fits your business. 
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
          Here is how we approach your business while conducting <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO in Bristol</a>: 
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
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Strategic SEO Marketing</h3>
            <p className="text-gray-600">
We have been talking about SEO marketing more than just Search Engine Optimisation. This is because SEO just helps you rank. SEO marketing is a full fledged process of marketing that can help you find your audience in the most better way through rankings. SEO is not just about keywords or making the website user friendly. It is also about connecting with your audience. Targeting your customers to find the exact set of customers is exactly what SEO marketing is about. 
            </p>
          </motion.div>

          {/* One Page Optimisation */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Location specific marketing</h3>
            <p className="text-gray-600">
As we talk about <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO in Bristol</a>, there are many things that come into the focus. A good <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO agency Bristol</a> will always help you understand the audience in Bristol and accordingly find the best audience by filtering out the keywords. We do this by our special strategies that are designed to suit your business. We pick keywords that match the local page search results and your business model. Accordingly, we optimise. This helps us find your audience quickly and efficiently.             </p>
                          </motion.div>
                          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">A data-driven approach</h3>
            <p className="text-gray-600">
simply checking your present rankings and working on the keywords to show you the results is not how we work. We use analytics and AI to track your progress and the type of audience you are presently generating. We then compare this with your goals. As a premium <a href='https://www.glassfrogtech.co.uk/seo-in-birmingham'>SEO company in Bristol</a>, we analyse this difference to create a strategy that can help you rank better and attract the best audience that is actually interested in your product and thus, increase the sales numbers. 

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
                  
                  <h2 className="text-3xl font-bold text-center mb-10">Our set of services in  <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO in Bristol </a></h2>
                  <p className='text-center w-full px-2 md:px-20'>
                      We offer a variety of services in <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>Search Engine Optimisation Bristol</a> that our clients can use in order to grow their business. These services include not only the optimisation parts but also the technical parts.  By using all of the following services, we help our clients achieve their desired results quicker and better. Our <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO services Bristol</a> include the following:
                  </p>
  <div className="grid md:grid-cols-1 gap-6 max-w-6xl mx-auto">
    {[
      { step: 'Keyword Research and Targeting', description: " We find the best keywords that match the product and the intent of the target audience searching for it. Accordingly, we target them on your page to help you rank better." },
      { step: 'On Page Optimisation', description: " Another crucial step on Search Engine Optimisation is On Page Optimisation. As a part of it, we optimise the structure of the website, code, content, and more to make it more crawlable and indexable." },
      { step: 'Off Page Optimisation', description: " High quality backlinks can really improve the quality of your website and improve its authority. This is crucial if you are looking to achieve credibility from search engines. We handle this part so that your website becomes trustworthy. "},
      { step: 'Content Marketing', description: " The famous adage goes, “Content is the King”. It really is when it is about attracting users through the content. The more your content appears interesting and engaging, the higher it approaches your users. We improve your content so that your brand and product is voiced in the best way possible. "},
      { step: 'Local SEO', description: " If you are looking to grow in the location of Bristol with the help of <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO agencies in Bristol</a>, then your Google My Business must be best optimised. You need local citation that are valuable to increase your visibility in the local search results. "},
      { step: 'Technical SEO ', description: " Technical Challenges can really hamper the growth of your website. Search engines such as Google need to ensure that your website is user friendly and not against the policies. Only then, can it rank better on the search engine result pages. "},
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
       
        <p className="mt-4 text-lg">Selecting the best <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO agency Bristol</a> can be a little tricky. Therefore, you must take all the factors into consideration. Once you find the best <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO agency Bristol</a> that aligns with your goals, you can see the actual difference that your results can display. As one of the premium <a href='https://www.glassfrogtech.co.uk/seo-in-bristol'>SEO agencies in Bristol</a>, we help you get the exact results that you are looking for! </p>
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