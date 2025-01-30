"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from '@/components/footer/footer'
import Header from '@/components/header/Header'
import React from 'react'


const cservices = [
    { title: "Paid Advertising ", image: "/pa.jpg",description:"Organic growth takes time. Get high quality leads for your product with paid ads and outreach. Drive users to your website quickly with targeted ad campaigns." },
    { title: "Graphic Designing", image: "/gd.jpg",description:"The look and feel of your business defines it. Good visuals brand your product better and help the audience connect with it. We sort your graphics and brand you better." },
    { title: "Content Marketing ", image: "/cm.jpg", description: "Content is the king! It can voice you and your product. Give your brand a voice with content marketing. Our user specific content strategy will boost your business growth." },
    { title: "Social Media Marketing ", image: "/sm.jpg",description:"The boom of social media is real. But what's impactful is how it can help your business grow. Find an audience for your business with our planned social media strategy. " },
    { title: "Influencer Marketing", image: "/im.jpg",description:"Find the right face for your business with our strategic influencer marketing. We find the passionate social media faces for your product who can help you reach your audience!" },
    { title: "Email Marketing ", image: "/em.jpg",description:"Want to reach your customer's inbox and connect? Communicate your business with stunning newsletters and quick emailing. Build smooth customer relationships rapidly. " },
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
                   We’re not a Search Engine Optimization Company
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  We’re your SEO Marketing Agency 
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-6">
                   
          Search Engine Optimization is more than a necessity. It is a marketing strategy that can help your business grow. With SEO services and search engine marketing, you can get targeted results. As a strategic SEO agency in the UK, we ensure that your search results ranking helps you with more engaging users on your website.<br></br><br></br>
Finding the right traffic, increasing conversion, reducing bounce rates, and increasing your domain authority is all we focus on. With us, you do not simply rank; you market yourself through the medium of your website on various search engines.<br></br>
We club the SEO services with other digital marketing plans. This helps your business grow in different directions. Moreover, you get high quality leads and increased conversion. Our strategy has worked for all of your clients, and it can help you grow, too.

          
          </p>
                 
                  
                </motion.div>
                </section>
                <div className="py-12 bg-gray-100">
                  <h2 className="text-3xl md:text-5xl text-center pb-4 font-bold text-gray-800 mb-4">
                    Turn your business into a brand with Us!
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
                        <div className="absolute inset-0 bg-[#f76c6c] bg-opacity-80 p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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