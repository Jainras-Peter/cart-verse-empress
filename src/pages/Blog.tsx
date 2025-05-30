
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const sampleBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Tech Gadgets for 2024",
    excerpt: "Discover the most innovative and must-have tech gadgets that are shaping the future.",
    content: "In this comprehensive guide, we explore the latest technological innovations...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Technology",
    image: "/placeholder.svg",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainable Fashion: A Complete Guide",
    excerpt: "Learn how to build a sustainable wardrobe without compromising on style.",
    content: "Sustainable fashion is more than just a trend; it's a movement...",
    author: "Mike Chen",
    date: "2024-01-12",
    category: "Fashion",
    image: "/placeholder.svg",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Home Decor Trends That Will Transform Your Space",
    excerpt: "Transform your living space with these trending home decor ideas and tips.",
    content: "Your home is your sanctuary, and the way you decorate it...",
    author: "Emma Davis",
    date: "2024-01-10",
    category: "Home & Living",
    image: "/placeholder.svg",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Rise of Electric Vehicles",
    excerpt: "Exploring the future of transportation and the growing EV market.",
    content: "Electric vehicles are revolutionizing the automotive industry...",
    author: "David Wilson",
    date: "2024-01-08",
    category: "Technology",
    image: "/placeholder.svg",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Healthy Living: Simple Daily Habits",
    excerpt: "Small changes that can make a big difference in your overall health and wellbeing.",
    content: "Living a healthy lifestyle doesn't have to be complicated...",
    author: "Lisa Garcia",
    date: "2024-01-05",
    category: "Health",
    image: "/placeholder.svg",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Photography Tips for Beginners",
    excerpt: "Master the basics of photography with these essential tips and techniques.",
    content: "Photography is an art form that allows us to capture moments...",
    author: "Tom Anderson",
    date: "2024-01-03",
    category: "Photography",
    image: "/placeholder.svg",
    readTime: "9 min read"
  }
];

const categories = ["All", "Technology", "Fashion", "Home & Living", "Health", "Photography"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = sampleBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={0}
        onCartClick={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our experts
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search blog posts..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found matching your criteria.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
