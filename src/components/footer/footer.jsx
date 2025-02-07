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
            <p>8:30AM - 6PM</p>
          </div>

          {/* Email Info */}
          <div>
            <p className="text-xl font-bold">info@glassfrogtech.co.uk</p>
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
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
            {/* <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-green-400">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-green-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-green-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-green-400">
                <i className="fab fa-twitter"></i>
              </a>
            </div> */}
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
