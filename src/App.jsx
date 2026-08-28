import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import WhoWeAreSection from "./components/WhoWeAreSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import AccommodationsSection from "./components/AccommodationsSection.jsx";
import ExtraServicesSection from "./components/ExtraServicesSection.jsx";
import OfferSection from "./components/OfferSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import ManagementSection from "./components/ManagementSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import NewsSection from "./components/NewsSection.jsx";
import Footer from "./components/Footer.jsx";
import PluginAssets from "./components/PluginAssets.jsx";
import {
  AccommodationsPage,
  AboutUsPage,
  BlogPage,
  ContactUsPage,
  SearchResultsPage,
  OurServicesPage,
  MyAccountPage,
} from "./pages/Pages.jsx";

function HomePage() {
  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    const scripts = Array.from(root.querySelectorAll("script"));

    const loadScript = (script) =>
      new Promise((resolve) => {
        const newScript = document.createElement("script");
        Array.from(script.attributes).forEach((attr) =>
          newScript.setAttribute(attr.name, attr.value)
        );

        if (script.src) {
          newScript.onload = resolve;
          newScript.onerror = resolve;
        } else {
          newScript.innerHTML = script.innerHTML;
        }

        script.parentNode.replaceChild(newScript, script);

        if (!script.src) {
          resolve();
        }
      });

    const runScriptsSequentially = async () => {
      for (const script of scripts) {
        if (!script.dataset.executed) {
          script.dataset.executed = "true";
          try {
            await loadScript(script);
          } catch (e) {
            console.error("Error executing script", script, e);
          }
        }
      }
    };

    runScriptsSequentially();
  }, []);

  return (
    <div id="page-container">
      <div id="et-boc" className="et-boc">
        <Header />
        <div id="et-main-area">
          <div id="main-content">
            <article id="post-18" className="post-18 page type-page status-publish hentry">
              <div className="entry-content">
                <div className="et-l et-l--post">
                  <div className="et_builder_inner_content et_pb_gutters3">
                    <HeroSection />
                    <WhoWeAreSection />
                    <ServicesSection />
                    <AccommodationsSection />
                  </div>
                  <ExtraServicesSection />
                  <OfferSection />
                  <GallerySection />
                  <ManagementSection />
                  <TestimonialsSection />
                </div>
              </div>
              <NewsSection />
            </article>
          </div>
        </div>
        <Footer />
      </div>
      <PluginAssets />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accommodations" element={<AccommodationsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/search-results" element={<SearchResultsPage />} />
      <Route path="/our-services" element={<OurServicesPage />} />
      <Route path="/my-account" element={<MyAccountPage />} />
      {/* Catch-all: redirect unknown paths back to home */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
