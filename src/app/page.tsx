'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './globals.css';

const carouselItems = [
  { src: '/images/c11.jpg' },
  { src: '/images/c12.jpg' },
  { src: '/images/c13.jpg' },
  { src: '/images/c14.jpg' },
  { src: '/images/c15.jpg' },
  { src: '/images/c16.jpg' },
  { src: '/images/c17.jpg' },
  { src: '/images/c18.jpg' },
  { src: '/images/c19.jpg' },
  // { src: '/images/c1.jpg', label: 'Discover More 1' },
  // { src: '/images/c2.jpg', label: 'Discover More 2' },
  // { src: '/images/c3.jpg', label: 'Discover More 3' },
  // { src: '/images/c4.jpg', label: 'Discover More 4' },
  // { src: '/images/c5.jpg', label: 'Discover More 5' },
  // { src: '/images/c6.jpg', label: 'Discover More 6' },
  // { src: '/images/c7.jpg', label: 'Discover More 7' },
  // { src: '/images/c8.jpg', label: 'Discover More 8' },
  // { src: '/images/c9.jpg', label: 'Discover More 9' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Itineraries', href: '#itineraries' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUuMG0ZrOddT6YZGRcd5er4NNK0VDAux2OIxFngA3pMLsBy1kzi9y7xdYum8tr4xzH/exec";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    drag: false,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  // Handler for dot click
  const goToSlide = (idx: number) => {
    instanceRef.current?.moveToIdx(idx);
  };

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      number: (form.elements.namedItem('number') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        alert("Message Submitted!");
        form.reset();
      })
      .catch(() => {
        alert("There was an error. Please try again later.");
      });
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="nav-bar absolute top-0 left-0 w-full z-30 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 py-5 sm:py-7 text-white gap-2 sm:gap-0">
        <div className="nav-name font-bold text-lg tracking-widest mb-2 sm:mb-0">GeeksforTrips</div>
        <div className="nav-icons flex flex-wrap justify-center gap-4 sm:gap-8 w-full sm:w-auto mb-2 sm:mb-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white font-medium transition-colors px-2"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="nav-lang flex items-center space-x-2">
          <span className="text-white/80 font-medium">EN</span>
          <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section id="home" className="hero relative w-full h-[80vh] min-h-[400px] overflow-hidden">
        {/* Carousel Images */}
        <div ref={sliderRef} className="keen-slider absolute inset-0 w-full h-full min-h-[400px] z-0">
          {carouselItems.map((item, idx) => (
            <div key={idx} className="keen-slider__slide relative w-full h-full min-h-[400px]">
            <Image
                src={item.src}
                alt={`c${idx + 1}`}
              fill
              className="object-cover"
                priority={idx === 0}
            />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
            </div>
          ))}
        </div>
        {/* Overlay Content */}
        <div className="overlay-container absolute z-10 left-0 bottom-0 w-full max-w-6xl px-4 sm:px-10 mx-auto pb-10 sm:pb-16 flex flex-col items-end text-right">
          <h1
            className="overlay-text text-lg xs:text-xl sm:text-2xl md:text-5xl font-extrabold leading-tight text-white mb-4 sm:mb-6 drop-shadow-2xl"
            style={{
              textShadow:
                '0 4px 32px rgba(0,0,0,0.7), 0 1.5px 2px rgba(0,0,0,0.25)',
            }}
          >
            Weaving Your Dreams<br />into Unforgettable Adventures
          </h1>
          <div className="flex flex-col sm:flex-row items-end sm:items-center mb-6 sm:mb-8 w-full max-w-xs sm:max-w-3xl justify-end gap-3 sm:gap-0">
            <button className="join-us bg-white text-gray-900 font-semibold px-5 py-2 sm:px-7 sm:py-3 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center text-base sm:text-lg w-full sm:w-auto justify-center">
              Join Us
              <span className="ml-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </button>
          </div>
          <div className="explore-button flex w-full justify-between items-center text-xs sm:text-base">
            {/* <span className="text-white/60 tracking-wide">[About Us]</span> */}
            {/* <a href="#about" className="text-white/80 flex items-center hover:underline">
              Explore More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </a> */}
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="carousel-dots absolute left-0 right-0 bottom-4 flex justify-center z-20">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={` mx-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white bg-white/70 hover:bg-white transition-all duration-200 ${currentSlide === idx ? 'bg-white' : 'bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-10 sm:py-16 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs text-gray-400 tracking-wide">[About Us]</span>
          <p className="mt-4 text-base sm:text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
            It all began with a single journey—a trip to the land of fire and ice that sparked a profound love for Iceland.<br />
            Enchanted by its rugged beauty and rich culture, we knew we had found something truly special.
          </p>
            </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Connect with Us</h2>
          {/* <p className="text-gray-500 mb-8 text-base sm:text-lg">Follow us for updates, stories, and more travel inspiration!</p> */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon group">
              <span className="icon-bg bg-white border border-gray-200 group-hover:border-blue-600 shadow-sm group-hover:shadow-md transition-all duration-200">
                <svg className="w-8 h-8 text-gray-700 group-hover:text-blue-600 opacity-80 group-hover:opacity-100 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M7 17v-7M7 7.5v.01M12 17v-4a2 2 0 1 1 4 0v4"/>
                  <path d="M17 17v-4a2 2 0 0 0-4 0v4"/>
                </svg>
              </span>
            </a>
            <a href="https://www.instagram.com/geeksfortrips/" target="_blank" rel="noopener noreferrer" className="social-icon group">
              <span className="icon-bg bg-white border border-gray-200 group-hover:border-pink-500 shadow-sm group-hover:shadow-md transition-all duration-200">
                <svg className="w-8 h-8 text-gray-700 group-hover:text-pink-500 opacity-80 group-hover:opacity-100 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </span>
            </a>
            <a href="https://youtube.com/your-youtube" target="_blank" rel="noopener noreferrer" className="social-icon group">
              <span className="icon-bg bg-white border border-gray-200 group-hover:border-red-500 shadow-sm group-hover:shadow-md transition-all duration-200">
                <svg className="w-8 h-8 text-gray-700 group-hover:text-red-500 opacity-80 group-hover:opacity-100 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="10" rx="4"/>
                  <polygon points="10 9 15 12 10 15 10 9" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a href="https://t.me/+oU-sF8SxH-0yMmM1" target="_blank" rel="noopener noreferrer" className="social-icon group">
              <span className="icon-bg bg-white border border-gray-200 group-hover:border-blue-400 shadow-sm group-hover:shadow-md transition-all duration-200">
                <svg className="w-8 h-8 text-gray-700 group-hover:text-blue-400 opacity-80 group-hover:opacity-100 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                  <path d="M21 3L3 10.53a1 1 0 0 0 .13 1.9l4.6 1.37 2.02 4.06a1 1 0 0 0 1.8-.04l1.13-2.26 4.6 4.13a1 1 0 0 0 1.65-.54l3.58-16.76A1 1 0 0 0 21 3z" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
      </div>
      </section>

      {/* Itineraries Section */}
      <section id="itineraries">
        <ItinerariesSection />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <GallerySection />
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-gray-50 py-12 px-4 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">Send Us a Message</h2>
          <form className="space-y-6" id="contact-form" onSubmit={handleContactSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name<span className="text-red-500">*</span></label>
                <input type="text" name="name" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Number</label>
                <input type="tel" name="number" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email<span className="text-red-500">*</span></label>
              <input type="email" name="email" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select name="subject" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black">
                <option value="new-itinerary">New Itinerary</option>
                <option value="join-team">Join Team</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message<span className="text-red-500">*</span></label>
              <textarea name="message" required rows={5} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none text-black" />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-black text-white px-8 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition">Submit</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-neutral-900 text-gray-300 border-t border-neutral-800 py-8 sm:py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Site Name */}
          <div className="text-xl font-bold tracking-widest text-white mb-4 md:mb-0">GeeksforTrips</div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center text-sm mb-4 md:mb-0">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#itineraries" className="hover:text-white transition">Itineraries</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 sm:gap-5 justify-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.48 4.48 0 0 0 16.11 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03A12.94 12.94 0 0 1 3 1.13a4.48 4.48 0 0 0-.61 2.27c0 1.56.8 2.93 2.02 3.74A4.52 4.52 0 0 1 2 6.13v.06c0 2.18 1.55 4 3.8 4.42a4.52 4.52 0 0 1-2.04.08c.58 1.81 2.26 3.13 4.25 3.16A9.05 9.05 0 0 1 1 19.54a12.8 12.8 0 0 0 6.95 2.04c8.36 0 12.94-6.93 12.94-12.94 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="10" rx="4"/>
                <polygon points="10 9 15 12 10 15 10 9"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} GeeksforTrips. All rights reserved. <span className="mx-2">|</span> Founded by <span className="font-semibold text-white">Tathagata Dey</span> | Founder's Media: <a href="https://www.instagram.com/epistemophilic_nerd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

function ItinerariesSection() {
  const itineraries = [
    {
      title: 'Arctic Adventure',
      desc: 'Explore glaciers, waterfalls, and the northern lights on this 5-day Icelandic adventure.',
      date: 'June 2024',
      location: 'Iceland',
      image: '/images/c2.jpg',
      pdf: '/pdfs/arctic-adventure.pdf',
    },
    {
      title: 'Mediterranean Escape',
      desc: 'Sail the turquoise waters and discover hidden gems along the Mediterranean coast.',
      date: 'July 2024',
      location: 'Greece & Italy',
      image: '/images/c4.jpg',
      pdf: '/pdfs/mediterranean-escape.pdf',
    },
    {
      title: 'Himalayan Trek',
      desc: 'Trek through the majestic Himalayas and experience local culture and breathtaking views.',
      date: 'September 2024',
      location: 'Nepal',
      image: '/images/c7.jpg',
      pdf: '/pdfs/himalayan-trek.pdf',
    },
    {
      title: 'Safari Expedition',
      desc: 'Witness the Big Five and enjoy luxury camps on this unforgettable African safari.',
      date: 'October 2024',
      location: 'Kenya & Tanzania',
      image: '/images/c5.jpg',
      pdf: '/pdfs/safari-expedition.pdf',
    },
    {
      title: 'Patagonia Explorer',
      desc: 'Hike the wild landscapes of Patagonia and marvel at glaciers and mountain peaks.',
      date: 'November 2024',
      location: 'Argentina & Chile',
      image: '/images/c3.jpg',
      pdf: '/pdfs/patagonia-explorer.pdf',
    },
    {
      title: 'Japanese Autumn',
      desc: "Experience the beauty of Japan's autumn foliage and vibrant city life.",
      date: 'November 2024',
      location: 'Japan',
      image: '/images/c9.jpg',
      pdf: '/pdfs/japanese-autumn.pdf',
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  let defaultCount = isMobile ? 2 : 3;
  const visibleItineraries = showAll ? itineraries : itineraries.slice(0, defaultCount);

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">Itineraries</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItineraries.map((it, idx) => (
            <a
              key={idx}
              href={it.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow p-0 flex flex-col justify-between h-full overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
              onClick={e => {
                if (isMobile && expandedIdx !== idx) {
                  e.preventDefault();
                  setExpandedIdx(idx);
                }
              }}
            >
              <div className={`itinirary-hero${expandedIdx === idx ? ' expanded' : ''}`}>
                <div className="itinirary-image w-full aspect-[3/2] bg-gray-200 overflow-hidden">
                  <img src={it.image} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                </div>
                <div className="p-6">
                  <h3 className="itinirary-title text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{it.title}</h3>
                  {/* Desktop: always show description; Mobile: show if expanded, else show button */}
                  <span className="hidden sm:block text-gray-600 mb-4">{it.desc}</span>
                  <span className="block sm:hidden">
                    {expandedIdx === idx ? (
                      <span className="text-gray-600 mb-4 block">{it.desc}</span>
                    ) : (
                      <button
                        className="text-blue-600 underline text-sm mt-1"
                        type="button"
                        onClick={e => {
                          e.preventDefault();
                          setExpandedIdx(idx);
                        }}
                      >
                        Read More
                      </button>
                    )}
                  </span>
                </div>
              </div>
              <div className="itinirary-footer flex items-center justify-between text-sm text-gray-400 mt-auto pt-2 border-t border-gray-100 px-6 pb-4">
                <span>{it.date}</span>
                <span>{it.location}</span>
              </div>
            </a>
          ))}
        </div>
        {!showAll && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition"
              onClick={() => setShowAll(true)}
            >
              View More
            </button>
          </div>
        )}
        {showAll && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-300 transition"
              onClick={() => setShowAll(false)}
            >
              View Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function GallerySection() {
  const trips = [
    {
      title: 'White-coated Manali',
      date: 'December 2024',
      location: 'Himachal',
      image: '/images/c18.jpg',
      url: '/trips/white-coated-manali/',
    },
    // {
    //   title: 'Alpine Adventure',
    //   date: 'January 2024',
    //   location: 'Switzerland',
    //   image: '/images/c6.jpg',
    //   url: 'https://example.com/alpine-adventure',
    // },
    // {
    //   title: 'Sahara Desert Trek',
    //   date: 'December 2023',
    //   location: 'Morocco',
    //   image: '/images/c8.jpg',
    //   url: 'https://example.com/sahara-desert',
    // },
  ];
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  let defaultCount = isMobile ? 2 : 3;
  const visibleTrips = showAll ? trips : trips.slice(0, defaultCount);

  return (
    <section className="bg-white py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">Trip Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTrips.map((trip, idx) => (
            <a
              key={idx}
              href={trip.url}
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl shadow p-0 flex flex-col justify-between h-full overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
            >
              <div className="trip-hero">
                <div className="trip-image w-full aspect-[3/2] bg-gray-200 overflow-hidden">
                  <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
                </div>
                <div className="trip-title p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{trip.title}</h3>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400 mt-auto pt-2 border-t border-gray-100 px-6 pb-4">
                <span>{trip.date}</span>
                <span>{trip.location}</span>
              </div>
            </a>
          ))}
        </div>
        {!showAll && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition"
              onClick={() => setShowAll(true)}
            >
              View More
            </button>
          </div>
        )}
        {showAll && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-300 transition"
              onClick={() => setShowAll(false)}
            >
              View Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}





// Deployment Id
// AKfycbzonRoWd_IFnvr3gxlSEMbSrYV8mLjfechwxPc74bnN69y0lV695eNk1n2nkmN6GoUD
// Web app Id
// https://script.google.com/macros/s/AKfycbzonRoWd_IFnvr3gxlSEMbSrYV8mLjfechwxPc74bnN69y0lV695eNk1n2nkmN6GoUD/exec