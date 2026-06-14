import React from "react";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

// Data
const products = [
  { id: 1, name: "WK65 Wireless", price: 129, type: "65% Layout" },
  { id: 2, name: "WK TKL Pro", price: 159, type: "TKL Layout" },
  { id: 3, name: "WK Alice", price: 189, type: "Ergonomic" },
  { id: 4, name: "WK NumPad", price: 79, type: "Peripheral" },
];

export default function App() {
  return (
    <div className="max-w-6xl mx-auto px-6 font-sans text-gray-900">
      <Navbar />
      <Cart />

      {/* 1. Hero */}
      <header className="py-24 text-center">
        <h2 className="text-6xl font-bold mb-6 tracking-tight">
          Precision typing.
        </h2>
        <p className="text-xl text-gray-500 max-w-lg mx-auto mb-10">
          Premium mechanical builds designed for performance and longevity.
        </p>
        <button className="bg-black text-white px-8 py-3 hover:bg-gray-800">
          Shop Collection
        </button>
      </header>

      {/* 2. Features */}
      <section className="py-20 grid grid-cols-3 gap-12 border-t border-gray-100">
        {[
          {
            title: "Hot-swappable",
            desc: "Change switches without soldering.",
          },
          { title: "CNC Aluminum", desc: "Aviation-grade chassis build." },
          { title: "Tri-Mode", desc: "Bluetooth, 2.4GHz, and Wired." },
        ].map((f, i) => (
          <div key={i}>
            <h4 className="font-bold mb-2">{f.title}</h4>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* 3. Shop */}
      <section id="shop" className="py-20">
        <h3 className="text-2xl font-bold mb-10">Available Models</h3>
        <div className="grid grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="h-64 bg-gray-100 mb-4 transition-transform group-hover:scale-[1.02]" />
              <h4 className="font-medium">{p.name}</h4>
              <p className="text-sm text-gray-400 mb-2">{p.type}</p>
              <span className="font-bold">${p.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Specifications */}
      <section id="specs" className="py-20 bg-gray-50 px-10">
        <h3 className="text-2xl font-bold mb-8">Technical Specifications</h3>
        <table className="w-full text-sm text-left">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <th className="py-4">Connectivity</th>
              <td className="py-4 text-gray-600">BT 5.0, 2.4GHz, USB-C</td>
            </tr>
            <tr>
              <th className="py-4">Battery</th>
              <td className="py-4 text-gray-600">4000mAh (up to 200 hours)</td>
            </tr>
            <tr>
              <th className="py-4">Mounting</th>
              <td className="py-4 text-gray-600">Gasket Mount</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 5. About */}
      <section id="about" className="py-20 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Our Philosophy</h3>
        <p className="text-gray-600 leading-relaxed">
          We believe hardware should be transparent, modular, and built to last.
          By stripping away unnecessary branding and complexity, we focus purely
          on the tactile experience of every keystroke.
        </p>
      </section>

      {/* 6. Footer */}
      <footer className="py-12 border-t text-center text-xs text-gray-400 uppercase tracking-widest">
        <div className="mb-4 space-x-4">
          <a href="#">Support</a>
          <a href="#">Shipping</a>
          <a href="#">Contact</a>
        </div>
        © 2026 WKEEBS INC.
      </footer>
    </div>
  );
}
