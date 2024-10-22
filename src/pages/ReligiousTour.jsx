const ReligiousTour = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16 mt-20">
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-72 h-72 bg-indigo-200 rounded-full absolute top-10 left-0 opacity-50 blur-xl"></div>
        <div className="w-96 h-96 bg-blue-300 rounded-full absolute top-60 right-0 opacity-50 blur-xl"></div>
      </div>

      {/* Heading */}
      <h1 className="text-center py-2 text-5xl font-bold text-gray-800 uppercase mb-10 tracking-wider z-10 relative">
        Rajasthan Religious Tour
      </h1>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-center overflow-hidden rounded-xl shadow-2xl z-10"
        style={{
          minHeight: '700px',
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://www.rajasthantourplanner.com/images/Rajasthan-Pilgrimage-tours.jpg)',
        }}
        title="Tour Image"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl tracking-wide">
            Exploring the Sacred Temples and Spiritual Heritage
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
              Rajasthan, known for its royal grandeur and historical treasures,
              is also a land deeply rooted in spirituality and religion. The
              state is dotted with numerous temples, pilgrimage sites, and
              sacred landmarks that reflect its rich spiritual legacy. A
              Rajasthan Religious Tour offers a deep dive into the religious
              diversity and heritage of the region, highlighting the profound
              devotion, architectural brilliance, and cultural traditions that
              have been preserved over centuries.
            </p>

            {/* Sections */}
            <div className="mt-8 space-y-8">
              <Section
                number="1"
                title="Ajmer: The Dargah Sharif of Khwaja Moinuddin Chishti"
                content="A short distance from Pushkar lies Ajmer, a city famous for its secular and spiritual significance. The Ajmer Sharif Dargah, the tomb of Khwaja Moinuddin Chishti, a revered Sufi saint, is one of the most important pilgrimage centers for Muslims in India. People from all religions and walks of life visit this holy shrine to seek blessings and offer prayers."
              />
              <Section
                number="2"
                title="Ranakpur: The Jain Temples"
                content="The Ranakpur Jain Temples, nestled in the Aravalli hills, are among the most magnificent and important Jain pilgrimage sites in India. The main temple, dedicated to Tirthankara Adinatha, is an architectural masterpiece made of marble, with intricately carved pillars, ceilings, and domes.
                What makes the Ranakpur Temple unique is the 1,444 exquisitely carved pillars, no two of which are alike, showcasing the skill and artistry of the sculptors. The temple is known for its tranquil environment, and the surrounding lush greenery adds to the sense of serenity and peace. For followers of Jainism and those interested in architecture, a visit to Ranakpur is an integral part of the Rajasthan Religious Tour.
                "
              />
              <Section
                number="3"
                title="Nathdwara: The Abode of Shrinathji"
                content="Nathdwara, located on the banks of the Banas River, is home to the famous Shrinathji Temple, one of the holiest places for devotees of Lord Krishna, particularly in the Vaishnavite tradition. The temple houses an image of Shrinathji, a form of Lord Krishna as a child, which is believed to have been brought here in the 17th century to protect it from Mughal Emperor Aurangzeb's iconoclastic campaigns."
              />

              <blockquote className="border-l-4 border-indigo-600 text-lg italic text-indigo-600 p-5 my-8 bg-gray-50 rounded-lg shadow-md">
                A visit to Rajasthan is an immersive experience that leaves
                travelers spellbound by its beauty, history, and culture. From
                its majestic forts and palaces to its vast deserts...
              </blockquote>

              <Section
                number="4"
                title="Mount Abu: The Delwara Jain Temples"
                content="Mount Abu, Rajasthan’s only hill station, is not only a scenic retreat but also a place of great religious importance. The Delwara Jain Temples, a group of five temples built between the 11th and 13th centuries, are celebrated for their extraordinary marble architecture and intricate carvings. These temples are dedicated to various Tirthankaras (Jain saints), with the Vimal Vasahi Temple, dedicated to Adinatha, being the most renowned."
              />
              <Section
                number="5"
                title="Bikaner: Karni Mata Temple"
                content="A unique stop on the Rajasthan Religious Tour is the Karni Mata Temple in Deshnoke, near Bikaner. This temple, dedicated to Karni Mata, a revered deity believed to be an incarnation of Goddess Durga, is famously known as the Temple of Rats. Thousands of rats, considered sacred, roam freely in the temple, and devotees believe that spotting a white rat is especially auspicious."
              />
              <Section
                number="6"
                title="Salasar Balaji: The Hanuman Temple"
                content="Salasar Balaji, located in the Churu district, is a prominent pilgrimage site dedicated to Lord Hanuman, known as Balaji in this region. Thousands of devotees flock to this temple to offer prayers, seeking blessings for strength, protection, and fulfillment of their wishes. The temple's grand architecture and the powerful aura of Lord Hanuman’s idol attract pilgrims from all over the country"
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

export default ReligiousTour;
