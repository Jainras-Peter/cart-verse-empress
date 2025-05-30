import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={handleProductClick}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
              -{discount}%
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 bg-white/80 hover:bg-white ${
              isLiked ? 'text-red-500' : ''
            }`}
            onClick={toggleLike}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
        </div>
        
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h4>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
