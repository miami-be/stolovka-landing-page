import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Clock, CreditCard } from "lucide-react";

interface HeroSectionProps {
  onGetStarted?: () => void;
}

const HeroSection = ({ onGetStarted = () => {} }: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[800px] bg-gradient-to-b from-white via-blue-50 to-blue-200 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-green-300/50 blur-3xl animate-pulse-slow"></div>
        <div className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-blue-300/60 blur-3xl animate-float"></div>
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 rounded-full bg-purple-300/50 blur-3xl animate-pulse-slow delay-700"></div>
        <div className="absolute left-1/3 bottom-1/3 w-48 h-48 rounded-full bg-yellow-300/40 blur-3xl animate-float delay-1000"></div>

        {/* Subtle food-related graphics */}
        <div className="absolute top-20 left-10 opacity-5">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-5">
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Revolutionize Your School Cafeteria
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stolovka streamlines cafeteria management for parents,
            administrators, and owners with our all-in-one platform.
          </motion.p>
        </div>

        {/* Split screen interfaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Parent Interface */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
              <h3 className="text-xl font-semibold mb-2">For Parents</h3>
              <p className="text-blue-100">
                Track your child's spending and meals
              </p>
            </div>
            <div className="p-6">
              <div className="mb-6 h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                <CreditCard size={64} className="text-blue-500 opacity-70" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1"></div>
                  <p className="ml-3 text-gray-700">
                    Real-time spending tracking
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1"></div>
                  <p className="ml-3 text-gray-700">
                    Set spending limits and alerts
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1"></div>
                  <p className="ml-3 text-gray-700">
                    View meal history and nutrition
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Administrator Interface */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-6 bg-gradient-to-r from-green-600 to-green-400 text-white">
              <h3 className="text-xl font-semibold mb-2">For Administrators</h3>
              <p className="text-green-100">Process orders 30% faster</p>
            </div>
            <div className="p-6">
              <div className="mb-6 h-40 bg-green-50 rounded-lg flex items-center justify-center">
                <Clock size={64} className="text-green-500 opacity-70" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <p className="ml-3 text-gray-700">
                    Streamlined order processing
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <p className="ml-3 text-gray-700">
                    Automated inventory management
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <p className="ml-3 text-gray-700">
                    Simplified reporting tools
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Owner Interface */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-400 text-white">
              <h3 className="text-xl font-semibold mb-2">For Owners</h3>
              <p className="text-purple-100">Detailed analytics and insights</p>
            </div>
            <div className="p-6">
              <div className="mb-6 h-40 bg-purple-50 rounded-lg flex items-center justify-center">
                <BarChart3 size={64} className="text-purple-500 opacity-70" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-500 mt-1"></div>
                  <p className="ml-3 text-gray-700">
                    Comprehensive sales analytics
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-500 mt-1"></div>
                  <p className="ml-3 text-gray-700">
                    Trend identification and forecasting
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-500 mt-1"></div>
                  <p className="ml-3 text-gray-700">
                    Profitability and performance metrics
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            onClick={onGetStarted}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 animate-bounce-subtle" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
