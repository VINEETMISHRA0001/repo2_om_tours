import { CheckIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

const features = [
  {
    name: 'Yamunotri Darshan',
    description:
      'Begin your sacred journey with Yamunotri, the source of the Yamuna River. Nestled in the Garhwal Himalayas, it is the first stop on the Char Dham Yatra. The temple is dedicated to Goddess Yamuna and offers a peaceful, spiritual experience amid snow-capped peaks and hot springs.',
    icon: CheckIcon,
  },
  {
    name: 'Gangotri Temple Visit',
    description:
      'Gangotri, the birthplace of the sacred River Ganga, is the second stop on the yatra. Visit the Gangotri Temple, where you can pay homage to the goddess and witness the pristine beauty of the river emerging from the glaciers.',
    icon: CheckIcon,
  },
  {
    name: 'Kedarnath Trek and Temple',
    description:
      'The journey to Kedarnath, one of the 12 Jyotirlingas of Lord Shiva, is both physically challenging and spiritually fulfilling. Located amidst the snow-clad peaks, the trek offers a divine connection with nature and the almighty. Experience the serene beauty and tranquility at the temple site.',
    icon: CheckIcon,
  },
  {
    name: 'Badrinath Temple Visit',
    description:
      'End your pilgrimage at Badrinath, the sacred abode of Lord Vishnu. The Badrinath Temple, situated at the banks of the Alaknanda River, is surrounded by the majestic Nar and Narayan mountain ranges. It is the final stop in the Char Dham circuit, offering a soul-stirring spiritual experience.',
    icon: CheckIcon,
  },
];

const itinerary = [
  {
    day: 'Day 1: Arrival in Haridwar',
    details:
      'Arrive in Haridwar and check into your hotel. In the evening, visit Har Ki Pauri to witness the beautiful Ganga Aarti. Overnight stay in Haridwar.',
  },
  {
    day: 'Day 2: Haridwar to Barkot',
    details:
      'Drive to Barkot via Mussoorie. En route, visit Kempty Falls. On arrival, check into your hotel in Barkot. Overnight stay in Barkot.',
  },
  {
    day: 'Day 3: Barkot - Yamunotri - Barkot',
    details:
      'Drive to Janki Chatti and start the trek to Yamunotri. After visiting the temple, trek back to Janki Chatti and drive back to Barkot for an overnight stay.',
  },
  // Add more days as needed
];

const inclusions = [
  'Accommodation in 3-star hotels',
  'Daily breakfast and dinner',
  'AC transportation',
  'Toll, parking, and driver allowance',
  'All sightseeing as per the itinerary',
];

const exclusions = [
  'Airfare',
  'Personal expenses',
  'Tips and gratuities',
  'Entry fees for monuments',
  'Any other expenses not mentioned in inclusions',
];

export default function CharDhamYatra() {
  return (
    <Fragment>
      {/* Section 1: Hero & Overview */}
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
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
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Begin Your Spiritual Quest
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Start your pilgrimage in the holy city of Haridwar, located on
                  the banks of the Ganges River. Witness the evening Ganga Aarti
                  at Har Ki Pauri, a spiritual ceremony that invokes peace and
                  devotion.
                </p>
              </div>
            </div>
          </div>

          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt="Char Dham Yatra"
              src="https://www.megamaxaviation.com/wp-content/uploads/2023/07/chardham-website-banner.jpg"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />

            <h1 className="text-xl md:text-6xl lg:text-6xl mt-5 text-center font-semibold">
              CHAR DHAM YATRA
            </h1>
          </div>

          {/* Features Section */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  On the following days, visit the sacred temples of Yamunotri,
                  Gangotri, Kedarnath, and Badrinath. Each site holds immense
                  spiritual importance and is surrounded by breathtaking natural
                  beauty.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  {features.map((feature) => (
                    <li key={feature.name} className="relative pl-9">
                      <CheckIcon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="font-semibold text-gray-900">
                        {feature.name}
                      </span>{' '}
                      {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Itinerary */}
      {/* <!-- Char Dham Yatra Itinerary Section --> */}
      {/* <!-- Char Dham Yatra Itinerary Section --> */}
      <section className="bg-gradient-to-r from-green-50 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Char Dham Yatra - 10 Days Itinerary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Card Day 1 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 1: Haridwar/Rishikesh to Barkot
                </h3>
                <p className="mt-4 text-gray-600">
                  Start your journey from Haridwar or Rishikesh. Visit Har Ki
                  Pauri and Kempty Falls en route. Stay overnight in Barkot.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 210 km
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Time: 7-8 hours
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Card Day 2 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 2: Barkot – Yamunotri Darshan
                </h3>
                <p className="mt-4 text-gray-600">
                  Drive to Janki Chatti and trek to Yamunotri. Visit the temple
                  and return to Barkot by evening. Stay overnight.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 36 km drive + 6 km trek
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Trek: 5 hours
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Card Day 3 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 3: Barkot to Uttarkashi
                </h3>
                <p className="mt-4 text-gray-600">
                  Proceed to Uttarkashi, a holy town on the banks of Bhagirathi
                  River. Visit Kashi Vishwanath temple.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 85 km
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Time: 4-5 hours
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Card Day 4 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 4: Uttarkashi – Gangotri Darshan
                </h3>
                <p className="mt-4 text-gray-600">
                  Drive to Gangotri, the origin of River Ganga. Visit the temple
                  and return to Uttarkashi for an overnight stay.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 100 km
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Time: 3-4 hours
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Card Day 5 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 5: Uttarkashi to Guptkashi
                </h3>
                <p className="mt-4 text-gray-600">
                  Drive to Guptkashi. En route, visit Tehri Dam. Evening visit
                  to Vishwanath temple.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 220 km
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Time: 8-9 hours
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Card Day 6 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 6: Guptkashi to Kedarnath Darshan
                </h3>
                <p className="mt-4 text-gray-600">
                  Trek to Kedarnath or take a helicopter. Visit the Kedarnath
                  temple and stay overnight in the holy town.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 16 km trek
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Trek: 7-8 hours
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Card Day 7 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 7: Kedarnath to Guptkashi
                </h3>
                <p className="mt-4 text-gray-600">
                  After early morning darshan at Kedarnath temple, return to
                  Guptkashi. Stay overnight in Guptkashi.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 16 km trek
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Trek: 7-8 hours
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Card Day 8 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 8: Guptkashi to Badrinath
                </h3>
                <p className="mt-4 text-gray-600">
                  Drive to Badrinath via Joshimath. On arrival, visit the
                  Badrinath temple and participate in the evening aarti.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 190 km
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Time: 7-8 hours
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Card Day 9 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 9: Badrinath to Rudraprayag
                </h3>
                <p className="mt-4 text-gray-600">
                  After darshan at Badrinath temple and a visit to Mana Village,
                  drive to Rudraprayag for an overnight stay.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 160 km
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Time: 6-7 hours
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Card Day 10 --> */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Day 10: Rudraprayag to Haridwar
                </h3>
                <p className="mt-4 text-gray-600">
                  Conclude your Char Dham Yatra by driving back to Haridwar.
                  Visit Rishikesh on the way and take part in Ganga Aarti before
                  departure.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Distance: 165 km
                  </span>
                  <span className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full ml-2">
                    Time: 5-6 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Inclusions and Exclusions */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Inclusions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Exclusions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
