import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data/products';

interface ProductsProps {
  addToCart: (product: Product, quantity: number) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const categories = ['Semua', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Semua' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQuantityChange = (productId: number, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, quantity)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="space-y-8 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Produk Kami</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai kebutuhan sembako berkualitas dengan harga terjangkau
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category === 'Semua' ? '' : category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-emerald-600">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">{product.unit}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) - 1)}
                      className="px-3 py-1 text-gray-600 hover:text-gray-800"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300">
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) + 1)}
                      className="px-3 py-1 text-gray-600 hover:text-gray-800"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;