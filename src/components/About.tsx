import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Tentang Toko Berkah</h1>
            <p className="text-lg text-gray-600 mb-6">
              Toko Berkah adalah UMKM yang telah melayani masyarakat dengan menyediakan kebutuhan sembako berkualitas sejak tahun 2015. Kami berkomitmen untuk memberikan produk terbaik dengan harga yang terjangkau bagi seluruh keluarga Indonesia.
            </p>
            <p className="text-gray-600 mb-6">
              Berawal dari toko kecil di lingkungan RT, kini kami telah berkembang menjadi toko sembako terpercaya yang melayani berbagai wilayah dengan sistem pemesanan online dan pengiriman langsung ke rumah pelanggan.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">9+</div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">1000+</div>
                <div className="text-gray-600">Pelanggan Setia</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Toko Berkah"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Visi Kami</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Menjadi toko sembako terdepan yang menyediakan kebutuhan pokok berkualitas tinggi dengan pelayanan prima, sehingga dapat meningkatkan kesejahteraan masyarakat dan mendukung ketahanan pangan keluarga Indonesia.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Misi Kami</h2>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Menyediakan produk sembako berkualitas dengan harga terjangkau
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Memberikan pelayanan terbaik kepada setiap pelanggan
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Mendukung ekonomi lokal dan UMKM sekitar
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Membangun kepercayaan masyarakat dalam jangka panjang
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nilai-Nilai Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nilai-nilai yang menjadi landasan dalam setiap aktivitas bisnis kami
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Kualitas</h3>
            <p className="text-gray-600">
              Selalu mengutamakan kualitas produk untuk kepuasan pelanggan
            </p>
          </div>
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Pelayanan</h3>
            <p className="text-gray-600">
              Memberikan pelayanan yang ramah dan responsif kepada setiap pelanggan
            </p>
          </div>
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Kepercayaan</h3>
            <p className="text-gray-600">
              Membangun hubungan jangka panjang berdasarkan kepercayaan dan kejujuran
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Kami</h2>
            <p className="text-gray-600">
              Orang-orang berpengalaman yang siap melayani kebutuhan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">BS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Budi Santoso</h3>
              <p className="text-emerald-600 font-medium mb-2">Pemilik & Pendiri</p>
              <p className="text-gray-600 text-sm">
                Berpengalaman 15 tahun di bidang retail dan distribusi
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SA</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Siti Aminah</h3>
              <p className="text-emerald-600 font-medium mb-2">Manajer Operasional</p>
              <p className="text-gray-600 text-sm">
                Ahli dalam manajemen stok dan layanan pelanggan
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">RH</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rahmat Hidayat</h3>
              <p className="text-emerald-600 font-medium mb-2">Koordinator Pengiriman</p>
              <p className="text-gray-600 text-sm">
                Memastikan pengiriman tepat waktu dan aman
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;