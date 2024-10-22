const RajasthanDesert = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16 mt-20">
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-72 h-72 bg-indigo-200 rounded-full absolute top-10 left-0 opacity-50 blur-xl"></div>
        <div className="w-96 h-96 bg-blue-300 rounded-full absolute top-60 right-0 opacity-50 blur-xl"></div>
      </div>

      {/* Heading */}
      <h1 className="text-center py-2 text-5xl font-bold text-gray-800 uppercase mb-10 tracking-wider z-10 relative">
        Rajathan Desert Tour
      </h1>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-center overflow-hidden rounded-xl shadow-2xl z-10"
        style={{
          minHeight: '700px',
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://www.rajasthancab.com/wp-content/uploads/2024/06/desert-camel-safari-960x496.webp)',
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
              Rajasthan, the land of kings, is as much about its golden deserts
              as it is about its magnificent forts and palaces. The sprawling
              Thar Desert, also known as the Great Indian Desert, stretches
              across the northwest of Rajasthan, offering an extraordinary
              adventure that intertwines raw nature with the rich cultural
              heritage of India. A desert tour in Rajasthan is a mesmerizing
              blend of camel rides, endless sand dunes, vibrant local villages,
              and starry nights under the vast desert sky.
            </p>

            {/* Sections */}
            <div className="mt-8 space-y-8">
              <Section
                number="1"
                title="Jaisalmer: The Golden City"
                content="The gateway to the Thar Desert, Jaisalmer is often referred to as the 'Golden City' because of its yellow sandstone architecture and the shimmering desert surrounding it. A trip to Jaisalmer is incomplete without visiting the iconic Jaisalmer Fort, a UNESCO World Heritage Site. The fort, still home to many residents, rises from the desert sands and glows golden in the sunlight. While in Jaisalmer, you can experience the desert in all its glory with a camel safari. This is not just a ride; it’s a journey into the heart of the Thar Desert, where you'll witness sand dunes that stretch endlessly to the horizon. Sam Sand Dunes and Khuri Dunes are the most popular spots for sunset safaris. Imagine riding on the back of a camel as the sun sets behind the golden dunes, painting the sky in hues of orange and pink"
              />
              <Section
                number="2"
                title="Desert Camps: A Night Under the Stars"
                content="To truly immerse yourself in the desert experience, spend a night at a desert camp. These camps offer a blend of luxury and traditional Rajasthani hospitality. After your camel safari, relax in the comfort of your tented accommodation, enjoy local Rajasthani cuisine by the campfire, and watch folk performances featuring traditional Kalbelia dances and music."
              />
              <Section
                number="3"
                title="Bikaner: The Red Jewel of the Desert"
                content="Known for its camel festivals and opulent palaces, Bikaner is another must-visit destination on a desert tour. The city’s history as a former desert kingdom is evident in its grand architecture. The Junagarh Fort stands as a testament to Bikaner's royal heritage, while the Lalgarh Palace offers a glimpse into the luxury of Rajasthan’s erstwhile kings.

Bikaner is also famous for its Camel Breeding Farm, the only one of its kind in Asia. Visitors can interact with camels, learn about their importance to desert life, and even try camel milk ice cream—a unique desert delicacy!"
              />

              <blockquote className="border-l-4 border-indigo-600 text-lg italic text-indigo-600 p-5 my-8 bg-gray-50 rounded-lg shadow-md">
                A visit to Rajasthan is an immersive experience that leaves
                travelers spellbound by its beauty, history, and culture. From
                its majestic forts and palaces to its vast deserts...
              </blockquote>

              <Section
                number="4"
                title="Desert Safari Adventure: Thrill and Tranquility"
                content="For thrill-seekers, Rajasthan’s desert offers much more than scenic beauty. Dune bashing in a 4x4 jeep provides an exhilarating ride over the dunes, while those looking for a more serene experience can opt for a hot air balloon ride over the desert. Gliding silently above the sand dunes at dawn, as the desert comes alive with the morning light, is a magical experience that offers unmatched views of the Thar Desert’s vastness."
              />
              <Section
                number="5"
                title="Rural Desert Villages: A Cultural Immersion"
                content="One of the most authentic experiences of a desert tour in Rajasthan is visiting the rural desert villages. Away from the bustling cities, these villages, such as Kuldhara or Khaba, offer a glimpse into the traditional lifestyle of Rajasthan’s desert dwellers. Many of these villages have been preserved as heritage sites, where you can interact with the local communities, observe their handicrafts, and witness their daily routines."
              />
              <Section
                number="6"
                title=" Pushkar: A Spiritual Oasis in the Desert"
                content="Located on the edge of the Thar Desert, Pushkar is a sacred town known for its tranquil Pushkar Lake and its unique camel fair. The Pushkar Camel Fair, held annually, is one of the largest of its kind in the world, attracting thousands of visitors who come to witness the trading of camels, horse races, and traditional Rajasthani performances."
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

export default RajasthanDesert;
