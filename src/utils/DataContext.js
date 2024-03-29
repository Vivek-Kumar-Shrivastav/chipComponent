// DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const initialState = {
  selectedChips: ["mia.miller@example.com"],
  availableItems: [
    "alice.smith@example.com",
    "john.doe@example.com",
    "emily.jones@example.com",
    "charlie.williams@example.com",
    "olivia.johnson@example.com",
    "daniel.smith@example.com",
    "sophia.davis@example.com",
    "ethan.miller@example.com",
    "ava.wilson@example.com",
    "william.anderson@example.com",
    "emma.martin@example.com",
    "james.thompson@example.com",
    "mia.jackson@example.com",
    "noah.white@example.com",
    "isabella.harris@example.com",
    "liam.martin@example.com",
    "ella.taylor@example.com",
    "logan.moore@example.com",
    "avery.jones@example.com",
    "lucas.miller@example.com",
    "harper.anderson@example.com",
    "mia.johnson@example.com",
    "ethan.smith@example.com",
    "olivia.moore@example.com",
    "liam.jones@example.com",
    "emma.taylor@example.com",
    "noah.harris@example.com",
    "ava.wilson@example.com",
    "james.anderson@example.com",
    "sophia.davis@example.com",
    "william.anderson@example.com",
    "ella.smith@example.com",
    "logan.martin@example.com",
    "avery.taylor@example.com",
  ],
  availableProducts: [
    {
      id: 1,
      name: "Premium Colombian Whole Bean Coffee",
      brand: "Coffee Co.",
      roastLevel: "Medium",
      beanType: "Arabica",
      groundType: "Whole Bean",
      flavorProfile: "Rich and Nutty",
      origin: "Colombia",
      fairTrade: true,
      organic: false,
      packagingType: "Vacuum-Sealed Bag",
      caffeineContent: "Regular",
      price: 12.99,
      rating: 4.8,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Dark Roast Espresso Blend",
      brand: "Espresso Masters",
      roastLevel: "Dark",
      beanType: "Blend (Arabica and Robusta)",
      groundType: "Whole Bean",
      flavorProfile: "Intense and Bold",
      origin: "Various",
      fairTrade: false,
      organic: true,
      packagingType: "Pods for Single-Serve Machines",
      caffeineContent: "Extra-Strong",
      price: 14.99,
      rating: 4.5,
      reviews: 90,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Ethiopian Yirgacheffe Light Roast",
      brand: "Ethiopian Elegance",
      roastLevel: "Light",
      beanType: "Arabica",
      groundType: "Ground Coffee",
      flavorProfile: "Fruity and Floral",
      origin: "Ethiopia",
      fairTrade: true,
      organic: true,
      packagingType: "Resealable Bag",
      caffeineContent: "Regular",
      price: 16.99,
      rating: 4.7,
      reviews: 150,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Hazelnut Flavored Ground Coffee",
      brand: "Flavorful Brews",
      roastLevel: "Medium",
      beanType: "Arabica",
      groundType: "Ground Coffee",
      flavorProfile: "Sweet and Nutty",
      origin: "Various",
      fairTrade: false,
      organic: false,
      packagingType: "Airtight Canister",
      caffeineContent: "Regular",
      price: 11.99,
      rating: 4.6,
      reviews: 100,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Brazilian Dark Chocolate Infused Coffee Beans",
      brand: "ChocoRoast",
      roastLevel: "Dark",
      beanType: "Arabica",
      groundType: "Whole Bean",
      flavorProfile: "Chocolatey and Rich",
      origin: "Brazil",
      fairTrade: true,
      organic: false,
      packagingType: "Resealable Bag",
      caffeineContent: "Regular",
      price: 19.99,
      rating: 4.9,
      reviews: 180,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Decaffeinated French Vanilla Ground Coffee",
      brand: "Vanilla Dreams",
      roastLevel: "Medium",
      beanType: "Arabica",
      groundType: "Ground Coffee",
      flavorProfile: "Smooth and Creamy",
      origin: "Various",
      fairTrade: false,
      organic: true,
      packagingType: "Airtight Canister",
      caffeineContent: "Decaffeinated",
      price: 13.99,
      rating: 4.5,
      reviews: 80,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Sumatra Single-Origin Peaberry Beans",
      brand: "Peaberry Perfection",
      roastLevel: "Dark",
      beanType: "Arabica",
      groundType: "Whole Bean",
      flavorProfile: "Earthy and Bold",
      origin: "Sumatra",
      fairTrade: true,
      organic: true,
      packagingType: "Eco-Friendly Bag",
      caffeineContent: "Regular",
      price: 17.99,
      rating: 4.7,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Mexican Chiapas Cold Brew Concentrate",
      brand: "Chill & Sip",
      roastLevel: "Light",
      beanType: "Arabica",
      groundType: "Cold Brew Concentrate",
      flavorProfile: "Refreshing and Fruity",
      origin: "Mexico",
      fairTrade: false,
      organic: false,
      packagingType: "Glass Bottle",
      caffeineContent: "Concentrated",
      price: 15.99,
      rating: 4.6,
      reviews: 100,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Organic Rainforest Alliance Certified Espresso Pods",
      brand: "EcoEspresso",
      roastLevel: "Dark",
      beanType: "Arabica",
      groundType: "Pods for Single-Serve Machines",
      flavorProfile: "Intense and Sustainable",
      origin: "Various",
      fairTrade: true,
      organic: true,
      packagingType: "Compostable Pods",
      caffeineContent: "Extra-Strong",
      price: 22.99,
      rating: 4.9,
      reviews: 200,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Hawaiian Kona Blend Medium Roast",
      brand: "Aloha Brews",
      roastLevel: "Medium",
      beanType: "Blend (Kona and Arabica)",
      groundType: "Whole Bean",
      flavorProfile: "Smooth and Tropical",
      origin: "Hawaii",
      fairTrade: false,
      organic: false,
      packagingType: "Airtight Canister",
      caffeineContent: "Regular",
      price: 18.99,
      rating: 4.8,
      reviews: 160,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      name: "Vanilla Hazelnut Cold Brew Kit",
      brand: "Cold Bliss",
      roastLevel: "Light",
      beanType: "Blend (Arabica, Vanilla, and Hazelnut)",
      groundType: "Cold Brew Kit",
      flavorProfile: "Sweet and Iced",
      origin: "Various",
      fairTrade: true,
      organic: false,
      packagingType: "DIY Cold Brew Kit",
      caffeineContent: "Regular",
      price: 24.99,
      rating: 5.0,
      reviews: 220,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      name: "Decadent Caramel Macchiato Ground Coffee",
      brand: "Caramel Delight",
      roastLevel: "Medium",
      beanType: "Arabica",
      groundType: "Ground Coffee",
      flavorProfile: "Sweet and Indulgent",
      origin: "Various",
      fairTrade: false,
      organic: false,
      packagingType: "Airtight Canister",
      caffeineContent: "Regular",
      price: 14.99,
      rating: 4.9,
      reviews: 190,
      image:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  productFilters: [
    "brand",
    "roastLevel",
    "beanType",
    "groundType",
    "flavorProfile",
    "origin",
    "organic",
    "packagingType",
    "caffeineContent",
  ],
};

export const DataProvider = ({ children }) => {
  const [selectedChips, setSelectedChips] = useState(
    initialState.selectedChips
  );
  const [availableItems, setAvailableItems] = useState(
    initialState.availableItems
  );
  const [availableProducts, setAvailableProducts] = useState(
    initialState.availableProducts
  );
  const [selectedProductFilters, setSelectedProductFilters] = useState([]);

  const [productFilters, setProductFilters] = useState(
    initialState.productFilters
  );

  return (
    <DataContext.Provider
      value={{
        selectedChips,
        setSelectedChips,

        availableItems,
        setAvailableItems,

        availableProducts,
        setAvailableProducts,

        selectedProductFilters,
        setSelectedProductFilters,

        productFilters,
        setProductFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
