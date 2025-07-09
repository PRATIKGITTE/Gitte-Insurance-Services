import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import gitte from '../src/gitte.png';

const Home = () => (
  <section className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to Gitte Services</h1>
    <p className="text-lg mb-6">Empowering India with trusted insurance and financial solutions backed by 30+ years of legacy.</p>
    <a
      href="https://wa.me/919860191711?text=Hello%20Gitte%20Services%2C%20I%20want%20to%20know%20about%20insurance%20plans."
      className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
    >
      Chat on WhatsApp
    </a>
  </section>
);

const About = () => (
  <section className="p-8">
    <h2 className="text-3xl font-semibold mb-4">About Us</h2>
    <p className="text-lg leading-relaxed">
      Gitte Services is a trusted name in the Indian insurance ecosystem, proudly continuing a 30+ year family legacy. Our founder Pratik Bhagwat Gitte and father Mr. Bhagwat Gitte are certified agents for ICICI Lombard, Bajaj Allianz, LIC, New India Assurance, Care Health, and more.
    </p>
  </section>
);

const Services = () => (
  <section className="p-8">
    <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {[
        { name: "Life Insurance", desc: "Secure your family’s future with our term & endowment plans." },
        { name: "Health Insurance", desc: "Cashless hospitalization from trusted health insurers." },
        { name: "Motor Insurance", desc: "Two-wheeler, car, and commercial vehicle coverage with instant policy issuance." },
        { name: "Travel Insurance", desc: "Stay protected wherever you go across the globe." },
        { name: "Personal Accident Cover", desc: "Financial security against unforeseen events." },
        { name: "Agent Onboarding", desc: "Become a POSP under Gitte Services and grow with us." },
      ].map((s, i) => (
        <div key={i} className="p-4 shadow rounded-xl bg-white border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section className="p-8">
    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
    <p className="mb-2">📞 <strong>Call / WhatsApp:</strong> <a href="tel:+919860191711">+91-9860191711</a></p>
    <p className="mb-4">🏠 <strong>Office:</strong> Keshav Nagar, Latur, Maharashtra</p>
    <a
      href="https://wa.me/919860191711?text=Hello%2C%20I%20need%20insurance%20help%20from%20Gitte%20Services."
      className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
    >
      Message Us on WhatsApp
    </a>
  </section>
);

const Header = () => (
  <header className="bg-blue-800 text-white p-4 shadow">
    <nav className="flex justify-between items-center max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold">Gitte Services</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  </header>
);

const App = () => (
  <Router>
    <Header />
    <main className="max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  </Router>
);

export default App;
