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
const steps = [
    {
      title: "Step 1",
      description: "Then, you will need to determine and know your brand needs and goals."
    },
    {
      title: "Step 2",
      description: "Research various SEO firms in Glasgow. Compare them on experience, cost, and client reviews."
    },
    {
      title: "Step 3",
      description: "The final step is to book an appointment with your chosen companies; select the SEO company most appropriate for you."
    },
    {
      title: "Step 4",
      description: "Upon the consultations, you are free to select the SEO agency best suited to your brand's requirements and goals."
    }
];
  const services = [
  {
    title: 'Small Business SEO',
    description:
      'You thought that owning a small business would keep you away from competing with large businesses online. Think again. Glasgow small business SEO services are what you should have to become more noticed and attract local customers. We optimize your content according to your target market so that you achieve your target audience faster.',
  },
  {
    title: 'SEO Content',
    description:
      "Your brand's authenticity requires authentic strategies. That means an SEO strategy is customized especially to your needs. As an SEO company in Glasgow, we provide user-friendly, optimized content. The fun fact is that it also supports search engine optimization! Our SEO copywriting will convey your product's unique selling points (USPs) and raise your website's search engine ranking (SERP).",
  },
  {
    title: 'Local SEO',
    description:
      "To provide these services, we make use of maps. Why? To boost the local charts' rankings for your website. By using local SEO services, the company's reach is improved. We help you use the right keywords for the target audience in the area of your business. Our local SEO services in Glasgow will help you rank better in healthy searches.",
  },
  {
    title: 'E-Commerce SEO',
    description:
      'Planning for your online business to be on top? With our SEO in Glasgow, you can easily connect with your target audience. Connecting with your clientele can be done in several ways. E-commerce SEO is one of them. By concentrating on consumers of your product kind, we ensure organic sales growth.',
  },
  {
    title: 'On-Page SEO',
    description:
      'The SEO in Glasgow includes on-page SEO services, too! You must be thinking, "Why do I need on-page SEO?" Right? Well, your brand needs a well-optimised website for search engines to ensure increased visibility and traffic. Our on-page SEO techniques optimize elements such as meta tags, headings, and keyword placement to improve your overall search engine ranking.',
  },
  {
    title: 'Off-Page SEO',
    description:
      "Off-Page SEO? Why on earth would I need that? Is that what you had in mind? Let us resolve this for you. Your website requires off-page SEO to boost its credibility and authority in search engines' perception. As Glasgow SEO company, we create helpful backlinks and a robust presence online via social media and others. This puts your website high up in the search results and boosts organic traffic.",
  },
  
];
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
     Delivering a 40% higher ranking than the average  <span className="text-[#f55c5c]"><a href='https://www.glassfrogtech.co.uk/seo-in-edinburgh'>SEO Company in Glasgow</a></span>  
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       People often confuse high ranking with the effectiveness of SEO strategies. It is essential to remember that high ranking does not guarantee success Then what does?</motion.p>
     
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
              
<motion.h3
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Good SEO Strategy = Great Interaction With The Target Audience
        </motion.h3>
        <p className="mt-4 text-lg ">
         Yes, that's right! A good strategy is the best way to understand your target audience. Once you've understood your audience, you will know how to interact with them best, right?  </p>
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
  <h2 className="text-3xl font-bold text-center mb-10">So, let's understand what a good SEO company should offer to boost your success.</h2>
  <p className='pb-5'>Marketing strategies that have worked wonders for businesses in Glasgow by some experts from various SEO agencies in Glasgow were:</p><div className="grid md:grid-cols-3 gap-6">
    {[
      { title: 'Content optimisation', desc: "The kind of traffic a website attracts is the way to check its visibility. Thus, your website must attract organic traffic to survive digital marketing. To make your website achieve that, it is essential to create high-quality, relatable content. Moreover, search engines need to optimise the content to improve your website's ranking." },
      { title: 'Keyword research', desc: "Understanding and filtering out the right keywords in a website's content is essential. Why? Your website needs keyword research to drive targeted traffic to your website. By undertaking thorough keyword research, an SEO company in Glasgow can help you optimize your website. . A good SEO agency will optimise it with the phrases your target audience seeks to increase the website's ranking." },
      { title: 'Link building', desc: " Link building is another major factor that affects your website's authority and credibility. Generating high-quality backlinks from credible websites can help you improve your website's credibility in the eyes of several search engines. This helps you reach high rankings and attract organic traffic to your website." },
      { title: 'Local SEO tactics', desc: "Adopting local SEO techniques, such as upgrading your Google My Business listing and using location-specific keywords, can help your website appears in local search results. This can also be valuable for local or small businesses willing to attract target audiences in their area."},
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
                  
 <div className="py-16 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Now, let's explore how to find the best SEO company in Glasgow to assist you and your website with practical, result-driven strategies.</h2>
        <p className="text-lg text-gray-600 mb-12">
          Make your way through these easy steps to discover the SEO agency that's your ideal digital marketing buddy:
        </p>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.5 }}
              className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-medium text-[#060f3c] mb-4">{step.title}</h3>
              <p className="text-lg text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-md text-gray-500">
            NOTE: Don't forget to ask about their strategy, communication style, and past successes to ensure the partnership is a success.

          </p>
        </div>
      </motion.div>
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
         <section className="text-center py-20 px-5">
 <div className="px-4 py-12 mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-8">Here's the thing: why should you choose Glassfrog as your Glasgow SEO partner?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
</section>
          <Footer/>
      
      
      </>
  )
}

export default page