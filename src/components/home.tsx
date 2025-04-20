import React from "react";
import HeroSection from "./HeroSection";
import FeatureCards from "./FeatureCards";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Stolovka</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
        <a
          href="#get-started"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Get Started
        </a>
      </header>

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="features" className="py-20 bg-gray-50">
          <FeatureCards />
        </section>

        <section id="testimonials" className="py-20">
          <TestimonialSection />
        </section>

        <section id="get-started" className="py-20 bg-gray-50">
          <CTASection />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Stolovka</h3>
              <p className="text-gray-400">
                Revolutionizing school cafeteria management with modern
                solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Parents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Administrators
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For School Owners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Stolovka. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomePage;
