import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
            style={{
              backgroundImage: 'url(/images/auto-repair/auto-repair-shop-1954636_1280.jpg)',
              animation: 'slowZoom 20s ease-in-out infinite alternate'
            }}
          />
          {/* Multi-layered gradient overlay for professional depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-800/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/70"></div>
        </div>

        {/* Floating geometric shapes for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-cyan-400/10 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by 15,000+ Customers
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 animate-fade-in-up leading-tight">
            Reliable <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text animate-pulse-glow">Repairs</span>
            <br />
            <span className="text-slate-200">Honest Service</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 animate-fade-in-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Professional automotive services delivered by ASE-certified technicians with 20+ years of experience.
            <span className="block mt-2 text-blue-400 font-semibold">Quality you can trust, service you deserve.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact" className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <span className="relative z-10 flex items-center justify-center">
                Get Free Estimate
                <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/contact" className="group bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/30">
              Book Appointment
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center text-slate-400 text-sm">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ASE Certified
            </div>
            <div className="flex items-center text-slate-400 text-sm">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9/5 Rating
            </div>
            <div className="flex items-center text-slate-400 text-sm">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24/7 Support
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-slate-400 text-xs mb-2 animate-pulse">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-100/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6 animate-fade-in">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Professional Automotive Services
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 animate-fade-in">
              Our <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Comprehensive automotive repair services delivered by certified technicians to keep your vehicle running smoothly and safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border border-slate-200 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(/images/auto-repair/toolbox-2645700_1280.jpg)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                {/* Service badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Engine Specialist
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-semibold">Expert Service</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Engine Repair
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Expert engine diagnostics and repair services for all makes and models. From routine maintenance to major overhauls.
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">Starting at $149</span>
                  <Link href="/services" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border border-slate-200 overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(/images/auto-repair/pexels-olly-3806249.jpg)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                {/* Service badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Tire Expert
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Complete Care</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Tire Replacement
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Complete tire services including replacement, balancing, alignment, and rotation. Keep your vehicle safe and efficient.
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">Starting at $89</span>
                  <Link href="/services" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border border-slate-200 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(/images/auto-repair/pexels-maltelu-2244746.jpg)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                {/* Service badge */}
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Tech Specialist
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="font-semibold">Advanced Tech</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Diagnostics
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Advanced diagnostic services using state-of-the-art equipment to identify and resolve vehicle issues quickly and accurately.
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">Starting at $79</span>
                  <Link href="/services" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link href="/services" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <span>View All Services</span>
              <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
        <div className="absolute top-32 right-16 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-64 h-64 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6 animate-fade-in">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Why Choose Us
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 animate-fade-in">
              Experience the <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">Difference</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Discover why thousands of customers trust us with their vehicles. Quality service, certified technicians, and honest pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 transform transition-all duration-300 group-hover:translate-x-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">ASE Certified Technicians</h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      Our team consists of highly trained, ASE-certified mechanics with decades of combined experience in automotive repair and maintenance.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-green-50 to-green-100/50 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 transform transition-all duration-300 group-hover:translate-x-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Transparent Pricing</h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      No hidden fees or surprise charges. We provide upfront pricing with detailed estimates before any work begins.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-2xl border border-purple-200/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 transform transition-all duration-300 group-hover:translate-x-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Lightning Fast Service</h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      Most repairs completed same-day or next-day. Emergency services available 24/7 for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-slate-200">
                  <div
                    className="relative h-96 bg-cover bg-center transform transition-all duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: 'url(/images/auto-repair/auto-repair-3691962_1280.jpg)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                  {/* Content overlay */}
                  <div className="absolute bottom-8 left-8 right-8 text-white transform transition-all duration-500 group-hover:translate-y-[-4px]">
                    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-2xl font-bold mb-3">State-of-the-Art Facility</h3>
                      <p className="text-slate-200 leading-relaxed mb-4">
                        Our modern workshop is equipped with the latest diagnostic tools and equipment to ensure your vehicle receives the best possible care.
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Modern Equipment
                        </div>
                        <div className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          24/7 Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-10 animate-slow-pan"
            style={{
              backgroundImage: 'url(/images/auto-repair/about.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              animation: 'slowPan 40s ease-in-out infinite'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/70"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-16 left-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-32 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/10 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '6s' }}></div>

        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Ready to Experience Excellence?
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in leading-tight">
              Get Your Car Fixed by <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text animate-pulse-glow">Experts</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 mb-10 animate-fade-in max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Join thousands of satisfied customers. Contact us today for a <span className="text-blue-400 font-semibold">free estimate</span>
              and experience the difference professional automotive service makes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact" className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 min-w-[200px]">
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                Get Free Estimate
                <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <a href="tel:+15551234567" className="group bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20 backdrop-blur-sm min-w-[200px]">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (555) 123-4567
              </span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
              <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Diagnostics
            </div>
            <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
              <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9/5 Customer Rating
            </div>
            <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
              <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Same Day Service
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
