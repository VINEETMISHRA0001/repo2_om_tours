const SpecialTour = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16 mt-20">
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-72 h-72 bg-indigo-200 rounded-full absolute top-10 left-0 opacity-50 blur-xl"></div>
        <div className="w-96 h-96 bg-blue-300 rounded-full absolute top-60 right-0 opacity-50 blur-xl"></div>
      </div>

      {/* Heading */}
      <h1 className="text-center py-2 text-5xl font-bold text-gray-800 uppercase mb-10 tracking-wider z-10 relative">
        Om Banna Special Tour
      </h1>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-center overflow-hidden rounded-xl shadow-2xl z-10"
        style={{
          minHeight: '700px',
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://www.viratratravels.com/control_panel/TourPackage/special.jpg)',
        }}
        title="Tour Image"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl tracking-wide">
            Explore Rajasthan Like Never Before
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto -mt-20 z-10 relative">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-white p-8 sm:p-12 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-5 mt-10">
              What To Explore?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Rajasthan, a land where history resonates through the sands of
              time, offers some of the most enchanting and unique tours that
              beckon travelers from around the globe. Known for its opulent
              palaces, formidable forts, vibrant culture, and sweeping desert
              landscapes, Rajasthan presents a journey that intertwines
              tradition, grandeur, and nature in a spellbinding way.
            </p>

            {/* Sections */}
            <div className="mt-8 space-y-8">
              <Section
                number="1"
                title="The Majestic Fort and Palace Tours"
                content="Exploring Rajasthan’s royal heritage is a must, with its numerous forts and palaces that stand as a testament to the state’s regal past. Begin with the iconic Amber Fort in Jaipur, a UNESCO World Heritage Site with its majestic ramparts and intricate mirror work that glitters like stars. Continue your tour to Mehrangarh Fort in Jodhpur, perched high on a hill offering breathtaking views of the Blue City below, and discover its museum filled with treasures from Rajasthan's princely era. The magnificent City Palace in Udaipur, overlooking the serene Lake Pichola, is another unmissable site, blending Mughal and Rajasthani architecture and housing beautifully curated exhibits. Each fort and palace tells a story of valor, love, and legacy, giving you a glimpse into the lives of kings and queens of yesteryears."
              />
              <Section
                number="2"
                title="The Golden Sands of the Thar Desert"
                content="A trip to Rajasthan would be incomplete without a journey into the vast Thar Desert, where golden dunes stretch endlessly under the burning sun. The Jaisalmer Desert Safari offers an unforgettable experience, as you explore the timeless desert landscape on the back of a camel. Spend the night in luxury camps under the starry skies, and be mesmerized by traditional Rajasthani folk music and dance performances. The golden fort of Jaisalmer, rising from the sands, further adds to the desert's allure. For those seeking adventure, activities like dune bashing, jeep safaris, and sandboarding promise to pump up the adrenaline while immersing you in the enchanting beauty of the desert."
              />
              <Section
                number="3"
                title="Heritage Walks and Cultural Tours"
                content="Rajasthan is not just about grand forts; it is equally about the people and the vibrant culture they preserve. Take a heritage walk through the narrow lanes of Jaipur, the Pink City, or explore the blue-hued streets of Jodhpur. These cities are dotted with bustling markets, offering colorful textiles, intricate handicrafts, traditional jewelry, and the famed Rajasthani miniature paintings. Participate in cultural tours to witness local artisans at work, from Kota Doria weaving to the pottery-making of Molela. The Pushkar Camel Fair, one of the largest livestock fairs in India, provides a unique cultural experience filled with local traditions, colorful decorations, and bustling activities."
              />

              <blockquote className="border-l-4 border-indigo-600 text-lg italic text-indigo-600 p-5 my-8 bg-gray-50 rounded-lg shadow-md">
                A visit to Rajasthan is an immersive experience that leaves
                travelers spellbound by its beauty, history, and culture. From
                its majestic forts and palaces to its vast deserts...
              </blockquote>

              <Section
                number="4"
                title="Rural and Eco Tours"
                content="For a more off-the-beaten-path experience, explore Rajasthan’s rural heartlands, where the soul of the state truly resides. Villages like Bishnoi and Samode offer eco-friendly tours that allow visitors to experience the simplicity of Rajasthani rural life. Interact with locals, participate in traditional farming, and witness wildlife like the blackbuck deer in their natural habitat. Chhatra Sagar, a luxury tented camp near Nimaj, offers a perfect blend of opulence and nature, situated on the banks of a serene dam, providing stunning birdwatching opportunities and a tranquil escape."
              />
              <Section
                number="5"
                title="Spiritual and Pilgrimage Tours"
                content="Rajasthan is a land of spirituality, with temples that draw thousands of devotees every year. The Dilwara Temples of Mount Abu, known for their intricate marble carvings, are a marvel of architecture and devotion. The holy town of Pushkar, with its sacred lake and the only Brahma Temple in the world, is an essential stop for spiritual seekers. The city of Ajmer, home to the revered Ajmer Sharif Dargah, attracts people of all faiths, who come to offer prayers and seek blessings from the tomb of the Sufi saint Moinuddin Chishti."
              />
              <Section
                number="6"
                title="Wildlife and Nature Tours"
                content="Rajasthan's diverse landscape is not just limited to deserts and cities—it also offers unique wildlife experiences. The Ranthambore National Park, famous for its tigers, is a haven for wildlife enthusiasts. Embark on a jungle safari to spot these majestic big cats, along with leopards, deer, and numerous bird species. Keoladeo National Park (Bharatpur Bird Sanctuary), a UNESCO World Heritage Site, is another must-visit destination for bird lovers, especially during the winter months when migratory birds flock here. For a serene escape, head to Mount Abu, the only hill station in Rajasthan, with its lush forests, tranquil lakes, and cooler climate, offering a refreshing break from the arid plains below."
              />
              <Section
                number="6"
                title="Festivals and Fairs"
                content="Rajasthan is also known for its vibrant festivals and fairs that showcase the cultural tapestry of the region. The Jaipur Literature Festival, the largest free literary festival in the world, attracts writers, thinkers, and readers from all over. The Desert Festival of Jaisalmer, celebrated amidst the sand dunes, is a spectacle of traditional performances, camel races, and desert sports. The colorful Gangaur Festival in Udaipur is a celebration of marital bliss, with women dressed in vibrant sarees carrying the idols of Gauri and Isar in grand processions. Each festival offers a unique insight into the deep-rooted customs and joyous spirit of Rajasthan."
              />
            </div>

            {/* Highlighted Quote */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Section Component for Reuse
const Section = ({ number, title, content }) => (
  <div className="mt-8">
    <h3 className="text-2xl font-bold text-gray-800 mb-3">
      {number}. {title}
    </h3>
    <p className="text-gray-700 leading-relaxed mb-6">{content}</p>
  </div>
);

export default SpecialTour;
