import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BuyPage } from './pages/BuyPage';
import { RentPage } from './pages/RentPage';
import { SellPage } from './pages/SellPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  type: 'house' | 'apartment' | 'villa' | 'condo';
  status: 'sale' | 'rent';
}

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Family House",
    price: 850000,
    location: "Los Angeles, CA",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NTQ3MzMzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    type: "house",
    status: "sale"
  },
  {
    id: 2,
    title: "Luxury Apartment Downtown",
    price: 3500,
    location: "New York, NY",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    imageUrl: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU1MDMzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "apartment",
    status: "rent"
  },
  {
    id: 3,
    title: "Contemporary Villa",
    price: 1250000,
    location: "Miami, FL",
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    imageUrl: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB2aWxsYXxlbnwxfHx8fDE3NjU1MzM1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "villa",
    status: "sale"
  },
  {
    id: 4,
    title: "Urban Condo",
    price: 2800,
    location: "Chicago, IL",
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    imageUrl: "https://images.unsplash.com/photo-1751469020033-7ee3844f2170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNvbmRvfGVufDF8fHx8MTc2NTUzMzU5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    type: "condo",
    status: "rent"
  },
  {
    id: 5,
    title: "Beachfront Paradise",
    price: 2100000,
    location: "Malibu, CA",
    bedrooms: 6,
    bathrooms: 5,
    area: 4500,
    imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlfGVufDF8fHx8MTc2NTQ0NDA5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    type: "house",
    status: "sale"
  },
  {
    id: 6,
    title: "Suburban Family Home",
    price: 625000,
    location: "Austin, TX",
    bedrooms: 3,
    bathrooms: 2,
    area: 1900,
    imageUrl: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGhvbWV8ZW58MXx8fHwxNzY1NDM5NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "house",
    status: "sale"
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage properties={properties} />;
      case 'buy':
        return <BuyPage properties={properties} />;
      case 'rent':
        return <RentPage properties={properties} />;
      case 'sell':
        return <SellPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage properties={properties} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}