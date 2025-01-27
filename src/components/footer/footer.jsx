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
            <p className="text-xl font-bold">0800 292 2410</p>
            <p>Monday to Friday:</p>
            <p>8:30AM - 6PM</p>
          </div>

          {/* Email Info */}
          <div>
            <p className="text-xl font-bold">info@seoworks.co.uk</p>
            <p>Our expert SEO team will reply as soon as possible.</p>
          </div>

          {/* Request Info */}
          <div>
            <p className="text-xl font-bold">Request a free quote</p>
            <p>Let's discuss how to make your website visible online.</p>
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
              <li>Sheffield</li>
              <li>Leeds</li>
              <li>Manchester</li>
              <li>Birmingham</li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
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
            </div>
          </div>

          {/* More Than SEO */}
          <div>
            <h4 className="font-bold mb-4">More Than SEO</h4>
            <p>
              The SEO Works is far more than an SEO Company. We have a
              passionate team of online marketing experts delivering{" "}
              <span className="text-green-400">award-winning PPC services</span>{" "}
              and <span className="text-green-400">Web Design</span> year on
              year.
            </p>
            <p>
              We offer fully bespoke{" "}
              <span className="text-green-400">digital marketing services</span>{" "}
              designed to get your business more customers online.
            </p>
          </div>

          {/* Trust SEO Works */}
          <div>
            <h4 className="font-bold mb-4">Trust SEO Works</h4>
            <p>
              We are proud of our reputation as a{" "}
              <span className="text-green-400">leading UK SEO Agency</span>,
              earned through high-quality campaigns and strong client
              relationships.
            </p>
            <p>
              We are the preferred choice for{" "}
              <span className="text-green-400">SEO services</span> of leading
              companies in public & private sectors. View our{" "}
              <a href="#" className="text-green-400 hover:underline">
                Digital Marketing Case Studies
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
