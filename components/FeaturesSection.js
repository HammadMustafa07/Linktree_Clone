export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
            Why Choose LinkHub?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create a professional link-in-bio page that stands out and drives results.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Feature 1 */}
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4 group-hover:text-blue-600 transition-colors duration-300">
                  Beautiful Templates
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Choose from dozens of professionally designed templates that match your style and brand. 
                Customize colors, fonts, and layouts to make your page truly unique.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4 group-hover:text-blue-600 transition-colors duration-300">
                  Advanced Analytics
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Track every click, view, and interaction. Understand your audience better with detailed 
                insights and make data-driven decisions to optimize your content.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4 group-hover:text-blue-600 transition-colors duration-300">
                  Secure & Reliable
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your data is protected with enterprise-grade security. 99.9% uptime guarantee ensures 
                your links are always accessible when your audience needs them.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4 group-hover:text-blue-600 transition-colors duration-300">
                  Lightning Setup
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Get your professional link page live in under 5 minutes. No coding required - 
                just add your links, customize your design, and share with the world.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 mb-20 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Trusted by thousands of creators
            </h3>
            <p className="text-gray-600">Join the community that&apos;s already making an impact</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center group cursor-default">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                15K+
              </div>
              <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Active Users
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                2M+
              </div>
              <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Monthly Clicks
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Uptime
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Support
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Create your professional link page today and start connecting with your audience in a whole new way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-md hover:scale-105 transition-all duration-300 transform">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}