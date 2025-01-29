"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from '@/components/footer/footer'
import Header from '@/components/header/Header'
import React from 'react'


const cservices = [
    { title: "Technical SEO ", image: "/ts1.jpg",description:"The way your website performs in the technical forefront affects the rankings of your website. We focus on page speed, mobile friendliness, structured data, site security, and other technical aspects of your website to ease the user experience, which shall eventually help you rank better." },
    { title: "Content SEO", image: "/cs.png",description:"Content isn’t just meant for communication. It is also meant to reach out. When the content of your website is completely optimized with keywords and user-friendly content, the search engines put you up. Our SEO copywriting and content management techniques improve rankings organically. " },
    { title: "Off-Page SEO ", image: "/os.webp", description: "Outside of your website, how your website is being perceived also affects its rankings. We work on link building, local citations, guest posting, social networking, blogging, and so much more to ensure that your website performs well in the Off-page search engine performance parameters." },
    { title: "International SEO ", image: "/is.jpg",description:"With the internet, the limitations across the borders have come down. When you build a website and get it crawled on search engine pages, you open the possibility of international traffic. With international SEO techniques, we help you reach out to international and multilingual audiences in a better way. " },
    { title: "Retail SEO", image: "/rs.webp",description:"Many businesses build e-commerce websites. Our search engine optimization services can help you approach your customers easily. While there are various methods to reach out to your customers, e-commerce SEO is an underrated one. We target specific consumer traffic to ensure your organic sales growth. " },
    { title: "Local Search Marketing ", image: "/lsm.jpg",description:"Healthy searches need you to focus on geography and demographics. Our analytical understanding of your business will help you focus on targeted users through keywords that are very relevant to the geographic location of your business. Our local SEO services are exactly what your business needs. " },
  ];

const page = () => {
  return (
      <>
          <Header />
           <section  id="about" className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50 flex flex-col lg:flex-row items-center">
                {/* Image Section */}
                <motion.div
                  className="w-full lg:w-1/2 relative mb-8 lg:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative overflow-hidden ">
                    <img
                      src="/sec3.png" // Replace with your image path
                      alt="Team Collaboration"
                     
                    />
                  </div>
                </motion.div>
          
                  {/* Text Content Section */}
                  
                <motion.div
                  className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                   
                >
                  <h3 className="text-indigo-600 text-sm font-semibold uppercase mb-2">
                   We’re not a Search Engine Optimization company
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  We’re your SEO Marketing Agency 
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-6">
                    Search engine optimization is often mistaken as a necessity while building a business in the digital sphere. But it is so much more than just that. Planning your website’s search engine optimization can help you with targeted marketing results. As a strategic SEO agency in the UK, we ensure that your ranking in search results helps you bring more engaging users to your website. Finding the right traffic, increasing conversion, reducing bounce rates, and increasing your domain authority is all we focus on. With us, you do not simply rank; you market yourself through the medium of your website on various search engines.  </p>
                 
                  
                </motion.div>
                </section>
                <div className="py-12 bg-gray-100">
                  <h2 className="text-3xl md:text-5xl text-center pb-4 font-bold text-gray-800 mb-4">
                    Our Services
                  </h2>
                  <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     
                  {cservices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* <div
                        className={`absolute inset-0 bg-green-500 bg-opacity-70 flex items-center justify-center text-white text-lg font-bold p-4 ${
                          service.description ? "group-hover:hidden" : ""
                        }`}
                      >
                        {service.title}
                      </div> */}
                      {service.description && (
                        <div className="absolute inset-0 bg-[#cb3188] bg-opacity-80 p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="font-bold mb-2 text-lg">{service.title}</h3>
                          <p>{service.description}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
                </div>
          <Footer/>
      </>
  )
}

export default page