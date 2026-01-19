import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-24">
    

      {/* ================= 1. Hero Section ================= */}
      <section className="min-h-[85vh] bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Timeless Luxury Watches
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover premium watches crafted with precision, elegance,
            and modern design.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/products"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
            >
              Shop Watches
            </Link>
            <Link
              href="/login"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 2. Brand Promise ================= */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Crafted for Perfection
        </h2>
        <p className="text-gray-600 text-lg">
          Our watches combine luxury materials, advanced technology,
          and timeless aesthetics to deliver unmatched quality.
        </p>
      </section>

      {/* ================= 3. Featured Collections ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Collections
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Classic Watches</h3>
              <p className="text-gray-600">
                Elegant designs inspired by timeless traditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Sport Watches</h3>
              <p className="text-gray-600">
                Built for performance, durability, and precision.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Smart Luxury</h3>
              <p className="text-gray-600">
                Smart features blended with luxury craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. Why Choose Us ================= */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Our Watches
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p className="text-gray-600">Only top-grade materials used</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Water Resistant</h3>
            <p className="text-gray-600">Designed for everyday use</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">2 Year Warranty</h3>
            <p className="text-gray-600">Peace of mind guaranteed</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick & secure shipping</p>
          </div>
        </div>
      </section>

      {/* ================= 5. Best Sellers ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Best Selling Watches
          </h2>
          <p className="text-gray-600">
            Explore our most popular watches loved by customers.
          </p>
        </div>
      </section>

      {/* ================= 6. Call To Action ================= */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Elevate Your Style Today
        </h2>
        <p className="text-gray-600 mb-8">
          Browse our exclusive collection and find the perfect watch for you.
        </p>
        <Link
          href="/products"
          className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800"
        >
          Explore Collection
        </Link>
      </section>

      {/* ================= 7. Trust / Footer Intro ================= */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Trusted by Watch Lovers Worldwide
        </h2>
        <p className="text-gray-400">
          Premium Watch Store | SCIC Assignment | Developed by M.H. Rumi
        </p>
      </section>

    </main>
  );
}
