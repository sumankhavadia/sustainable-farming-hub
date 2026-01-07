import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      {/* Navbar */}
      <nav className="p-4 bg-green-700 text-white flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">🌿 Sustainable Farming Hub</h1>
        <div>
          <Link to="/features" className="mx-4 hover:underline">Features</Link>
          <Link to="/login" className="mx-4 hover:underline">Login</Link>
          <Link to="/signup" className="bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition">Signup</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-green-100">
        <h2 className="text-4xl font-bold">Smart Farming, Smarter Future</h2>
        <p className="text-lg mt-4">🚜 AI-powered insights for sustainable farms</p>
        <Link to="/Signup" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section className="p-10 text-center">
        <h3 className="text-2xl font-bold">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">✅ Monitor Soil Health</div>
          <div className="p-6 bg-white shadow-lg rounded-lg">✅ Predict Crop Yield</div>
          <div className="p-6 bg-white shadow-lg rounded-lg">✅ Optimize Water Usage</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-10 bg-green-100 text-center">
        <h3 className="text-2xl font-bold">How It Works?</h3>
        <p className="mt-4">1️⃣ Sign Up → 2️⃣ Add Farm Data → 3️⃣ Get AI-Powered Insights</p>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-green-700 text-white text-center mt-10">
        📧 Contact Us | 🌍 Follow Us on Social Media
      </footer>
    </div>
  );
};

export default Home;
