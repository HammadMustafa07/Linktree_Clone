import { Heart, Github, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-100 hover:text-white transition-colors duration-300 cursor-pointer">
                LinkTree Clone
              </h3>
            </div>
            <p className="text-purple-200 mb-6 max-w-md">
              Connect your audience to all your content with one simple link in bio. 
              Share everything you create, curate and sell from your Instagram, TikTok, Twitter and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-purple-700 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-purple-700 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-purple-700 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-purple-700 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Home</a></li>
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Features</a></li>
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Pricing</a></li>
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Templates</a></li>
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-100">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Help Center</a></li>
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Contact Us</a></li>
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Privacy Policy</a></li>
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Terms of Service</a></li>
              <li><a href="#" className="text-purple-300 hover:text-white transition-all duration-200 hover:translate-x-1">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-purple-700">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-purple-100">Stay Updated</h4>
              <p className="text-purple-300">Get the latest updates and features delivered to your inbox.</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-purple-800 border border-purple-700 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-purple-750 transition-all duration-300 hover:shadow-md"
              />
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-purple-950 bg-opacity-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center space-x-1 text-purple-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-pink-400 fill-current" />
              <span>by LinkTree Clone Team</span>
            </div>
            <div className="text-purple-300 text-sm">
              © 2025 LinkTree Clone. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}