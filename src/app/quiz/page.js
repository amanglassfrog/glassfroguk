"use client";
import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify"; // Importing toastify
import "react-toastify/dist/ReactToastify.css"; // Importing the required CSS
import { FiArrowLeft } from "react-icons/fi";
import GaugeChart from "react-gauge-chart";
import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";

const questions = [
  {
    section: "Website Performance and Rankings (UK Market)",
    question:
      "Are you unable to find your business in the top results on Google for location-specific searches (e.g., 'best [service] in London')?",
  },
  {
    section: "Website Performance and Rankings (UK Market)",
    question:
      "Do competitors in your industry rank higher than your website for key local search terms?",
  },
  
  
  {
    section: "Local SEO",
    question:
      "Is your business missing from Google My Business (now called Google Business Profile) or not optimized (e.g., incomplete profile, no reviews)?",
  },
  {
    section: "Local SEO",
    question:
      "Are you failing to rank in the Google Local Pack (the top three local results with a map) for your area?",
  },
  
  {
    section: "Local SEO",
    question: "Do you have few or no online reviews from UK customers?",
  },
  {
    section: "Content and On-Page SEO",
    question:
      "Is your website content not tailored to UK customers (e.g., local terminology, region-specific details)?",
  },
 
  {
    section: "Content and On-Page SEO",
    question:
      "Are your meta titles and descriptions missing, poorly written, or not optimized for UK-specific keywords?",
  },
  
  {
    section: "Technical SEO",
    question: "Does your website take too long to load for users in the UK?",
  },
  
  {
    section: "Technical SEO",
    question:
      "Are you unaware of whether your site complies with Google’s Core Web Vitals standards?",
  },
  {
    section: "Technical SEO",
    question:
      "Do you have outdated technical elements such as no SSL certificate (HTTPS) or broken links?",
  },
  {
    section: "Backlinks and Competitor Analysis",
    question:
      "Does your website have fewer backlinks from UK-based websites compared to competitors?",
  },
  {
    section: "Backlinks and Competitor Analysis",
    question:
      "Have you missed opportunities to build partnerships or gain links from UK-based institutions, blogs, or local organisations?",
  },
  
  
];

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [progress, setProgress] = useState(0);
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
    
     

  const handleAnswer = (answer) => {
    setResponses({ ...responses, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
              setProgress(((currentQuestion + 1) / questions.length) * 100);

    } else {
        setProgress(100);
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
          setProgress(((currentQuestion - 1) / questions.length) * 100);
    }
  };

  // Calculate the percentage of "Yes" responses
  const yesCount = Object.values(responses).filter((res) => res === "Yes")
    .length;
  const completionRate = yesCount / questions.length;
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
            <Header />
    <div className="flex flex-col justify-center items-center pt-20 md:pt-0 h-full md:h-screen bg-white">
      {!showResults ? (
        <div className="w-full max-w-7xl   p-8 relative overflow-hidden">
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-800 transition"
            >
              <FiArrowLeft className="text-xl mr-2" />
              Back
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-xl font-bold text-gray-800 text-center">
                {questions[currentQuestion].section}
              </h1>
              <p className="text-lg text-gray-600 text-center mt-4">
                {questions[currentQuestion].question}
              </p>
              <div className="mt-8 flex justify-center gap-6">
                <button
                  className="bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600 transition"
                  onClick={() => handleAnswer("Yes")}
                >
                  Yes
                </button>
                <button
                  className="bg-gray-300 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-400 transition"
                  onClick={() => handleAnswer("No")}
                >
                  No
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
                  <div className="w-full flex flex-col-reverse mt-12 md:mt-0 md:flex-row max-w-7xl  p-8 ">
                      <div className="w-full md:w-[50%]">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
Here's Your Website's SEO Performance Scorecard!       </h1>
          <p className="text-gray-600 mb-6">

Congratulations, your website's SEO performance has been analyzed. Your website's performance on the SEO metrics is here. This scorecard represents how well your website is bound to perform on the Search Engine Result Pages SERPs. The lower your score, the higher the scope of improvement.
<br></br><br></br>
A lot of factors impact a website's SEO performance. These include technical performance, user experience ease, quality of content, backlinks, and more. To know better about the reasons for your website's low SEO score, get your website audited by us. Find out in detail about the key areas to focus on while improving your website's SEO performance.


                                </p>
                                <motion.button
              className=" bg-[#f76c6c] text-white py-3 px-6 rounded-md  transition"
              onClick={toggleContactModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
                                </motion.button>
                                
                                {isContactModalOpen && (
        <div className="fixed w-full inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="bg-white rounded-lg p-8 shadow-lg w-full md:w-[50%] mx-4 relative"
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
                            
                            </div>
          <div className="mx-auto w-full md:w-[50%]">
  <GaugeChart
    id="gauge-chart"
    nrOfLevels={20}
    colors={["#FF5F6D", "#FFC371"]}
    percent={completionRate}
    arcPadding={0.02}
    textColor="#000" // Set text color to black (or any other suitable color)
    needleColor="#000" // Set needle color to black or any suitable color
    textFontSize={30} // Adjust font size as per your requirement
    style={{ position: "relative" }}
  />
  <div style={{
    position: "absolute", 
    top: "-40px", // Adjust top positioning to place text above the gauge chart
    left: "50%", 
    transform: "translateX(-50%)", 
    fontSize: "20px", 
    color: "#000", // Text color
    fontWeight: "bold"
  }}>
    {completionRate}% {/* Display percentage at the top of the chart */}
  </div>
</div>

          
         
        </div>
          )}
          {!showResults && (
        <div className="w-full max-w-2xl mt-6 px-4">
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div
              className="bg-red-500 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-600 text-sm mt-2 text-center">
            {Math.round(progress)}% Complete
          </p>
        </div>
      )}
            </div>
        <Footer/>
        </>
        
  );
};

export default Questionnaire;
