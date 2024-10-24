import { Link } from 'react-router-dom';
import Specifications from '../components/Specifications';

const DisplayVehicles = () => {
  // Static data for Indian cars
  const vehicles = [
    {
      _id: 1,
      name: 'Tata Nexon',
      image:
        'https://imgd.aeplcdn.com/1280x720/n/cw/ec/158615/tata-nexon-left-front-three-quarter2.jpeg?isig=0', // Replace with actual image URL
      imageAlt: 'Tata Nexon',
    },
    {
      _id: 2,
      name: 'Mahindra Thar',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/1200px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg', // Replace with actual image URL
      imageAlt: 'Mahindra Thar',
    },
    {
      _id: 3,
      name: 'Maruti Suzuki Swift',
      image:
        'https://s3-ap-southeast-1.amazonaws.com/staticin.izmocars.com/toolkit/IN/2024/24marutisuzuki/24marutisuzukiswift/24marutisuzukiswift_pixGallery/_gallerypix/marutisuzuki_swift_concept.jpg', // Replace with actual image URL
      imageAlt: 'Maruti Suzuki Swift',
    },
    {
      _id: 4,
      name: 'Hyundai Creta',
      image:
        'https://images.carandbike.com/car-images/gallery/hyundai/creta/exterior/hyundai-creta.jpg?v=2024-01-17', // Replace with actual image URL
      imageAlt: 'Hyundai Creta',
    },
    {
      _id: 5,
      name: 'Kia Seltos',
      image: 'https://imgd-ct.aeplcdn.com/664x415/n/v7ul3cb_1726647.jpg?q=80', // Replace with actual image URL
      imageAlt: 'Kia Seltos',
    },
    {
      _id: 6,
      name: 'Buses',
      image:
        'https://www.buses.tatamotors.com/wp-content/uploads/2023/09/citybus-1.png', // Replace with actual image URL
      imageAlt: 'Buses',
    },
    {
      _id: 7,
      name: 'Traveller',
      image:
        'https://assets.tractorjunction.com/truck-junction/assets/images/truck/tempo-traveller-3050-1632120806.webp', // Replace with actual image URL
      imageAlt: 'traveller',
    },
  ];

  return (
    <div className="bg-white w-[100vw] relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8bff80] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl px-4 py-[8rem] sm:px-6 sm:py-[8rem] lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center sm:text-7xl py-2 font-bold mb-[4rem] sm:text-center tracking-tight text-gray-600">
          Have a Look At Our Amazing and Luxurious Vehicles
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle._id}
              className="group border border-neutral-300 rounded-lg"
            >
              <div className="aspect-h-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  className="h-full w-full object-contain px-2 py-2 rounded-xl object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="text-center mt-2">
                <h3 className="text-lg font-semibold">{vehicle.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Specifications />
    </div>
  );
};

export default DisplayVehicles;
