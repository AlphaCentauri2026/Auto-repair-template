'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John D.',
      rating: 5,
      review: 'Exceptional service! The team at Auto Repair diagnosed and fixed my car\'s engine issues quickly and professionally. They were honest about what needed to be done and the pricing was very fair. I highly recommend them!',
      service: 'Engine Repair',
      date: '2 weeks ago',
      avatar: 'JD'
    },
    {
      id: 2,
      name: 'Sarah M.',
      rating: 5,
      review: 'I\'ve been taking my car to Auto Repair for over 5 years now. They\'ve always been honest, reliable, and provide excellent service. The staff is knowledgeable and friendly. Best auto shop in town!',
      service: 'Regular Maintenance',
      date: '1 month ago',
      avatar: 'SM'
    },
    {
      id: 3,
      name: 'Mike R.',
      rating: 5,
      review: 'Needed emergency brake repair and Auto Repair had me back on the road the same day. Their emergency service is a lifesaver! Professional work and great communication throughout the process.',
      service: 'Brake Service',
      date: '3 weeks ago',
      avatar: 'MR'
    },
    {
      id: 4,
      name: 'Lisa K.',
      rating: 5,
      review: 'The team replaced all four tires and performed a complete alignment. They explained everything clearly and the work was done perfectly. Very satisfied with the quality and service!',
      service: 'Tire Replacement',
      date: '1 week ago',
      avatar: 'LK'
    },
    {
      id: 5,
      name: 'David P.',
      rating: 5,
      review: 'Outstanding diagnostic service. They found issues I didn\'t even know existed and saved me from potential breakdowns. The staff is incredibly knowledgeable and trustworthy.',
      service: 'Diagnostics',
      date: '2 months ago',
      avatar: 'DP'
    },
    {
      id: 6,
      name: 'Jennifer L.',
      rating: 5,
      review: 'From the moment I walked in, I felt welcomed and taken care of. They completed my transmission service ahead of schedule and everything works perfectly. Will definitely return!',
      service: 'Transmission Service',
      date: '6 weeks ago',
      avatar: 'JL'
    }
  ];

  const stats = [
    { label: 'Overall Rating', value: '4.9/5', icon: '⭐' },
    { label: 'Customer Reviews', value: '1,200+', icon: '💬' },
    { label: 'Years of Service', value: '20+', icon: '🏆' },
    { label: 'Satisfaction Rate', value: '98%', icon: '🎯' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Customer <span className="text-blue-400">Reviews</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            See what our satisfied customers have to say about our automotive services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Real reviews from real customers who trust us with their vehicles.
            </p>
          </div>

          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 animate-fade-in">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {testimonials[currentIndex].avatar}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    &ldquo;{testimonials[currentIndex].review}&rdquo;
                  </blockquote>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        Service: {testimonials[currentIndex].service}
                      </p>
                    </div>
                    <div className="text-gray-500 text-sm mt-2 md:mt-0">
                      {testimonials[currentIndex].date}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              More Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Additional feedback from our valued customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-lg font-bold text-white mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">&ldquo;{testimonial.review}&rdquo;</p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{testimonial.service}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Thousands
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Our commitment to excellence has earned us the trust and loyalty of thousands
                  of customers throughout our 20+ years in business. We take pride in every
                  repair we complete and every customer we serve.
                </p>
                <p>
                  Don&apos;t just take our word for it - read what our customers have to say about
                  their experience working with our team of certified technicians.
                </p>
                <p>
                  Every review represents a satisfied customer who received honest, reliable,
                  and professional automotive service from our dedicated team.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <Image
                  src="/images/auto-repair/pexels-renee-razumov-2155050841-33814732.jpg"
                  alt="Customer reviews"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            Ready to Experience Great Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of satisfied customers who trust us with their vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Schedule Service
            </a>
            <a href="/pricing" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
