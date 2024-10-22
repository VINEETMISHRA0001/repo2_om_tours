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
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Itinerary</h2>
          <div className="space-y-4">
            {itinerary.map((day, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800">
                  {day.day}
                </h3>
                <p className="text-gray-700">{day.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
