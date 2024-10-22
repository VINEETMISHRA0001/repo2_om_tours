const features = [
  {
    name: 'Easy Booking System',
    description:
      'A robust online booking platform that allows customers to browse available vehicles, select rental dates, and make reservations seamlessly',
  },
  {
    name: 'Fleet Management',
    description:
      'An efficient system for managing the fleet of rental vehicles, including tracking vehicle availability, maintenance schedules',
  },
  {
    name: 'Customer Management',
    description:
      'Tools for managing customer information, including registration, identification verification, reservation history, and communication preferences."',
  },
  {
    name: 'Payment Processing',
    description:
      'Secure payment processing capabilities that support various payment methods, including credit/debit cards, online payment gateways, and potentially cash payments at rental locations',
  },
  {
    name: 'Geolocation and Navigation',
    description:
      'Integration with geolocation services and navigation systems to provide customers with directions to rental locations',
  },
  {
    name: 'Reporting and Analytics',
    description:
      'Reporting tools that provide insights into key performance metrics such as revenue, utilization rates, customer satisfaction, and fleet efficiency',
  },
];

export default function Specifications() {
  return (
    <div className="bg-white relative isolate overflow-hidden">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl  font-bold tracking-tight text-gray-600 sm:text-7xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            Embark on your next adventure with ease using our Car Rental System.
            Whether you're planning a weekend getaway or a cross-country road
            trip, our intuitive online platform makes booking your perfect
            vehicle effortless. Choose from a diverse selection of cars, ranging
            from economic models to luxurious rides, ensuring there's something
            for every traveler
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="assets/booking.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="assets/maps.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="assets/on-pay.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="assets/thar.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
