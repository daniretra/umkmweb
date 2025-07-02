import React, { useState } from 'react';
import { CheckCircle, CreditCard, Truck, MapPin } from 'lucide-react';
import { CartItem, OrderForm } from '../types';

interface OrderProps {
  cartItems: CartItem[];
  clearCart: () => void;
  setActiveSection: (section: string) => void;
}

const Order: React.FC<OrderProps> = ({ cartItems, clearCart, setActiveSection }) => {
  const [formData, setFormData] = useState<OrderForm>({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cod',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<OrderForm>>({});

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

  const validateForm = (): boolean => {
    const newErrors: Partial<OrderForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon wajib diisi';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Format nomor telepon tidak valid';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Alamat lengkap wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Simulate order processing
    setTimeout(() => {
      setIsSubmitted(true);
      clearCart();
    }, 1000);
  };

  const handleInputChange = (field: keyof OrderForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (cartItems.length === 0 && !isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Keranjang Kosong</h2>
          <p className="text-gray-600 mb-8">Silakan tambahkan produk terlebih dahulu</p>
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

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="w-24 h-24 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pesanan Berhasil!</h2>
          <p className="text-gray-600 mb-6">
            Terima kasih atas pesanan Anda. Kami akan segera menghubungi Anda untuk konfirmasi.
          </p>
          <div className="bg-emerald-50 p-4 rounded-lg mb-6">
            <p className="text-emerald-800 font-semibold">Nomor Pesanan: #TB{Date.now()}</p>
          </div>
          <button
            onClick={() => setActiveSection('home')}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Formulir Pemesanan</h1>
        <p className="text-gray-600">Lengkapi data Anda untuk menyelesaikan pesanan</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Order Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Data Pemesan</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Masukkan nama lengkap"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Telepon *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="08xxxxxxxxxx"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alamat Lengkap *
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Masukkan alamat lengkap dengan RT/RW, Kelurahan, Kecamatan"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Metode Pembayaran
              </label>
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard className="w-5 h-5 text-emerald-600 mr-2" />
                  <span>Bayar di Tempat (COD)</span>
                </label>
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={formData.paymentMethod === 'transfer'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard className="w-5 h-5 text-emerald-600 mr-2" />
                  <span>Transfer Bank</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catatan Pesanan (Opsional)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Tambahkan catatan khusus untuk pesanan Anda"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              Konfirmasi Pesanan
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ringkasan Pesanan</h3>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 pb-3 border-b border-gray-200 last:border-b-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x {formatPrice(item.price)}
                    </p>
                  </div>
                  <span className="font-semibold text-gray-800">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-lg font-bold text-emerald-600">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg">
            <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
              <Truck className="w-5 h-5 mr-2" />
              Informasi Pengiriman
            </h4>
            <ul className="text-sm text-emerald-700 space-y-2">
              <li>• Pengiriman GRATIS untuk wilayah sekitar</li>
              <li>• Estimasi waktu tiba: 1-2 jam</li>
              <li>• Barang akan diantar langsung ke alamat Anda</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Area Layanan
            </h4>
            <p className="text-sm text-blue-700">
              Kami melayani pengiriman untuk wilayah Kecamatan Sukasari dan sekitarnya. 
              Hubungi kami jika Anda berada di luar area untuk konfirmasi pengiriman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;