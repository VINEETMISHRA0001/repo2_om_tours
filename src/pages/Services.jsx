// import { Link } from 'react-router-dom';

// const Services = () => {

//   const popularPackages = [
//     {
//       name: 'Jaipur City Tour',
//       price: '₹1600',
//       duration: '8 Hours',
//       vehicle: 'Sedan',
//       image:
//         'https://blogs.revv.co.in/blogs/wp-content/uploads/2020/05/Jaipur.png',
//     },
//     {
//       name: 'Jaipur to Agra',
//       price: '₹3000',
//       duration: 'One Way',
//       vehicle: 'SUV',
//       image:
//         'https://www.ravitoursindia.com/wp-content/uploads/2017/08/Jaipur-To-Agra-1.jpg',
//     },
//     {
//       name: 'Jaipur to Delhi',
//       price: '₹3500',
//       duration: 'One Way',
//       vehicle: 'Sedan',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_bdqIef7nSCZQtPu6OaGgw2t02cCc_hcOA&s',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section
//         className="bg-cover bg-center"
//         style={{
//           backgroundImage: 'url(/assets/avg.jpg)',
//         }}
//       >
//         <div className="bg-black bg-opacity-50 py-32">
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
//             <p className="text-xl text-white">
//               Discover the world with OM Tours
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//             Our Services
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-700">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Popular Packages Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//             Popular Tour Packages
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {popularPackages.map((pkg, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 <img
//                   src={pkg?.image[0]} // Displaying the first image
//                   alt={pkg.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                     {pkg.name}
//                   </h3>

//                   <p className="text-gray-700 mb-2">
//                     <span className="font-bold">Duration: </span>
//                     {pkg.duration} Days
//                   </p>

//                   <p className="text-gray-700 mb-4">
//                     <span className="font-bold">Overview: </span>
//                     {pkg.trip_overview.length > 100
//                       ? `${pkg.trip_overview.substring(0, 100)}...`
//                       : pkg.trip_overview}
//                   </p>

//                   <div className="mb-4">
//                     <p className="text-gray-700 font-bold mb-1">
//                       Destinations Covered:
//                     </p>
//                     <ul className="text-sm text-gray-600">
//                       {pkg.destinations.slice(0, 4).map((dest, i) => (
//                         <li
//                           key={i}
//                           className="inline-block bg-gray-200 px-2 py-1 rounded-full mr-2 mb-2"
//                         >
//                           {dest}
//                         </li>
//                       ))}
//                       {pkg.destinations.length > 4 && (
//                         <span className="text-sm text-gray-500">
//                           +{pkg.destinations.length - 4} more
//                         </span>
//                       )}
//                     </ul>
//                   </div>

//                   <p className="text-gray-700 font-bold">Price: ₹{pkg.price}</p>

//                   <Link to={`/package/${pkg._id}`}>
//                     <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
//                       Explore..
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const carservices = [
  {
    title: 'Car Rental',
    description: 'Choose from a wide range of cars for your travel needs.',
    image:
      'https://d2m3nfprmhqjvd.cloudfront.net/blog/20231103174129/new-Tata-Harrier-1160x653.webp',
  },
  {
    title: 'Bus Rental',
    description: 'Comfortable buses for group travels and tours.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQq1dFvF0U3ML1ENLfi44jskzo4YJwsXA7RwVUnxqZ_12HQ-zEWWosGw-032-3HUoDio&usqp=CAU',
  },
  {
    title: 'Traveler Rental',
    description: 'Spacious travelers for family and group trips.',
    image: 'https://allindiataxiservice.com/upload/22349.jpg',
  },
  {
    title: 'Cab Booking',
    description: 'Rent Cabs for transporting goods and luggage.',
    image:
      'https://www.jcrcab.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-08-at-3.10.10-PM-3.jpeg',
  },
];

const Services = () => {
  // State to hold fetched services and packages
  const [services, setServices] = useState([]);
  const [popularPackages, setPopularPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch services and packages from API
  const fetchServicesAndPackages = async () => {
    try {
      setLoading(true);
      // const servicesResponse = await axios.get('YOUR_API_URL_FOR_SERVICES'); // replace with your API endpoint
      const packagesResponse = await axios.get(
        'https://om-tours-backend.vercel.app/api/tours'
      ); // replace with your API endpoint

      // setServices(packagesResponse.data);
      setPopularPackages(packagesResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicesAndPackages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/avg.jpg)',
        }}
      >
        <div className="bg-black bg-opacity-50 py-32">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-xl text-white">
              Discover the world with OM Tours
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carservices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Popular Tour Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={pkg.images[0]} // assuming the API returns a field 'image'
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-md font-bold text-gray-800 mb-2">
                    {pkg.trip_overview.split(' ').slice(0, 8).join(' ')}
                    {pkg.trip_overview.split(' ').length > 8 && '...'}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Duration: </span>
                    {pkg.duration}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-bold">Price: </span>₹{pkg.price}
                  </p>
                  <Link to={`/package/${pkg._id}`}>
                    <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                      Explore..
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
