import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-lime-600" />,
      title: "Alamat Toko",
      details: [
        "Jl. Raya Sembako No. 123",
        "Jakarta Selatan, 12345",
        "Indonesia"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-lime-600" />,
      title: "Telepon & WhatsApp",
      details: [
        "Telepon: (021) 555-0123",
        "WhatsApp: 08123456789",
        "SMS: 08123456789"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-lime-600" />,
      title: "Jam Operasional",
      details: [
        "Senin - Minggu",
        "06:00 - 22:00 WIB",
        "Buka Setiap Hari"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-lime-600" />,
      title: "Email",
      details: [
        "info@tokosembako.com",
        "order@tokosembako.com",
        "support@tokosembako.com"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami siap membantu Anda! Hubungi kami melalui berbagai cara di bawah ini 
              atau kunjungi toko kami langsung.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
                <p className="text-gray-600">
                  Ada pertanyaan atau saran? Kirimkan pesan kepada kami dan kami akan merespons dengan cepat.
                </p>
              </div>

              {showSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <Send className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-green-800 font-semibold">
                      Pesan berhasil dikirim! Kami akan membalas dalam 24 jam.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek Pesan
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none"
                  >
                    <option value="">Pilih subjek pesan</option>
                    <option value="product">Pertanyaan Produk</option>
                    <option value="order">Bantuan Pemesanan</option>
                    <option value="delivery">Pengiriman</option>
                    <option value="complaint">Keluhan</option>
                    <option value="suggestion">Saran</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-lime-600 text-white py-3 rounded-lg hover:bg-lime-700 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Mengirim...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Store Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-lime-100 to-lime-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Lokasi Toko</h3>
                    <p className="text-gray-600">Jl. Raya Sembako No. 123</p>
                    <p className="text-gray-600">Jakarta Selatan, 12345</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kontak Cepat</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:021555123" 
                    className="flex items-center p-3 bg-lime-50 rounded-lg hover:bg-lime-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-lime-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Telepon</p>
                      <p className="text-sm text-gray-600">(021) 555-0123</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/628123456789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-sm text-gray-600">08123456789</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:info@tokosembako.com"
                    className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">info@tokosembako.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Store Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Jam Operasional</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Senin - Minggu</span>
                    <span className="font-semibold text-gray-900">06:00 - 22:00</span>
                  </div>
                  <div className="mt-4 p-3 bg-lime-50 rounded-lg">
                    <p className="text-sm text-lime-800">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Buka setiap hari termasuk hari libur nasional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-xl text-gray-600">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Apakah ada layanan antar?</h3>
              <p className="text-gray-600 text-sm">
                Ya, kami menyediakan layanan antar gratis untuk pembelian minimal Rp 100.000 dalam radius 5km dari toko.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Apakah bisa pesan via WhatsApp?</h3>
              <p className="text-gray-600 text-sm">
                Tentu! Anda bisa menghubungi kami di WhatsApp 08123456789 untuk pemesanan dan informasi produk.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Metode pembayaran apa saja yang tersedia?</h3>
              <p className="text-gray-600 text-sm">
                Kami menerima pembayaran tunai (COD), transfer bank, dan e-wallet seperti GoPay, OVO, dan DANA.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Bagaimana cara komplain produk?</h3>
              <p className="text-gray-600 text-sm">
                Anda bisa menghubungi kami langsung di toko, telepon, atau WhatsApp. Kami akan menangani komplain dengan cepat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;