import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  const pricingPackages = [
    {
      name: 'Basic Service',
      price: '$49.99',
      description: 'Essential maintenance for your vehicle',
      features: [
        'Oil change (up to 5 quarts)',
        'Oil filter replacement',
        'Basic vehicle inspection',
        'Tire pressure check',
        'Fluid level check',
        '30-day warranty'
      ],
      popular: false,
      icon: '🔧'
    },
    {
      name: 'Complete Maintenance',
      price: '$149.99',
      description: 'Comprehensive service package',
      features: [
        'Everything in Basic Service',
        'Air filter replacement',
        'Cabin air filter replacement',
        'Brake inspection',
        'Battery testing',
        '90-day warranty'
      ],
      popular: true,
      icon: '⚡'
    },
    {
      name: 'Premium Care',
      price: '$299.99',
      description: 'Full vehicle maintenance and care',
      features: [
        'Everything in Complete Maintenance',
        'Transmission service',
        'Cooling system service',
        'Fuel system cleaning',
        'Alignment check',
        '1-year warranty'
      ],
      popular: false,
      icon: '⭐'
    }
  ];

  const individualServices = [
    {
      name: 'Oil Change',
      price: '$39.99',
      description: 'Complete oil change with filter replacement'
    },
    {
      name: 'Brake Service',
      price: '$149.99',
      description: 'Brake pad and rotor replacement'
    },
    {
      name: 'Tire Rotation',
      price: '$29.99',
      description: 'Complete tire rotation service'
    },
    {
      name: 'Battery Replacement',
      price: '$129.99',
      description: 'New battery installation'
    },
    {
      name: 'Wheel Alignment',
      price: '$79.99',
      description: 'Four-wheel alignment service'
    },
    {
      name: 'AC Recharge',
      price: '$89.99',
      description: 'Air conditioning system recharge'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Transparent <span className="text-blue-400">Pricing</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Honest pricing with no hidden fees. Get the best value for your automotive repair needs.
          </p>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-24 pt-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Choose the perfect maintenance package for your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {pricingPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative ${pkg.popular ? 'overflow-visible' : ''} bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in ${
                  pkg.popular ? 'border-2 border-blue-500 transform scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 pt-12 text-center">
                  <div className="text-4xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <ul className="text-left space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className={`w-full block text-center ${
                    pkg.popular ? 'btn-primary' : 'btn-outline'
                  }`}>
                    Choose Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Individual Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Popular automotive services with transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((service, index) => (
              <div
                key={service.name}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-xl font-bold text-blue-600">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Book Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                No Hidden Fees
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  We believe in complete transparency when it comes to pricing. Every service includes
                  a detailed estimate with no surprise charges or hidden fees.
                </p>
                <p>
                  Our certified technicians will explain every aspect of the work needed and provide
                  you with multiple options to choose from, ensuring you get the best value for your money.
                </p>
                <p>
                  All repairs come with our comprehensive warranty, giving you peace of mind
                  and protection for your investment.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary mr-4">
                  Request Estimate
                </Link>
                <a href="tel:+15551234567" className="btn-secondary">
                  Call for Quote
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <Image
                  src="/images/auto-repair/pexels-renee-razumov-2155050841-33814686.jpg"
                  alt="Transparent pricing"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
              Our Warranty Guarantee
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              All our work is backed by comprehensive warranties for your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Parts Warranty</h3>
              <p className="text-gray-300">Up to 1 year warranty on all replacement parts and labor.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">30-Day Guarantee</h3>
              <p className="text-gray-300">If you&apos;re not satisfied within 30 days, we&apos;ll make it right at no cost.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-300">Emergency roadside assistance and technical support available anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            Get Your Free Estimate Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Contact us for a detailed, no-obligation repair estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Request Estimate
            </Link>
            <a href="tel:+15551234567" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
