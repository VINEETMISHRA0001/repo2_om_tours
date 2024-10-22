const HeritageTour = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16 mt-20">
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-72 h-72 bg-indigo-200 rounded-full absolute top-10 left-0 opacity-50 blur-xl"></div>
        <div className="w-96 h-96 bg-blue-300 rounded-full absolute top-60 right-0 opacity-50 blur-xl"></div>
      </div>

      {/* Heading */}
      <h1 className="text-center py-2 text-5xl font-bold text-gray-800 uppercase mb-10 tracking-wider z-10 relative">
        Rajasthan Heritage Tour
      </h1>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-center overflow-hidden rounded-xl shadow-2xl z-10"
        style={{
          minHeight: '700px',
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://www.ravitoursindia.com/wp-content/uploads/2023/02/best-things-to-do-in-rajasthan.jpg)',
        }}
        title="Tour Image"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl tracking-wide">
            Discovering the Land of Forts and Palaces
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
              Rajasthan, the majestic land of kings, is synonymous with grand
              palaces, imposing forts, and a royal heritage that stretches back
              over a thousand years. A Rajasthan Heritage Tour offers a glimpse
              into the opulent lifestyles of the Maharajas, the architectural
              marvels of ancient kingdoms, and the fascinating blend of Rajput,
              Mughal, and British influences. This journey takes you through the
              timeless splendor of Rajasthan’s historic cities, revealing the
              rich cultural legacy of the region.
            </p>

            {/* Sections */}
            <div className="mt-8 space-y-8">
              <Section
                number="1"
                title="Jaipur: Gateway to Royal Splendor"
                content="Begin your heritage tour in Jaipur, the capital of Rajasthan, known for its regal palaces and impressive fortifications. The city’s most iconic landmark, the Amber Fort, perched atop a hill, offers a stunning blend of Rajput and Mughal architecture. The intricately decorated Sheesh Mahal (Mirror Palace) inside the fort, with its walls inlaid with mirrors and colored glass, is a sight to behold."
              />
              <Section
                number="2"
                title="Udaipur: The City of Lakes and Palaces"
                content="Udaipur, often called Venice of the East, is renowned for its picturesque lakes and palaces. At the heart of Udaipur is the stunning City Palace, one of the largest palace complexes in Rajasthan, overlooking the serene Lake Pichola. This architectural masterpiece, built over several centuries, is a stunning blend of Mughal and Rajput styles, with intricately designed balconies, towers, and cupolas offering breathtaking views."
              />
              <Section
                number="3"
                title="Jodhpur: The Blue City and Majestic Mehrangarh Fort"
                content="Travel next to Jodhpur, known as the Blue City for the indigo-colored houses that spread out beneath the imposing Mehrangarh Fort. Built in the 15th century, this fort stands as one of the largest in India, towering 400 feet above the city. Inside, its ornate palaces such as Phool Mahal and Moti Mahal house royal artifacts, miniature paintings, weapons, and the famed Elephant Howdahs used by the kings. 
                
                Mehrangarh Fort is also famed for its expansive courtyards, beautifully carved jharokhas (overhanging windows), and panoramic views of the blue-washed houses below. The nearby Jaswant Thada, a white marble cenotaph built in memory of Maharaja Jaswant Singh II, is often referred to as the Taj Mahal of Marwar."
              />

              <blockquote className="border-l-4 border-indigo-600 text-lg italic text-indigo-600 p-5 my-8 bg-gray-50 rounded-lg shadow-md">
                A visit to Rajasthan is an immersive experience that leaves
                travelers spellbound by its beauty, history, and culture. From
                its majestic forts and palaces to its vast deserts...
              </blockquote>

              <Section
                number="4"
                title="Jaisalmer: The Golden Fort City"
                content="In the heart of the Thar Desert lies Jaisalmer, the Golden City, with its magnificent Jaisalmer Fort, one of the few living forts in the world, still inhabited by local residents. Built in yellow sandstone, the fort gleams golden under the sun, and its narrow winding streets lead to exquisitely carved Havelis (mansions), temples, and marketplaces."
              />
              <Section
                number="5"
                title="Bikaner: Desert Forts and Royal Legacy"
                content="Bikaner, known for its Junagarh Fort, is another gem of Rajasthan’s heritage tour. Built in the 16th century, Junagarh Fort is a stunning example of Rajput architecture with later additions of Mughal and Gujarati influences. The fort’s interior is a masterpiece, with richly decorated palaces like Anup Mahal and Badal Mahal, featuring intricate frescoes, gold leaf work, and mirror inlays."
              />
              <Section
                number="6"
                title="Chittorgarh: The Fort of Legends"
                content="A visit to Rajasthan’s heritage sites would be incomplete without exploring the formidable Chittorgarh Fort, a symbol of Rajput valor, sacrifice, and pride. Spread over 700 acres, Chittorgarh is the largest fort in India and has a rich history of battles, particularly its association with Rani Padmini and the concept of Jauhar (self-immolation to avoid capture)."
              />
              <Section
                number="7"
                title="Mandawa: The Open-Air Art Gallery"
                content="Located in the Shekhawati region, Mandawa is famous for its grand havelis adorned with beautiful frescoes, earning it the nickname 'The Open-Air Art Gallery' of Rajasthan. These havelis, built by wealthy merchants in the 18th and 19th centuries, feature exquisite murals that depict everything from mythology to colonial life."
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

export default HeritageTour;
