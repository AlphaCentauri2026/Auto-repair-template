import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            About <span className="text-blue-400">Auto Repair</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your trusted automotive partner for over 20 years, providing exceptional service and honest repairs.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Founded in 2004, Auto Repair began as a small family-owned business with a simple mission:
                  to provide honest, reliable automotive repair services that customers could trust.
                </p>
                <p>
                  What started as a single-bay garage has grown into a full-service automotive center,
                  but our core values remain the same. We believe in transparency, quality workmanship,
                  and treating every customer like family.
                </p>
                <p>
                  Over the years, we&apos;ve built our reputation on delivering exceptional service,
                  using only the highest quality parts, and maintaining open communication with our customers
                  throughout every repair process.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <Image
                  src="/images/auto-repair/pexels-cottonbro-4480505.jpg"
                  alt="Auto repair shop interior"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Certified Technicians</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We maintain the highest industry standards and certifications to ensure quality service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover animate-slide-in-left">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ASE Certified</h3>
                <p className="text-gray-600">
                  All our technicians are ASE (Automotive Service Excellence) certified,
                  ensuring the highest standards of automotive repair.
                </p>
              </div>
            </div>

            <div className="card card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">BBB Accredited</h3>
                <p className="text-gray-600">
                  Better Business Bureau accredited business with an A+ rating,
                  demonstrating our commitment to customer satisfaction.
                </p>
              </div>
            </div>

            <div className="card card-hover animate-slide-in-right">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">State Licensed</h3>
                <p className="text-gray-600">
                  Fully licensed and insured automotive repair facility,
                  meeting all state and local requirements for professional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our experienced team of certified technicians is dedicated to providing exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover animate-slide-in-left">
              <div className="p-8 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/images/auto-repair/pexels-olly-3807277.jpg"
                    alt="John Doe"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                <p className="text-blue-600 font-medium mb-3">Master Technician</p>
                <p className="text-gray-600 text-sm">
                  15+ years of experience specializing in engine repair and diagnostics.
                  ASE Master Certified with expertise in European and Asian vehicles.
                </p>
              </div>
            </div>

            <div className="card card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-8 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/images/auto-repair/pexels-olly-3807277.jpg"
                    alt="Mike Smith"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Smith</h3>
                <p className="text-blue-600 font-medium mb-3">Service Manager</p>
                <p className="text-gray-600 text-sm">
                  Oversees all service operations and ensures customer satisfaction.
                  Expert in customer relations and service coordination.
                </p>
              </div>
            </div>

            <div className="card card-hover animate-slide-in-right">
              <div className="p-8 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/images/auto-repair/pexels-olly-3807277.jpg"
                    alt="Sarah Johnson"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-blue-600 font-medium mb-3">Parts Specialist</p>
                <p className="text-gray-600 text-sm">
                  Manages parts inventory and procurement. Ensures we use only
                  high-quality OEM and aftermarket parts for all repairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              The principles that guide everything we do and how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Honesty</h3>
              <p className="text-gray-600 text-sm">
                We believe in transparent communication and honest recommendations.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We use only the best parts and employ certified technicians.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                We support our local community and build lasting relationships.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600 text-sm">
                You can count on us to deliver on time and as promised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of satisfied customers who trust us with their automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
              Get Started Today
            </Link>
            <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
