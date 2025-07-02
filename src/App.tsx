import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';
import Order from './components/Order';
import Contact from './components/Contact';
import { useCart } from './hooks/useCart';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showOrder, setShowOrder] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useCart();

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    setShowOrder(false);
  };

  const handleOrderSubmit = () => {
    setShowOrder(true);
    setCurrentSection('order');
  };

  const renderCurrentSection = () => {
    if (showOrder) {
      return (
        <Order 
          cartItems={cart.cartItems}
          totalPrice={cart.getTotalPrice()}
          onOrderComplete={() => {
            cart.clearCart();
            setShowOrder(false);
            setCurrentSection('home');
          }}
        />
      );
    }

    switch (currentSection) {
      case 'home':
        return <Home onSectionChange={handleSectionChange} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products onAddToCart={cart.addToCart} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        activeSection={currentSection}
        setActiveSection={handleSectionChange}
        cartItemsCount={cart.getTotalItems()}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        {renderCurrentSection()}
      </main>

      {cart.isCartOpen && (
        <Cart
          cartItems={cart.cartItems}
          onClose={() => cart.setIsCartOpen(false)}
          onUpdateQuantity={cart.updateQuantity}
          onRemoveFromCart={cart.removeFromCart}
          onCheckout={handleOrderSubmit}
          totalPrice={cart.getTotalPrice()}
        />
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-lime-600 p-2 rounded-lg mr-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-lime-600 font-bold text-lg">S</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Toko Sembako</h3>
                  <p className="text-sm text-gray-400">Kebutuhan Harian Terlengkap</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Melayani kebutuhan sembako keluarga dengan produk berkualitas dan harga terjangkau sejak 2010.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Senin - Minggu</p>
                <p>06:00 - 22:00 WIB</p>
                <p className="text-lime-400">Buka Setiap Hari</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Jl. Raya Sembako No. 123</p>
                <p>Jakarta Selatan, 12345</p>
                <p>Telp: (021) 555-0123</p>
                <p>WA: 08123456789</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Media Sosial</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="hover:text-lime-400 cursor-pointer">Facebook</p>
                <p className="hover:text-lime-400 cursor-pointer">Instagram</p>
                <p className="hover:text-lime-400 cursor-pointer">WhatsApp</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Toko Sembako. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;