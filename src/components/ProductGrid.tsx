
import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

const ProductGrid = ({ onAddToCart, searchQuery }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "electronics",
      rating: 4.5,
      reviews: 124
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "electronics",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: "Premium Coffee Beans",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
      category: "food",
      rating: 4.7,
      reviews: 56
    },
    {
      id: 4,
      name: "Designer Sunglasses",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      category: "fashion",
      rating: 4.3,
      reviews: 78
    },
    {
      id: 5,
      name: "Eco-Friendly Water Bottle",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      category: "lifestyle",
      rating: 4.6,
      reviews: 134
    },
    {
      id: 6,
      name: "Wireless Phone Charger",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
      category: "electronics",
      rating: 4.4,
      reviews: 92
    },
    {
      id: 7,
      name: "Organic Skincare Set",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      category: "beauty",
      rating: 4.9,
      reviews: 67
    },
    {
      id: 8,
      name: "Gaming Mechanical Keyboard",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      category: "electronics",
      rating: 4.7,
      reviews: 156
    }
  ];

  const categories = ['all', 'electronics', 'fashion', 'beauty', 'food', 'lifestyle'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
