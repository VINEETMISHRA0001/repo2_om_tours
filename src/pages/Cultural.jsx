const CulturalTour = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16 mt-20">
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-72 h-72 bg-indigo-200 rounded-full absolute top-10 left-0 opacity-50 blur-xl"></div>
        <div className="w-96 h-96 bg-blue-300 rounded-full absolute top-60 right-0 opacity-50 blur-xl"></div>
      </div>

      {/* Heading */}
      <h1 className="text-center py-2 text-5xl font-bold text-gray-800 uppercase mb-10 tracking-wider z-10 relative">
        Rajasthan Cultural Tour
      </h1>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-center overflow-hidden rounded-xl shadow-2xl z-10"
        style={{
          minHeight: '700px',
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://www.rajasthanfortsandpalaces.com/images/activity/794994615776176457606542.jpg)',
        }}
        title="Tour Image"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl tracking-wide">
            A Journey through Tradition, Art, and Heritage
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
              Rajasthan, often called the "Land of Kings," is a vibrant tapestry
              of cultures, traditions, and art forms that have been preserved
              and passed down through centuries. A cultural tour of Rajasthan is
              an immersive experience into the royal heritage, folk art,
              religious diversity, and everyday life of this enchanting state.
              From the bustling bazaars to the peaceful temples, Rajasthan’s
              cultural legacy is one of the richest and most colorful in India.
            </p>

            {/* Sections */}
            <div className="mt-8 space-y-8">
              <Section
                number="1"
                title=" Jaipur: The Pink City and a Royal Beginning"
                content="Begin your cultural tour in Jaipur, the capital city and a UNESCO World Heritage Site. Known as the Pink City for its distinct terracotta-colored buildings, Jaipur is a living museum of Rajasthani architecture, culture, and history. Explore the City Palace, still home to the royal family, and marvel at its fusion of Rajput, Mughal, and European architectural styles.

Don't miss the Hawa Mahal (Palace of Winds), an intricate façade with 953 small windows that allowed royal women to observe the city life below while maintaining their privacy. Jaipur is also famous for its Jantar Mantar, an ancient astronomical observatory showcasing India’s advancements in astronomy."
              />
              <Section
                number="2"
                title="Udaipur: The Venice of the East"
                content="Known as the City of Lakes, Udaipur is not only famous for its picturesque water bodies but also for its royal heritage. The majestic City Palace, overlooking Lake Pichola, offers a glimpse into the grandeur of Rajasthan’s bygone eras with its exquisite courtyards, pavilions, and museums. The architecture reflects a blend of Rajasthani and Mughal influences, representing the cultural exchanges of the past."
              />
              <Section
                number="3"
                title="Jodhpur: The Blue City and a Cultural Gem"
                content="Moving to Jodhpur, the Blue City, you’ll find yourself immersed in the heart of Rajasthani tradition. Known for its blue-painted houses and towering Mehrangarh Fort, Jodhpur offers stunning architecture alongside a deeply rooted cultural experience.

Mehrangarh Fort, one of the largest in India, houses a museum with exquisite collections of royal palanquins, costumes, and paintings. The Rajasthani art of miniature painting can be witnessed here, and workshops often offer tourists the opportunity to try their hand at this intricate craft."
              />

              <blockquote className="border-l-4 border-indigo-600 text-lg italic text-indigo-600 p-5 my-8 bg-gray-50 rounded-lg shadow-md">
                A visit to Rajasthan is an immersive experience that leaves
                travelers spellbound by its beauty, history, and culture. From
                its majestic forts and palaces to its vast deserts...
              </blockquote>

              <Section
                number="4"
                title=" Pushkar: Spiritual and Cultural Confluence"
                content="Pushkar is a sacred town known for its Brahma Temple, one of the few temples in the world dedicated to Lord Brahma, and its peaceful Pushkar Lake, a revered pilgrimage site. This ancient town is also home to the famous Pushkar Camel Fair, where culture, spirituality, and commerce blend seamlessly.

The Pushkar Fair is a grand spectacle, featuring everything from camel races to folk performances. Travelers from all over the world come here to witness this cultural extravaganza, which showcases Rajasthan’s traditional clothing, crafts, and rural life."
              />
              <Section
                number="5"
                title=" Bikaner: Camel Country and Folk Arts"
                content="Bikaner, located in the Thar Desert, is known for its camel breeding farms, the magnificent Junagarh Fort, and the vibrant Karni Mata Temple (also known as the Rat Temple). Bikaner is a living testament to Rajasthan’s desert heritage, with a culture deeply tied to its desert environment.

The Bikaner Camel Festival, held annually, is a lively event showcasing the region’s folk music, dance, and art forms. Kalbelia performances, camel processions, and fire dances are all part of this cultural celebration."
              />
              <Section
                number="6"
                title="Rajasthan’s Folk Music and Dance: A Cultural Feast"
                content="No cultural tour of Rajasthan is complete without experiencing its folk music and dance. Rajasthani music is renowned for its soulful melodies and rhythmic beats, often reflecting the stories of love, valor, and devotion. The Langa and Manganiyar communities are known for their musical traditions, which include instruments like the sarangi, dholak, and algoza.

The Ghoomar dance (a traditional women’s dance) and Kalbelia dance (performed by the Kalbelia nomadic tribe) are highlights of Rajasthani cultural performances. Both dances are vibrant, energetic, and deeply connected to the region's history and lifestyle."
              />
              <Section
                number="7"
                title="Art and Craft: A Creative Tradition"
                content="Rajasthan is a treasure trove of traditional crafts, from block printing and tie-dye to hand-painted pottery and jewelry making. Each city offers unique crafts—Jaipur is famous for its gem-cutting and jewelry, Jodhpur for its wooden furniture, and Udaipur for its miniature paintings."
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

export default CulturalTour;
