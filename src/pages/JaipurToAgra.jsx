import React from 'react';

const AgraTourPackage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://media.istockphoto.com/id/1045842578/photo/taj-mahal-agra-india-at-sunset-with-mirror-reflection-and-vibrant-sky-taj-mahal-is-located-at.jpg?s=612x612&w=0&k=20&c=jVFetwTf--jPpEGm-6aBmcjoPPmJTX4kx_RutX0ALnI=" // Replace with actual image URL
          alt="Taj Mahal"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold lg:text-6xl">
            Agra Tour Package
          </h1>
        </div>
      </section>

      {/* Tour Overview */}
      <section className="px-6 py-12 lg:px-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700">
            If you are looking for a Agra trip, Rishi India Travels holiday
            packages are the right choice for you. We offer the wide range of
            customizable Agra tour to suit every kind of traveler from Jaipur,
            Delhi, Agra, Chennai, Bangalore or Mumbai. We provide best deals and
            discounts on Agra Tour Package. Explore the main Agra sightseeing
            points with the variety of experiential tours and activities
            included in Rishi India Travel’s Agra Tour Package. We at Rishi
            India Travels necessarily help the tourists in providing a complete
            tour guiding solution which not only meet the exact requirements of
            the tourists but also provides them with their dream tour. So, if
            you are planning to go for a vacation in Agra, do not waste any more
            time and Book your Agra Tour Package at best price with Rishi India
            Travels. If you wish to know more about Agra tours and travels such
            as the best time to visit Agra, visitor information of Agra, how to
            reach Agra, things to do in Agra and so on. Below scroll the page to
            bottom.
          </p>
          <ul className="mt-6 space-y-4 text-lg text-gray-700">
            <li>Duration: 2 Days, 1 Night</li>
            <li>Starting Point: New Delhi</li>
            <li>
              Package Includes: Transportation, Accommodation, Meals, and Guided
              Tours
            </li>
          </ul>
        </div>
      </section>

      {/* Tourist Spots Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tourist Spots Covered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Taj Mahal',
                img: 'https://static.toiimg.com/photo/msid-31346158,width-96,height-65.cms',
                description:
                  'The magnificent white marble mausoleum built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
              },
              {
                name: 'Agra Fort',
                img: 'https://cdn.britannica.com/37/178637-050-22E50FA5/Jahangirs-Palace-Agra-Fort-India-Uttar-Pradesh.jpg',
                description:
                  'A UNESCO World Heritage site, Agra Fort is a historic fort that was once the residence of the Mughal emperors.',
              },
              {
                name: 'Fatehpur Sikri',
                img: 'https://media.istockphoto.com/id/1045842190/photo/fatehpur-sikri-anup-talao-red-sandstone-architectural-structure-at-sunset-with-moody-sky.jpg?s=612x612&w=0&k=20&c=v1icHo-kT3h5G1NMBJPQjSNzrAzedTrZJFex1vKKcco=',
                description:
                  'A city founded by Emperor Akbar, famous for its stunning architecture and historical significance.',
              },
            ].map((spot, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={spot.img}
                  alt={spot.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {spot.name}
                  </h3>
                  <p className="mt-2 text-gray-700">{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="relative bg-gray-100 py-12 lg:py-20 overflow-hidden">
        {/* Bubbles Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Larger bubbles */}
          <div className="absolute top-10 left-5 w-64 h-64 bg-blue-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-1/4 right-20 w-40 h-40 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
          {/* Smaller bubbles */}
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Itinerary
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white shadow-lg rounded-lg relative z-10">
              <h3 className="text-xl font-bold text-gray-900">
                Day 1: Arrival in Agra
              </h3>
              <p className="mt-4 text-gray-700">
                On the first day of your exciting Agra tour, you will start your
                journey by being picked up from your desired location in New
                Delhi. Your journey to Agra will take approximately 3-4 hours by
                road, providing scenic views of rural India along the way. Upon
                arriving in Agra, your first stop will be at one of the most
                iconic landmarks in the world—the Taj Mahal, a UNESCO World
                Heritage site. As you approach, you'll witness the awe-inspiring
                beauty of this white marble masterpiece, often regarded as the
                epitome of love, built by Emperor Shah Jahan in memory of his
                beloved wife, Mumtaz Mahal. Our expert guide will share the rich
                history, romantic legends, and intricate architectural details
                as you walk through the sprawling gardens and stand before this
                wonder.
              </p>

              <p className="mt-4 text-gray-700">
                After visiting the Taj Mahal, enjoy a relaxing lunch at a local
                restaurant where you can savor delicious Mughal cuisine. Post
                lunch, the tour will take you to Agra Fort, another UNESCO World
                Heritage site and a true testament to the architectural
                brilliance of the Mughal era. Built by Emperor Akbar, the fort
                is a blend of both Hindu and Islamic styles. Inside the fort,
                you’ll explore grand halls, courtyards, and towers, and learn
                about its significance as a royal residence and military
                stronghold during Mughal rule. In the evening, unwind and relax
                as you check in to your comfortable hotel in Agra. The evening
                is free for leisure activities—perhaps explore Agra’s local
                markets, famous for marble crafts, textiles, and sweets, or
                enjoy dinner at a recommended restaurant. Overnight stay in
                Agra.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg relative z-10">
              <h3 className="text-xl font-bold text-gray-900">
                Day 2: Fatehpur Sikri
              </h3>
              <p className="mt-4 text-gray-700">
                On the second day, you will enjoy breakfast at the hotel before
                embarking on a half-day trip to Fatehpur Sikri, a historical
                town located about 40 kilometers from Agra. Once the capital of
                the Mughal Empire, Fatehpur Sikri was built by Emperor Akbar in
                the late 16th century. The city is known for its stunning red
                sandstone architecture and houses some remarkable monuments such
                as Jama Masjid, Buland Darwaza (the largest gateway in the
                world), and the Tomb of Salim Chishti, a revered Sufi saint. As
                you explore the palaces, mosques, and courtyards of Fatehpur
                Sikri, you’ll be taken back in time to the Mughal period,
                experiencing the grandeur of Akbar’s reign.
              </p>

              <p className="mt-4 text-gray-700">
                The serene atmosphere and beautiful architecture of the city
                make it a truly unforgettable stop on the tour. After spending
                time at Fatehpur Sikri, you'll head back to Agra for a short
                break and lunch. Following lunch, you’ll have some free time to
                explore the local handicrafts markets, or visit the Mehtab
                Bagh—a garden offering stunning views of the Taj Mahal across
                the Yamuna River. Finally, in the late afternoon, you’ll begin
                your journey back to Delhi. The trip back will be comfortable,
                allowing you to relax and reminisce about the incredible
                experiences of the last two days. You will be dropped off at
                your desired location in Delhi by evening, bringing an end to
                your Agra tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://www.india-tours.com/blog/wp-content/uploads/2020/09/agra-city.jpg',
              'https://www.themaharajatrain.com/wp-content/uploads/2024/03/11.-sikandra-fort_1062984107-.jpg',
              'https://agratourism.in/images/partner-tours/one-day-tour-delhi-to-agra-sightseeing-package-tour-private-cab-small.jpg',
              'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxDL4vvLFu9VfbqRh-e7x6DHWYvFahNcrVETfSlQAeMjz9ZPbJbQRwcs3MoInNIa4xDMCDl3tb5a4H0b_J6HXsPFEXvlj1DCNwfMTF1k1qOmYTDAsQT5QPBz83nWuNR0sNt6mNfqt9ZPg/s766/Agra+Fort+Edit+small.jpg',
              'https://yometro.com/images/places/mughal-garden-agra.jpg',
            ].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt="Agra Spot"
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Call to Action */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold">Ready for Your Agra Adventure?</h2>
          <p className="mt-4 text-lg">
            Book your tour now and experience the beauty of Agra's historical
            landmarks!
          </p>
          <button className="mt-6 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AgraTourPackage;
