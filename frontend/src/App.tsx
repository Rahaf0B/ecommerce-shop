import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import prefumeImg from "./assest/images/prefume.jpg";
import accessoriesImg from "./assest/images/accessories.jpg";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";
import LoginorRegisterPage from "./pages/LoginorRegisterPage";
import Footer from "./components/Footer";
import Favorite from "./pages/Favorite";
export const websiteDescriptionsContext = createContext({});
export const productContext = createContext({});
export const headerMobileContext = createContext({});
export const footerContext = createContext({});

function App() {
  const ProductPageProps = {
    category: [
      { title: "All Products", style: { color: "#ffffffa1" } },
      { title: "Accessories", style: { color: "#ffffffa1" } },
      { title: "Perfume", style: { color: "#ffffffa1" } },
    ],
  };

  const headerMobileProps = {
    options: [
      { label: "products", herf: "/products" },
      { label: "about", herf: "/about" },
      { label: "Favorite", herf: "/favorite" },
      { label: "login", herf: "/login" },
      { label: "cart", herf: "/cart" },
    ],
  };
  const HomePageContent = {
    Title: "This is your space",
    Title_paragraph: "Talk about your business, your products, or yourself",
    body: [
      {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      },
      {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      },
    ],
    productCategoryImages: [
      {
        Image: accessoriesImg,
        title: "The Best Collection of Accessories",
        id: "accessories",
        text_style: {
          backgroundColor: "hsla(16.27118644067797, 32.24%, 64.12%, 1.00)",
        },
      },
      {
        Image: prefumeImg,
        title: "The Best Collection of Perfume",
        id: "perfume",
        text_style: { backgroundColor: "hsla(20, 51.90%, 53.53%, 1.00)" },
      },
    ],
    bottomHomePageProps: {
      title: "Featured Products",
      description: "Check out new and popular products",
    },
  };

  const FooterProps = {
    footerCategories: [
      {
        label: "Menu",
        category: [
          { label: "Home", href: "/" },
          { label: "about", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Products", href: "/products" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        label: "CATEGORIES",
        category: [
          { label: "All Products", href: "/products" },
          { label: "Accessories", href: "/products/accessories" },
          { label: "Perfumes", href: "/products/perfumes" },
        ],
      },
      {
        label: "HELP",
        category: [
          { label: "Shipping", href: "/shipping" },
          { label: "Returns & Exchange", href: "/return" },
          { label: "Product Care", href: "/productCare" },
        ],
      },
      {
        label: "FOLLOW",
        category: [
          { label: "Instagram", href: "" },
          { label: "Facebook", href: "" },
          { label: "Twitter", href: "" },
        ],
      },
    ],
  };

  return (
    <Router>
      <div className="App">
          <headerMobileContext.Provider value={headerMobileProps}>
            <Header />
          </headerMobileContext.Provider>

        <Routes>
          <Route
            path="/"
            element={
              <websiteDescriptionsContext.Provider value={HomePageContent}>
                <HomePage />
              </websiteDescriptionsContext.Provider>
            }
          ></Route>
          <Route
            path="/login"
            element={
                <LoginorRegisterPage />
            }
          />

          <Route
            path="/products"
            element={
              <productContext.Provider value={ProductPageProps}>
                <Products />
              </productContext.Provider>
            }
          />

          <Route
            path="/productInfo/:id/:category"
            element={<ProductInfo />}
          ></Route>

          <Route path="/favorite" element={<Favorite />} />
        </Routes>

        <footerContext.Provider value={FooterProps}>
          <Footer />
        </footerContext.Provider>
      </div>
    </Router>
  );
}

export default App;
