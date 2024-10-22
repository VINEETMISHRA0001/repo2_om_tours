const Clients = () => {
  return (
    <div className="bg-white relative isolate overflow-hidden   py-24 sm:py-32">
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-5xl  font-bold tracking-tight leading-8 text-gray-900">
          Top & Trusted Brands Offered By Us
        </h1>
        <div className="mx-auto mt-[7rem] sm:mt-10rem grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-30 w-full object-contain lg:col-span-1"
            src="assets/toyota.png"
            alt="Toyota"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="assets/mahindra.png"
            alt="mahindra"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="assets/volvo.png"
            alt="volvo"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="assets/suz.png"
            alt="suzuki"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="assets/kia.png"
            alt="kia"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
