import Link from 'next/link';
import './home.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home_components/HeroSection';
import FeaturedSection from '@/components/home_components/FeaturedSection';
import CategoriesSection from '@/components/home_components/CategoriesSection';
import FeaturesStrip from '@/components/home_components/FeaturesStrip';
import BrandsStrip from '@/components/home_components/BrandsStrip';
import BannersSection from '@/components/home_components/BannersSection';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-layout">
        
        {/* Hero Section */}
        <HeroSection />

        {/* Features Strip */}
        <FeaturesStrip />

        {/* Shop by Category */}
        <CategoriesSection />

        {/* Featured Hardware */}
        <FeaturedSection />
        {/* Brands Strip */}
        {/* Brands Strip */}
        <BrandsStrip />

        {/* Banners */}
        <BannersSection />

      </main>
      <Footer />
    </>
  );
}
