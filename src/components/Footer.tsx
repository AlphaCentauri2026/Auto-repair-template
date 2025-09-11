import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-blue-400">
                Auto<span className="text-white">Repair</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional automotive repair services with over 20 years of experience.
              We provide reliable repairs, honest service, and certified technicians.
            </p>

            {/* Decorative Image */}
            <div className="relative w-full h-32 rounded-lg overflow-hidden opacity-80">
              <Image
                src="/images/auto-repair/auto-repair-3691962_1280.jpg"
                alt="Auto repair shop"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="text-blue-400 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Auto Street<br />
                    Mechanic City, MC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="text-gray-300">(555) 123-4567</p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="text-gray-300">info@autorepair.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-white mb-2">Hours</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Auto Repair. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.084.588c-.713.293-1.316.685-1.917 1.286A5.783 5.783 0 00.588 4.084C.302 4.775.12 5.584.067 6.79.014 7.996 0 8.396 0 12.017s.014 4.021.067 5.227c.053 1.206.235 2.015.521 2.706.293.713.685 1.316 1.286 1.917a5.783 5.783 0 002.228 1.518c.691.286 1.5.468 2.706.521C7.996 23.986 8.396 24 12.017 24s4.021-.014 5.227-.067c1.206-.053 2.015-.235 2.706-.521a5.783 5.783 0 002.228-1.518c.713-.293 1.316-.685 1.917-1.286a5.783 5.783 0 001.518-2.228c.286-.691.468-1.5.521-2.706.053-1.206.067-1.606.067-5.227s-.014-4.021-.067-5.227c-.053-1.206-.235-2.015-.521-2.706a5.783 5.783 0 00-1.518-2.228c-.293-.713-.685-1.316-1.286-1.917A5.783 5.783 0 0019.916.588c-.691-.286-1.5-.468-2.706-.521C16.038.014 15.638 0 12.017 0zm0 2.163c3.584 0 4.008.014 5.418.078 1.308.06 2.026.27 2.506.446.527.194.927.427 1.333.833.406.406.639.806.833 1.333.176.48.386 1.198.446 2.506.064 1.41.078 1.834.078 5.418s-.014 4.008-.078 5.418c-.06 1.308-.27 2.026-.446 2.506a3.53 3.53 0 01-.833 1.333c-.406.406-.806.639-1.333.833-.48.176-1.198.386-2.506.446-1.41.064-1.834.078-5.418.078s-4.008-.014-5.418-.078c-1.308-.06-2.026-.27-2.506-.446a3.53 3.53 0 01-1.333-.833c-.406-.406-.639-.806-.833-1.333-.176-.48-.386-1.198-.446-2.506C2.179 16.025 2.165 15.601 2.163 12.017s.014-4.008.078-5.418c.06-1.308.27-2.026.446-2.506a3.53 3.53 0 011.333-.833c.406-.406.806-.639 1.333-.833.48-.176 1.198-.386 2.506-.446C8.009 2.177 8.433 2.163 12.017 2.163zm0 3.772a6.082 6.082 0 100 12.164 6.082 6.082 0 000-12.164zm0 2.163a3.919 3.919 0 110 7.838 3.919 3.919 0 010-7.838zm6.406-2.973a1.427 1.427 0 11-2.854 0 1.427 1.427 0 012.854 0z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
