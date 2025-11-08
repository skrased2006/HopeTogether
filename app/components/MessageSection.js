'use client';

export default function MessageSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            Our Mission & Vision
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Cancer Awareness
            </span>
            <br />
            <span className="text-gray-800">& Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering individuals and families affected by cancer through comprehensive education, 
            vital resources, and a compassionate community that stands with you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Main Message Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                You Are Not Alone in This Journey
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Every day, thousands of brave individuals face the challenge of a cancer diagnosis. 
                    At <span className="font-semibold text-purple-600">HopeTogether</span>, we firmly believe that no one should face this journey alone.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We provide a nurturing, supportive community where patients, survivors, and caregivers 
                    can connect authentically, share experiences, and find strength in unity.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Through our comprehensive awareness campaigns, we're committed to educating the public 
                    about prevention strategies, early detection methods, and the life-saving importance of regular screenings.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Together, we're creating meaningful change in the fight against cancer. Join our movement 
                    to support groundbreaking research, advocate for patient rights, and spread unwavering hope.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '15+', label: 'Years of Service' },
                { number: '50K+', label: 'Lives Touched' },
                { number: '100+', label: 'Partnerships' },
                { number: '24/7', label: 'Support Line' }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.postimg.cc/kXVtGHHJ/Getty-Images-2032424112-f85f5087e7a54472b06b1d7bef48fb4b.jpg" 
                alt="Support Group Community" 
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Testimonial */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-purple-600">Breast Cancer Survivor</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">
                  "This community gave me strength when I needed it most. Together, we're not just surviving - we're thriving."
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of compassionate individuals working together to create a cancer-free world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Join Our Community
              </a>
              <a 
                href="#resources" 
                className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Resources
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}