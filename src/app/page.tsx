"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Facebook, Instagram, Leaf, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Shop",          id: "products"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Gio"
      button={{
        text: "Book Now",        href: "#contact"
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Gio Studio"
      description="Artistry in every petal. Gio Flowers curates bespoke, seasonal arrangements to bring nature's beauty directly to your space."
      buttons={[
        {
          text: "Explore Collection",          href: "#products"},
        {
          text: "Contact Us",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/multi-colored-bouquet-chrysanthemums-ornate-vase-generated-by-ai_188544-39231.jpg",          imageAlt: "Luxury Bouquet"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/girl-working-with-fresh-flowers-making-bouquet_23-2147761091.jpg",          imageAlt: "Floral Studio"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/network-connection-graphic-overlay-billboard_53876-120468.jpg",          imageAlt: "Florist at work"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-composition-flowers-glass_23-2148029198.jpg",          imageAlt: "Botanical detail"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-arrangement-green-plant_23-2148965618.jpg",          imageAlt: "Signature arrangement"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-florist-writing-notepad-floral-shop_23-2147929473.jpg",          imageAlt: "Blooming display"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Philosophy"
      title="Beyond Just Flowers"
      description="At Gio, we believe flowers are a language of emotion. We source sustainably and arrange with a focus on natural, free-spirited textures."
      subdescription="With over 10 years of botanical expertise, our studio provides bespoke floral storytelling for weddings, events, and everyday beauty."
      icon={Leaf}
      imageSrc="https://pixabay.com/get/gbec36fc0b0cb3ae5ac3f5177dcd7784b11983e323f1d20df2161dd3ae30d71d8b63dc5251728eaa5f9f95c7a64b10c8a1b334efcee6186735d854c92114c85c9_1280.jpg?id=7619791"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Classic Rose Elegance",          price: "$85",          imageSrc: "http://img.b2bpic.net/free-photo/wedding-bouquet-table_23-2148105873.jpg"},
        {
          id: "p2",          name: "Spring Morning Tulips",          price: "$60",          imageSrc: "http://img.b2bpic.net/free-photo/bouquet-fresh-multicolor-tulip-flowers_158538-26252.jpg"},
        {
          id: "p3",          name: "Garden Lavender Wild",          price: "$55",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-light-wooden-table_1182-1018.jpg"},
        {
          id: "p4",          name: "Pure Lily Bouquet",          price: "$70",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-white-color-calla-lilies-isolated-plaid-fabric-background_141793-7973.jpg"},
        {
          id: "p5",          name: "Peony Summer Bliss",          price: "$95",          imageSrc: "http://img.b2bpic.net/free-photo/spring-flowers_1182-901.jpg"},
        {
          id: "p6",          name: "Sunny Sunflower Joy",          price: "$50",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-bouquet-with-yellow-purple-flowers_23-2147600560.jpg"},
      ]}
      title="Seasonal Collections"
      description="Hand-picked, fresh arrangements crafted for every season."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Alice M.",          handle: "@alicem",          testimonial: "Gio flowers are truly unmatched. Every bouquet feels like a piece of art.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-cute-africanamerican-girl-smiling-pleased-showing-thumbsup-approval-lik_1258-149049.jpg"},
        {
          id: "t2",          name: "James R.",          handle: "@jamesr",          testimonial: "Ordered for my anniversary and the arrangement was perfect. Exceptional quality.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/working-with-partner_1098-14261.jpg"},
        {
          id: "t3",          name: "Sophie K.",          handle: "@sophiek",          testimonial: "Absolutely stunning arrangements. The flowers were incredibly fresh and vibrant.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-smiley-woman-outdoors-holding-bouquet-flowers-spring_23-2148826745.jpg"},
        {
          id: "t4",          name: "Mark D.",          handle: "@markd",          testimonial: "Best flower studio in town. Friendly staff and gorgeous seasonal picks.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg"},
        {
          id: "t5",          name: "Elena P.",          handle: "@elenap",          testimonial: "The attention to detail in their work is just incredible. My wedding flowers were divine.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-beautiful-african-female-florist-smiling-workplace-flower-shop-copy-space_176420-12298.jpg"},
      ]}
      showRating={true}
      title="Hearts & Blooms"
      description="Hear from those who have experienced the magic of Gio Flowers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Do you offer flower delivery?",          content: "Yes, we offer local same-day flower delivery within the city limits. Please place orders before 12 PM."},
        {
          id: "f2",          title: "Are your flowers sustainably sourced?",          content: "We prioritize local, seasonal blooms and partner with sustainable farms to reduce our ecological footprint."},
        {
          id: "f3",          title: "Can I request custom bouquets?",          content: "Absolutely! We specialize in custom floral design. Contact us directly to discuss your specific vision."},
        {
          id: "f4",          title: "How long do your arrangements last?",          content: "With proper care—changing water and trimming stems—our fresh arrangements typically last 5–8 days."},
      ]}
      title="Common Questions"
      description="Everything you need to know about our floral services."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="Get in touch"
      title="Ready to bring flowers into your life?"
      description="Whether for an event or a simple gift, we're here to help. Reach out to our design team today."
      background={{ variant: "plain" }}
      useInvertedBackground={false}
      imageSrc="http://img.b2bpic.net/free-photo/female-florist-working-with-flowers-flower-shop_23-2148127906.jpg"
      mediaPosition="right"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Gio"
      copyrightText="© 2025 Gio Flowers Studio."
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com",          ariaLabel: "Instagram"},
        {
          icon: Twitter,
          href: "https://twitter.com",          ariaLabel: "Twitter"},
        {
          icon: Facebook,
          href: "https://facebook.com",          ariaLabel: "Facebook"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}