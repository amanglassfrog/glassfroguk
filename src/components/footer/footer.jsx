import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Top Section */}
      <div className="bg-[#d00578] py-6">
        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Info */}
          <div>
            <p className="text-xl font-bold">+91 9084712335, +91 9084712325</p>
            <p>Monday to Friday:</p>
            <p>8:30AM - 6PM</p>
          </div>

          {/* Email Info */}
          <div>
            <p className="text-xl font-bold">support@glassfrog.design</p>
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
              <li>London</li>
              <li>
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
            <h4 className="font-bold mb-4">More Than SEO</h4>
            <p>
              Glassfrog Technologies works as a digital marketing and seo
              agency. We aim to match the requirements of your business in this
              age of digital marketing and artificial intelligence. Our
              extensive services in Social Media Marketing and Management,
              Search Engine Marketing, Paid Advertising, Content Marketing,
              Graphic Designing, Influencer Marketing, and Website Development
              will help you grow online.
            </p>
            <p>
              Contact us now to grow your business online with expert SEO and
              digital marketing in the UK.
            </p>
          </div>

          {/* Trust SEO Works */}
          <div>
            <h4 className="font-bold mb-4">Your SEO Expert</h4>
            <p>
              As a leading Search Engine Optimization company, we have helped
              our clients grow their business through their websites. We can
              help you rank on Search Engine Rank Pages. We understand your
              business to strategize and execute for you. We are eager to assist
              you as you seek to grow your business with advanced SEO services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
