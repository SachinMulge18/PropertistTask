import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Propertist</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="hidden sm:block">Find your dream home</span>
          <a
            href="mailto:hello@propfind.in"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}
