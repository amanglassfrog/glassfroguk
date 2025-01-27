"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    section: "Website Performance and Rankings (UK Market)",
    question:
      "Is your website's organic traffic from the UK lower than expected?",
  },
//   {
//     section: "Website Performance and Rankings (UK Market)",
//     question:
//       "Have you struggled to attract customers from specific regions in the UK where you operate?",
//   },
//   {
//     section: "Local SEO",
//     question:
//       "Is your business missing from Google My Business (now called Google Business Profile) or not optimized (e.g., incomplete profile, no reviews)?",
//   },
//   {
//     section: "Local SEO",
//     question:
//       "Are you failing to rank in the Google Local Pack (the top three local results with a map) for your area?",
//   },
//   {
//     section: "Local SEO",
//     question:
//       "Have you neglected to list your business in UK-specific directories like Yell, Scoot, or 192.com?",
//   },
//   {
//     section: "Local SEO",
//     question: "Do you have few or no online reviews from UK customers?",
//   },
//   {
//     section: "Content and On-Page SEO",
//     question:
//       "Is your website content not tailored to UK customers (e.g., local terminology, region-specific details)?",
//   },
//   {
//     section: "Content and On-Page SEO",
//     question:
//       "Do you lack targeted landing pages for the specific cities or regions where you operate (e.g., 'Plumber in Manchester' or 'London-based solicitor')?",
//   },
//   {
//     section: "Content and On-Page SEO",
//     question:
//       "Are your meta titles and descriptions missing, poorly written, or not optimized for UK-specific keywords?",
//   },
//   {
//     section: "Content and On-Page SEO",
//     question:
//       "Is your website failing to rank for long-tail keywords that include UK-specific phrases or regions?",
//   },
//   {
//     section: "Technical SEO",
//     question: "Does your website take too long to load for users in the UK?",
//   },
//   {
//     section: "Technical SEO",
//     question:
//       "Is your website not optimized for mobile users, who account for a large portion of UK internet traffic?",
//   },
//   {
//     section: "Technical SEO",
//     question:
//       "Are you unaware of whether your site complies with Google’s Core Web Vitals standards?",
//   },
//   {
//     section: "Technical SEO",
//     question:
//       "Do you have outdated technical elements such as no SSL certificate (HTTPS) or broken links?",
//   },
//   {
//     section: "Backlinks and Competitor Analysis",
//     question:
//       "Does your website have fewer backlinks from UK-based websites compared to competitors?",
//   },
//   {
//     section: "Backlinks and Competitor Analysis",
//     question:
//       "Have you missed opportunities to build partnerships or gain links from UK-based institutions, blogs, or local organisations?",
//   },
//   {
//     section: "Backlinks and Competitor Analysis",
//     question:
//       "Are you unsure of how your competitors are outranking you and where their backlinks are coming from?",
//   },
//   {
//     section: "Time, Tools, and Expertise",
//     question:
//       "Do you lack the time, knowledge, or team resources to manage SEO in-house?",
//   },
//   {
//     section: "Time, Tools, and Expertise",
//     question:
//       "Are you unfamiliar with or unable to use advanced SEO tools like SEMrush, Ahrefs, or Google Analytics effectively?",
//   },
//   {
//     section: "Time, Tools, and Expertise",
//     question:
//       "Do you feel overwhelmed by trying to keep up with the constant changes in Google’s algorithms and UK-specific SEO trends?",
//   },
];

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [progress, setProgress] = useState(0);

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

    return (
        <>
            <Header />
    <div className="flex flex-col justify-center items-center h-screen bg-white">
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
                  <div className="w-full flex max-w-7xl  p-8 text-center">
                      <div className="w-[50%]">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
Thank you for taking the
Congratulations on completing The Sales Growth Scorecard!        </h1>
          <p className="text-gray-600 mb-6">





Congratulations on completing the The Sales Growth Scorecard, which has been designed to optimise lead generation, marketing and sales results for your business.

These results will open your eyes to your biggest areas of potential for growth. Pay close attention to the areas you achieved the lowest scores. By focusing on these areas, you’ll be able to grow your business in a strategic way.

If your Score is below where you'd like it to be, don’t worry. This report will give you insights on what you can do to boost each area.
You can do this yourself or we can accelerate this for you and your business via our Business Training Programs.</p></div>
          <div className="mx-auto w-[50%]">
            <GaugeChart
              id="gauge-chart"
              nrOfLevels={20}
              colors={["#FF5F6D", "#FFC371"]}
              percent={completionRate}
              arcPadding={0.02}
              textColor="#fff"
            />
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
