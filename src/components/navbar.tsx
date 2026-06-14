const Navbar = () => (
  <nav className="fixed w-3/4 top-0 left-1/2 -translate-x-1/2 flex justify-between items-center py-6 border-b border-gray-100 bg-white z-10">
    <h1 className="text-xl font-bold tracking-tighter">WKEEBS</h1>
    <div className="space-x-8 text-sm uppercase tracking-widest text-gray-500">
      <a href="#about" className="hover:text-black">
        About
      </a>
      <a href="#shop" className="hover:text-black">
        Shop
      </a>
      <a href="#specs" className="hover:text-black">
        Specs
      </a>
      <a href="#cart" className="hover:text-black">
        Cart (1)
      </a>
    </div>
  </nav>
);

export default Navbar;
