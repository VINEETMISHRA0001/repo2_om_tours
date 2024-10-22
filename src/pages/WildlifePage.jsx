const WildLifePage = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16 mt-20">
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-72 h-72 bg-indigo-200 rounded-full absolute top-10 left-0 opacity-50 blur-xl"></div>
        <div className="w-96 h-96 bg-blue-300 rounded-full absolute top-60 right-0 opacity-50 blur-xl"></div>
      </div>

      {/* Heading */}
      <h1 className="text-center py-2 text-5xl font-bold text-gray-800 uppercase mb-10 tracking-wider z-10 relative">
        Rajasthan Wildlife Adventure Tour
      </h1>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-center overflow-hidden rounded-xl shadow-2xl z-10"
        style={{
          minHeight: '700px',
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://rajasthantourtravels.com/wp-content/uploads/2023/10/Rajasthan-Wildlife-Tour.png)',
        }}
        title="Tour Image"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl tracking-wide">
            Exploring the Wilderness and Cultural Diversity
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
              Rajasthan, often celebrated for its regal palaces and vibrant
              traditions, also boasts an adventurous side that beckons
              thrill-seekers and nature lovers alike. From the sprawling Thar
              Desert to its wildlife sanctuaries and rugged landscapes,
              Rajasthan offers a wide array of adrenaline-pumping activities
              while immersing you in its rich cultural diversity. A Rajasthan
              Adventure Tour takes you beyond the forts and temples, into the
              heart of its wild terrain and age-old traditions.
            </p>

            {/* Sections */}
            <div className="mt-8 space-y-8">
              <Section
                number="1"
                title="Desert Safari in the Thar Desert"
                content="A Desert Safari in the vast Thar Desert is one of the most thrilling adventures Rajasthan has to offer. Explore the golden sand dunes of Jaisalmer or Bikaner on the back of a camel or in a 4x4 jeep. The undulating dunes create the perfect backdrop for an exhilarating ride, giving you a true desert experience."
              />
              <Section
                number="2"
                title="Wildlife Safari in Ranthambore National Park"
                content="For wildlife enthusiasts, Rajasthan is home to some of the best wildlife sanctuaries in India. Ranthambore National Park, located near Sawai Madhopur, is one of the most famous wildlife reserves in the country, known for its Bengal tigers. A thrilling wildlife safari through this park gives you the chance to spot tigers in their natural habitat, as well as leopards, deer, sloth bears, and a variety of bird species.
                  "
              />
              <Section
                number="3"
                title="Hot Air Ballooning in Jaipur and Pushkar"
                content="For those seeking an aerial adventure, hot air ballooning over the Pink City of Jaipur or the holy town of Pushkar offers a unique perspective of Rajasthan's landscape. Soar above the majestic Amber Fort, the blue lakes, and the picturesque cityscape of Jaipur, or take in the spiritual aura of Pushkar Lake and its surrounding temples from the sky."
              />

              <blockquote className="border-l-4 border-indigo-600 text-lg italic text-indigo-600 p-5 my-8 bg-gray-50 rounded-lg shadow-md">
                A visit to Rajasthan is an immersive experience that leaves
                travelers spellbound by its beauty, history, and culture. From
                its majestic forts and palaces to its vast deserts...
              </blockquote>

              <Section
                number="4"
                title="Trekking in the Aravalli Range"
                content="The Aravalli Range, one of the oldest mountain ranges in the world, offers exciting trekking opportunities for adventure enthusiasts. Trekking through the scenic valleys and forests of the Aravallis lets you explore the less-traveled, verdant side of Rajasthan. Popular trekking destinations include Mount Abu, the state’s only hill station, and the hills around Udaipur and Kumbhalgarh."
              />
              <Section
                number="5"
                title="Zip-lining in Mehrangarh Fort, Jodhpur"
                content="Zip-lining through the imposing Mehrangarh Fort in Jodhpur is one of the most thrilling activities in Rajasthan. This high-adrenaline activity lets you fly over the fort’s battlements, lakes, and desert landscapes, giving you panoramic views of the Blue City below."
              />
              <Section
                number="6"
                title="Water Adventure at Chambal RiverCycling Tours in Udaipur and Jaipur"
                content="The Chambal River, located in Rajasthan’s southeastern region, offers a different kind of adventure – river safaris and boating. Glide through the peaceful waters of Chambal, home to rare wildlife such as gharial crocodiles, Gangetic dolphins, and a variety of migratory birds."
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

export default WildLifePage;
