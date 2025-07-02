import React from 'react';
import { Clock, Shield, Truck, Star, ArrowRight } from 'lucide-react';

interface HomeProps {
  onSectionChange: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-lime-600" />,
      title: "Buka Setiap Hari",
      description: "Melayani Anda 7 hari dalam seminggu dari jam 06:00 - 22:00"
    },
    {
      icon: <Shield className="w-8 h-8 text-lime-600" />,
      title: "Produk Berkualitas",
      description: "Semua produk dijamin fresh dan berkualitas tinggi"
    },
    {
      icon: <Truck className="w-8 h-8 text-lime-600" />,
      title: "Antar Gratis",
      description: "Gratis ongkos kirim untuk pembelian minimal Rp 100.000"
    },
    {
      icon: <Star className="w-8 h-8 text-lime-600" />,
      title: "Harga Terjangkau",
      description: "Harga kompetitif dan terjangkau untuk semua kalangan"
    }
  ];

  const promoProducts = [
    {
      name: "Paket Hemat Keluarga",
      description: "Beras 5kg + Minyak 2L + Gula 1kg",
      originalPrice: 107000,
      discountPrice: 95000,
      image: "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Paket Bumbu Lengkap",
      description: "Garam + Kecap + Tepung Terigu",
      originalPrice: 24000,
      discountPrice: 20000,
      image: "https://images.pexels.com/photos/4226901/pexels-photo-4226901.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lime-600 to-lime-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Toko Sembako
                <span className="block text-2xl md:text-3xl font-normal mt-2">
                  Kebutuhan Harian Terlengkap
                </span>
              </h1>
              <p className="text-xl mb-8 text-lime-100">
                Melayani kebutuhan sembako keluarga dengan produk berkualitas dan harga terjangkau. 
                Dipercaya masyarakat sejak 2010.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onSectionChange('products')}
                  className="bg-white text-lime-600 px-8 py-3 rounded-lg font-semibold hover:bg-lime-50 transition-colors flex items-center justify-center"
                >
                  Lihat Produk
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button 
                  onClick={() => onSectionChange('contact')}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-lime-600 transition-colors"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Toko Sembako"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-lime-600 p-2 rounded-full">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">13+ Tahun</p>
                    <p className="text-sm text-gray-600">Melayani Masyarakat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan pelayanan terbaik dengan produk berkualitas 
              dan harga yang kompetitif untuk kebutuhan sehari-hari Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Promo Spesial Hari Ini
            </h2>
            <p className="text-xl text-gray-600">
              Dapatkan penawaran terbaik untuk paket hemat keluarga
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {promoProducts.map((promo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={promo.image} 
                    alt={promo.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    PROMO
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.name}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 line-through text-sm">
                        Rp {promo.originalPrice.toLocaleString('id-ID')}
                      </span>
                      <span className="text-2xl font-bold text-lime-600 ml-2">
                        Rp {promo.discountPrice.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <button 
                      onClick={() => onSectionChange('products')}
                      className="bg-lime-600 text-white px-6 py-2 rounded-lg hover:bg-lime-700 transition-colors"
                    >
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lime-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Berbelanja Sembako?
          </h2>
          <p className="text-xl mb-8 text-lime-100">
            Dapatkan produk berkualitas dengan harga terjangkau. Pesan sekarang dan nikmati kemudahan berbelanja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onSectionChange('products')}
              className="bg-white text-lime-600 px-8 py-3 rounded-lg font-semibold hover:bg-lime-50 transition-colors flex items-center justify-center"
            >
              Mulai Belanja
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              onClick={() => onSectionChange('about')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-lime-600 transition-colors"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;