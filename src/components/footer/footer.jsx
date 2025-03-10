import { motion } from "framer-motion";
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Top Section */}
      <div className="bg-[#f76c6c] py-6">
        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Info */}
          <div>
            {/* <p className="text-xl font-bold">+91 9084712335, +91 9084712325</p> */}
            <p>Monday to Friday:</p>
            <p>8:30AM - 6:00PM</p>
          </div>

          {/* Email Info */}
          <div>
            <p className="text-xl font-bold">inquiry@glassfrogtech.co.uk</p>
            <p>
              Write to us to get your website audit and SEO consultation now!{" "}
            </p>
          </div>

          {/* Request Info */}
          <div>
            <p className="text-xl font-bold">Request a free quote</p>
            <p>Let's connect and make your website visible.</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#060f3c] py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Get in Touch */}
          <div>
            <h4 className="font-bold mb-4">Get in touch</h4>
            <ul>
              <li>
                <strong>London :-</strong>
                ​27 OLD Gloucester Street, London,<br></br> United Kingdom WC1N
                3AX
              </li>
            </ul>
            {/* Social Icons */}
          </div>
          <div className="flex   flex-col">
            <h4 className="font-bold mb-4">SEO(Search Engine Optimization) </h4>
            <a
              href="/seo-greater-manchester"
              className="text-white hover:text-green-400"
            >
              SEO Manchester
            </a>
            <a
              href="/seo-in-edinburgh"
              className="text-white hover:text-green-400"
            >
              SEO Edinburgh
            </a>
            <a href="/seo-in-leeds" className="text-white hover:text-green-400">
              SEO Leeds
            </a>
            <a
              href="/seo-in-birmingham"
              className="text-white hover:text-green-400"
            >
              SEO Birmingham
            </a>
            <a
              href="/seo-in-glasgow"
              className="text-white hover:text-green-400"
            >
              SEO Glasgow
            </a>
            <a
              href="/seo-in-bristol"
              className="text-white hover:text-green-400"
            >
              SEO Bristol
            </a>
            <a
              href="/seo-in-southampton"
              className="text-white hover:text-green-400"
            >
              SEO Southampton
            </a>
          </div>
          {/* More Than SEO */}
          <div>
            <h4 className="font-bold mb-4">Our Vision</h4>
            <p>
              Our vision as an{" "}
              <a href="https://www.glassfrogtech.co.uk/">SEO agency </a> and
              digital marketing company is simple. We want to brand your
              business. We use our experience and expertise to help you grow and
              find your audience better and quicker. Our aim is to put you on
              the digital map and get your increased leads and sales.
            </p>
            <p>
              Contact us now and grow your business with expert SEO and digital
              marketing in the UK.
            </p>
          </div>

          {/* Trust SEO Works */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex  space-x-12">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/glassfrog-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FiLinkedin size={30} />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/glassfrog_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FiInstagram size={30} />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/GlassfrogTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FiFacebook size={30} />
              </a>
              {/* Twitter */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
