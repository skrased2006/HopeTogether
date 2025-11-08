export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">HopeTogether</h3>
            <p className="text-gray-300">
              Dedicated to cancer awareness, support, and research funding.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Patient Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Caregiver Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Assistance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Counseling Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@hopetogether.org</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Hope Street, City, State</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2023 HopeTogether. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}