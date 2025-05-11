import Image from 'next/image';
import Link from 'next/link';
import GallerySection from './GallerySection';

export default function WhiteCoatedManali() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="/images/c18.jpg"
          alt="White-coated Manali"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <Link
          href="/"
          className="absolute top-6 left-6 sm:left-1/2 sm:-translate-x-1/2 z-50 bg-black text-white px-6 py-2 rounded-full font-medium shadow-lg hover:bg-gray-800 transition-all duration-200"
        >
          &larr; Back to Home
        </Link>
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-2">White-coated Manali</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-200 text-lg font-medium">
            <span>December 2024</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Himachal</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white">
        {/* Trip Details */}
        <section className="max-w-3xl mx-auto py-10 px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Trip</h2>
          <p className="text-gray-700 text-lg mb-6">
            Experience the magic of Manali draped in a pristine white blanket of snow. We had an amazing time shivering in negative temperatures, rough mountain ranges, unbearbly chilly air, loss of mobile phones and what not. 
            We spent 1 day in Shimla, 2 days in Kasol and 3 days in Manali. Enjoyed the Shimla Mall, and Chirtmas charisma of the queen of hills. The moving on to Kasol, lonely crazy nights. Lost our phone in Parvati River, camped, had bonfire and group fun.
            Kasol was amazing for a friends&apos; trip, with cozy cafes, river chilly air, Rave party and more. Then we headed to Manali. Dived into white pristine coat of Solang and nearby places. Couldn&apos;t witness snowfall in Manali however was worth it.
            This winter adventure is perfect for those seeking breathtaking Himalayan views, cozy mountain stays, and unforgettable memories in the heart of Himachal Pradesh.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Trip Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Majestic Shimla Mall and Nights during Christmas.</li>
            <li>Lonely crazy nights in Kasol, by Parvati River and Valley.</li>
            <li>Snow-capped landscapes and pine forests.</li>
            <li>Adventure activities: snow trekking, skiing, and more</li>
            <li>Local Himachali cuisine and culture</li>
            <li>Cozy bonfire nights and group fun</li>
          </ul>
        </section>

        {/* Trip Member Instagrams */}
        <section className="max-w-2xl mx-auto py-8 px-4 sm:px-6">
          <h2 className="text-xl font-medium text-gray-800 mb-4 text-center">Trip Members</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['@jhalani.manas', '@palashmoon_', '@reetan.rdx', '@epistemophilic_nerd'].map((handle, index) => (
              <a
                key={index}
                href={`https://www.instagram.com/${handle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors duration-200"
              >
                {handle}
              </a>
            ))}
          </div>
        </section>

        {/* Gallery Photos Section */}
        <GallerySection />

        {/* Footer */}
        <footer className="w-full bg-neutral-900 text-gray-300 border-t border-neutral-800 py-8 sm:py-10 px-4 mt-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Site Name */}
            <div className="text-xl font-bold tracking-widest text-white mb-4 md:mb-0">GeeksforTrips</div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center text-sm mb-4 md:mb-0">
              <Link href="/" className="hover:text-white transition">Home Page</Link>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 sm:gap-5 justify-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.48 4.48 0 0 0 16.11 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03A12.94 12.94 0 0 1 3 1.13a4.48 4.48 0 0 0-.61 2.27c0 1.56.8 2.93 2.02 3.74A4.52 4.52 0 0 1 2 6.13v.06c0 2.18 1.55 4 3.8 4.42a4.52 4.52 0 0 1-2.04.08c.58 1.81 2.26 3.13 4.25 3.16A9.05 9.05 0 0 1 1 19.54a12.8 12.8 0 0 0 6.95 2.04c8.36 0 12.94-6.93 12.94-12.94 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="10" rx="4" />
                  <polygon points="10 9 15 12 10 15 10 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} GeeksforTrips. All rights reserved. <span className="mx-2">|</span> Founded by <span className="font-semibold text-white">Tathagata Dey</span> | Founder&apos;s Media: <a href="https://www.instagram.com/epistemophilic_nerd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
          </div>
        </footer>
      </div>
    </main>
  );
} 