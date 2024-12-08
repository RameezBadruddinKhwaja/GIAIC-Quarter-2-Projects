export default function Footer() {
    return (
      <footer className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hekto</h3>
              <p className="text-purple-200">
                Your one-stop destination for modern furniture and home decor.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Living Room
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Bedroom
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Kitchen
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Office
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded bg-purple-600 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-600 text-center">
            <p className="text-purple-200">
              © {new Date().getFullYear()} Hekto. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }