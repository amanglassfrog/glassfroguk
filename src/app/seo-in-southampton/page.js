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
const faqs = [
  {
    question: 'Why is Glassfrog a strategic SEO agency in Southampton?',
    answer: `We are a Southampton SEO agency. We plan for your business. Our Southampton SEO plans are intelligent. They target your long-term success.
`,
  },
  {
    question: ' Can SEO services in Southampton help my business grow?',
    answer: `Yes, good SEO services in Southampton matter. They get more customers to find you online. This SEO in Southampton really can make your business larger.`,
  },
  {
    question: 'Why choose Glassfrog for SEO in Southampton?',
    answer: `We are experienced with SEO in Southampton. Our staff is good at this. We provide you with professional SEO services in Southampton. We also have a clear idea of what we are going to do.`,
  },
  {
    question: 'What SEO services in Southampton do you offer?',
    answer: `Our SEO services in Southampton are numerous. We perform local SEO in Southampton. We assist with website content. We work to enhance your website itself.`,
  },
   {
    question: 'How does your SEO agency in Southampton plan strategically?',
    answer: ` Our SEO agency in Southampton initially learns about your business. We notice who your customers are. We learn about your business goals. Then we create a solid SEO strategy in Southampton.`,
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
const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
    Partner with a Leading    <span className="text-[#f55c5c]">SEO Agency in Southampton</span> 
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      Are you just ranking in the Southampton SEO rank pages but not being able to attract leads or traffic?
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
It might be because you are unable to use the best <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO services in Southampton</a>. The growing digital market has become very competitive, and finding an audience can be a little difficult. Therefore, it is always important to have the best search engine optimisation. SEO strategy that can help you grow. In order to not only rank on the search engine pages but also gain good traffic, you can rely on an expert <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO agency in Southampton</a>.
                  
                  <br></br><br></br>
A good <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>Southampton SEO agency</a> can help you stand out in local searches and help you gain right amount of leads. One such agency is Glassfrog. As one of the leading <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO agency Southampton</a>, we offer <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO services in Southampton</a> city that are custom to drive your business growth. We focus on enhancing your website rankings on search engine pages, such that you can get higher sales and numbers.
        </p>
          </section>

          <section className="pt-5 max-w-7xl mx-auto pb-10">
              
<motion.h3
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What is SEO Marketing, and Why Does Your Southampton Business Need It?
        </motion.h3>
        <p className="mt-4 text-lg ">
Using <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO services Southampton</a> to grow your business in a way that increases its awareness as well as leads is everything SEO marketing is about. This is organic marketing which drives users to your website organically and naturally. This implies that in order to get increased traffic, you will not have to rely on ads or paid traffic. 
In Southampton, you will wish to get local traffic better. A good <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO agency in Southampton</a> will ensure that. A good SEO strategy can help you enhance your ranking on Google and other search engines. This can happen by making your website relevant, trustworthy, and user-friendly. With the search engine pages will recognise this, they will naturally rank higher.


                  <br></br><br></br>
For local businesses, <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO in Southampton</a> is very important. By using location-based keywords, such as “ best restaurants in Southampton”, “ best teachers in Southampton”, “top rated Southampton activities”, and many more, you can rank better in your competition. This will help your business grow and reach the targeted audience faster and better.
              </p>
          </section>
          <section className="pt-5 max-w-7xl mx-auto pb-10">
              
<motion.h3
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           A Step-by-Step Guide to Southampton Success  
        </motion.h3>
              <p className="mt-4 text-lg pb-4">
When you are looking for the best Southampton SEO Services, there are several factors you must consider. One of the most important factors is the methodology of the <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>Southampton SEO Agency</a> that you are choosing. You should analyse if the services that they are offering you are relevant to your business. This will help you figure out the best <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO Agency in Southampton</a> that can help you grow on Search Engine Rank Pages.        </p>
          </section>
            
      <div>
      {/* Process Section */}
              <section className="py-20 px-5 bg-white">
                  
                  <p className='text-center w-full px-2 md:px-20'>
                      <p className='text-lg mb-5'>As one of the best SEO agencies in Southampton, we offer a variety of Southampton SEO services. These services are clubbed to help you get a dynamic SEO marketing experience. For this, we follow a very specific process. This process includes:</p>
                  </p>
  <div className="grid md:grid-cols-1 gap-6 max-w-6xl mx-auto">
    {[
      { step: 'SEO Audit', description: " The first part of the process of getting started with SEO marketing by employing <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>Southampton SEO services</a> is doing a website audit. We carefully analyse the technical, content, and other aspects of your website from the perspective of the user. This helps us understand where the problem in your website lies in terms of rankings." },
      { step: 'Keyword Research', description: " The next step in the process is carefully considering the keywords as per the requirement of your product as well as the business. Accordingly, we filter out the keywords. In case of location, we perform <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO services Southampton</a> by choosing Southampton relevant keywords, such as 'Best Southampton hairdressers', 'Affordable cafes in Southampton', 'top rated bookstores in Southampton', and many more. These are the keywords we will work on to help you the best local <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO services in Southampton.</a>" },
      { step: 'Optimisation of Google My Business (GMB)', description: " Once the website has been audited and the keywords have been selected, the next step is to optimise the Google My Business (GMB) account. This profile is the first thing that your customers would see when they search Southampton specific keywords. Additionally, GMB listings often dominate the top spots in local search results. Therefore, this is a very important step. We manage your customer reviews, improve descriptions, and optimising all the GMB features. "},
      { step: 'Local On-Page Optimisation', description: " the next important part of the process is considering the local keywords and analysing the searches. This can help us create the best local SEP strategy for you as it will help us do an on page optimisation for local searches. During local searches, your business’s page will appear at the top as we will change the structure, content, and code specifically to match such requirements."},
      { step: 'Local Citations', description: "  while engaging in local SEO, high quality local citations are needed to be built on the website. This helps your website build trust and authority. The search engines can trust your website much better if high quality and better sources back it. Therefore, building and management of local citations is very important. "},
      { step: 'Content Marketing specific to the area ', description: "  as a premium <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO agency in Southampton</a>, we understand the importance of tailoring the strategies to the local market. As per the traffic in Southampton, we carefully create the content that can engage the users to a higher extent, improving the quality of traffic. A highly engaging traffic can help you drive much better traffic and more leads. "},
              { step: 'Technical SEO ', description: " Apart from being a well optimised and content friendly website, it is important that your website is also technically balanced. Therefore, we identify and resolve any technical issues that could be hindering your website's performance on the search engine result pages. This involves optimising site architecture, XML sitemaps, robots.txt files, and ensuring HTTPS security."},
      { step: 'Performance monitoring and improvements ', description: "   our focus is to always keep track of the performance of your website. This shall help us understand how aptly the strategies are working. Moreover, this shall also help us understand what exactly we must change while offering our <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO services in Southampton</a>. Thus, we accordingly strategise and develop your SEO plan. "},
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
           How Glassfrog Helps You Attract More Leads from Southampton Customers 
        </motion.h3>
        <p className="mt-4 text-lg">It is extremely important to select the best out of all the  <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO consultant Southampton.</a> This can make or break your business in the local markets. Glassfrog totally understand that. Therefore, we offer better services that support your business’s growth. Our purpose is to help you find your audience in a better way. Our process is simple. We analyse, strategise, and implement. 

The small things that we do can make the largest impact. Previously, our clients noticed an average hike of 68% in their monthly traffic which resulted in a much better turnover. The increasing number of leads led to much higher business numbers. Hence, as an  <a href='https://www.glassfrogtech.co.uk/seo-in-southampton'>SEO agency in Southampton</a>, we are not only relevant to your business but also crucial. 
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
           <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 font-medium flex justify-between items-center"
            >
              {faq.question}
              <span className="text-lg">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
      </section>
    </div>

          <Footer/>
      
      
      </>
  )
}

export default page