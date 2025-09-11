import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 'engine',
      title: 'Engine Repair',
      image: '/images/auto-repair/toolbox-2645700_1280.jpg',
      description: 'Comprehensive engine diagnostics and repair services for all makes and models.',
      features: [
        'Complete engine diagnostics',
        'Timing belt replacement',
        'Oil system repairs',
        'Cooling system service',
        'Fuel system repairs',
        'Performance tuning'
      ],
      price: 'Starting at $149'
    },
    {
      id: 'tires',
      title: 'Tire Replacement',
      image: '/images/auto-repair/pexels-olly-3806249.jpg',
      description: 'Complete tire services including replacement, balancing, alignment, and rotation.',
      features: [
        'Tire replacement and mounting',
        'Wheel balancing and alignment',
        'Tire rotation service',
        'TPMS sensor replacement',
        'Flat tire repair',
        'Seasonal tire storage'
      ],
      price: 'Starting at $89'
    },
    {
      id: 'diagnostics',
      title: 'Diagnostics',
      image: '/images/auto-repair/pexels-maltelu-2244746.jpg',
      description: 'Advanced diagnostic services to quickly identify and resolve vehicle issues.',
      features: [
        'OBD-II diagnostics',
        'Check engine light diagnosis',
        'Electrical system testing',
        'Transmission diagnostics',
        'Brake system analysis',
        'Suspension inspection'
      ],
      price: 'Starting at $79'
    }
  ];

  const additionalServices = [
    {
      title: 'Brake Service',
      description: 'Complete brake system repair and maintenance.',
      icon: '🛑'
    },
    {
      title: 'Transmission Service',
      description: 'Automatic and manual transmission repair.',
      icon: '⚙️'
    },
    {
      title: 'AC & Heating',
      description: 'Climate control system repair and recharge.',
      icon: '❄️'
    },
    {
      title: 'Battery Service',
      description: 'Battery testing, replacement, and charging system repair.',
      icon: '🔋'
    },
    {
      title: 'Suspension Repair',
      description: 'Complete suspension system diagnosis and repair.',
      icon: '🔧'
    },
    {
      title: 'Exhaust System',
      description: 'Muffler, catalytic converter, and exhaust repair.',
      icon: '🚗'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Our <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Professional automotive repair services delivered by certified technicians with 20+ years of experience.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 pt-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our most popular automotive repair and maintenance services.
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={700}
                      height={500}
                      className="rounded-xl shadow-2xl animate-hover-lift"
                    />
                  </div>
                </div>

                <div className={`animate-slide-in-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  <p className="text-gray-600 text-xl mb-8 leading-relaxed">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-600">
                          <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-lg leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <div className="text-3xl font-bold text-blue-600">{service.price}</div>
                    <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We offer a comprehensive range of automotive repair services to meet all your vehicle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="card card-hover animate-fade-in bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-10 text-center">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  <Link href="/contact" className="btn-outline inline-block w-full">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Certified Technicians</h3>
                    <p className="text-gray-600">All work performed by ASE-certified professionals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden fees, upfront pricing on all services.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Lifetime Warranty</h3>
                    <p className="text-gray-600">All repairs backed by our comprehensive warranty.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Quick Turnaround</h3>
                    <p className="text-gray-600">Most repairs completed same day or next day.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <Image
                  src="/images/auto-repair/pexels-olly-3807329.jpg"
                  alt="Professional service"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A streamlined process to get your vehicle repaired quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Diagnosis</h3>
              <p className="text-gray-300">Thorough vehicle inspection and diagnostic testing.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Estimate</h3>
              <p className="text-gray-300">Detailed repair estimate with transparent pricing.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Repair</h3>
              <p className="text-gray-300">Professional repair work using quality parts.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-3">Quality Check</h3>
              <p className="text-gray-300">Final inspection and test drive before delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            Ready to Get Your Car Fixed?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Contact us today for a free diagnostic and repair estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Schedule Service
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
