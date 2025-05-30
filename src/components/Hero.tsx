
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Discover Amazing Products
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Shop the latest trends with unbeatable prices and fast shipping. 
          Your perfect purchase is just a click away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            View Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
