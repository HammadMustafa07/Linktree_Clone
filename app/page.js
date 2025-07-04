"use client";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
        {/* <Navbar /> */}
        <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mt-20 text-center">
            {/* Logo/Brand */}
            <div className="mb-12">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white transition-transform duration-300 hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300 cursor-default">
                LinkHub
              </h1>
              <p className="text-xl sm:text-2xl text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">
                Your Digital Identity, Simplified
              </p>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
                Create a beautiful, personalized page that houses all your
                important links. Share your digital presence with one simple
                link.
              </p>
              <p className="text-gray-600 text-base sm:text-lg">
                Perfect for creators, professionals, and anyone who wants to
                centralize their online presence.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-lg hover:bg-gray-50">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 group-hover:shadow-lg transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-gray-900 text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Set up your link page in minutes, not hours.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-lg hover:bg-gray-50">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 group-hover:shadow-lg transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-gray-900 text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Mobile Ready
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Perfect experience on any device, anywhere.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-lg hover:bg-gray-50">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 group-hover:shadow-lg transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-gray-900 text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Analytics
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Track your clicks and understand your audience.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
                  Get Started Free
                </button>
                <button className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-md hover:scale-105 transition-all duration-300 transform">
                  View Demo
                </button>
              </div>

              <p className="text-gray-500 text-sm">
                No credit card required • Free forever plan available
              </p>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm mb-6 hover:text-gray-700 transition-colors duration-300">
                Trusted by creators worldwide
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}
      <FeaturesSection/>
      <Footer />
    </>
  );
}
