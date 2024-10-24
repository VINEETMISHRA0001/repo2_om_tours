import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative flex justify-center w-[100vw] m-auto items-center isolate px-6 pt-8 lg:px-8">
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
      <div className="mx-auto w-[100%] sm:w-[100%] py-32 sm:py-48 lg:py-26">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Get Upto 10% Off On Your First Booking{' '}
            <Link to="/book" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Book Now <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-6xl  sm:text-9xl  font-bold tracking-tight text-gray-900">
            Explore. Drive. Discover.
          </h1>
          <p className="mt-6 text-lg sm:w-[100%] m-auto leading-8 text-gray-600">
            Om Banna Tour and Travels is your passport to seamless travel
            experiences. With our easy booking system and expert guidance,
            embark on unforgettable journeys to destinations near and far.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/vehicles"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore Vehicles <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="flex justify-center mt-5  sm:w-[90vw] sm:h-[600px] m-auto rounded-lg">
            <img
              className="object-cover w-[100%] h-[100%] rounded-lg"
              src="../assets/banner.jpg"
              alt="image description"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
