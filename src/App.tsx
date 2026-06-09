import React from "react";
import { ShoppingCart, Search, User } from "lucide-react";

const App = () => {
  return (
    <div className="bg-wkeebs-light text-wkeebs-black min-h-screen font-sans">
      {/* Header */}
      <header className="border-b border-wkeebs-gray px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold tracking-tighter">WKEEBS</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-wkeebs-cream px-4 py-1 text-sm outline-none"
              />
            </div>
            <User size={20} />
            <ShoppingCart size={20} />
          </div>
        </div>
        <nav className="flex gap-8 text-sm uppercase font-medium">
          {["Keyboards", "Switches", "Keycaps", "Accessories", "On Sale"].map(
            (link) => (
              <a key={link} href="#" className="hover:text-wkeebs-gray">
                {link}
              </a>
            ),
          )}
        </nav>
      </header>

      {/* Hero Section - Inspired by image_366002.jpg */}
      <section className="p-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-wkeebs-cream p-10 flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-4">Mechanical Keyboards</h2>
          <button className="bg-wkeebs-black text-wkeebs-light px-6 py-2 w-max text-sm">
            Shop Keyboards
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-wkeebs-gray text-wkeebs-light p-6 h-1/2">
            Switches Guide
          </div>
          <div className="bg-wkeebs-dark text-wkeebs-light p-6 h-1/2">
            Keycap Sets
          </div>
        </div>
      </section>

      {/* Product Showcase Sections */}
      <section className="px-6 py-10">
        <h3 className="text-lg font-bold uppercase mb-6">Layouts</h3>
        <div className="grid grid-cols-6 gap-4">
          {["Full", "TKL", "75%", "65%", "60%", "Alice"].map((l) => (
            <div
              key={l}
              className="border border-wkeebs-gray p-6 text-center text-sm"
            >
              {l}
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="px-6 py-10 bg-wkeebs-dark text-wkeebs-light">
        <h3 className="text-lg font-bold mb-4">Finding Your Preference</h3>
        <p className="text-sm max-w-2xl leading-relaxed">
          Understanding keyboard feel involves balancing layout utility with
          switch acoustics. Linear switches offer smooth travel, while tactile
          switches provide a distinct bump. Acoustics range from the deep
          'thock' of gasket mounts to the high-pitched crispness of classic
          boards.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-wkeebs-gray text-sm">
        <div className="grid grid-cols-4 gap-8">
          <h2 className="font-bold">WKEEBS</h2>
          {["Shop", "Support", "Legal"].map((s) => (
            <div key={s} className="flex flex-col gap-2 uppercase">
              {s}
            </div>
          ))}
        </div>
        <div className="mt-10 pt-4 border-t border-wkeebs-gray text-xs text-center">
          &copy; 2026 wkeebs. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
