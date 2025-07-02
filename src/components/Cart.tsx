import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  setActiveSection: (section: string) => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  updateQuantity,
  removeFromCart,
  setActiveSection
}) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Keranjang Belanja Kosong</h2>
          <p className="text-gray-600 mb-8">Belum ada produk yang ditambahkan ke keranjang</p>
          <button
            onClick={() => setActiveSection('products')}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Mulai Belanja
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Keranjang Belanja</h1>
        <p className="text-gray-600">Review produk yang akan Anda beli</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-emerald-600 font-bold">
                      {formatPrice(item.price)}
                    </span>
                    <span className="text-gray-500 text-sm">{item.unit}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[50px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-lg font-bold text-gray-800">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ringkasan Pesanan</h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ongkir</span>
              <span className="font-semibold text-emerald-600">Gratis</span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-lg font-bold text-emerald-600">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => setActiveSection('order')}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              Lanjutkan Pemesanan
            </button>
            <button
              onClick={() => setActiveSection('products')}
              className="w-full border border-emerald-600 text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold"
            >
              Lanjut Belanja
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;