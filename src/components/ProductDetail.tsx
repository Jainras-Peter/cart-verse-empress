import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';

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

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetail = ({ onAddToCart }: ProductDetailProps) => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  // This is sample data - in a real app, you would fetch this from an API
  const product: Product = {
    id: parseInt(id || "1"),
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "electronics",
    rating: 4.5,
    reviews: 124
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
              -{discount}% OFF
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-lg font-semibold">{product.rating}</span>
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Category: <span className="capitalize">{product.category}</span>
            </p>
            
            <div className="flex space-x-4">
              <Button
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className={`${
                  isLiked ? 'bg-red-50 border-red-200 text-red-500' : ''
                }`}
                onClick={toggleLike}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500' : ''}`} />
              </Button>
            </div>
          </div>

          <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Product Description</h3>
            <p className="text-gray-600">
              Experience premium sound quality with our Wireless Bluetooth Headphones. 
              Featuring advanced noise cancellation technology, comfortable ear cushions, 
              and long battery life, these headphones are perfect for music lovers and 
              professionals alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 