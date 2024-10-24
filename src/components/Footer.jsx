import { MdOutlineAddIcCall, MdOutlineMarkEmailRead } from 'react-icons/md';
import { IoLocationSharp, IoSettingsSharp } from 'react-icons/io5';
import { Fragment } from 'react';
import { SiRoadmapdotsh } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { CiLocationArrow1 } from 'react-icons/ci';

const Footer = () => {
  return (
    <Fragment>
      <section className="bg-gradient-to-r border bg-indigo-600 relative isolate overflow-hidden py-[100px] px-[52px]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-indigo-100 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
            <svg x="50%" y={-1} className="overflow-visible fill-transparent">
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
        <div className="grid grid-cols-1 container mx-auto px-[20px] py-[30px] w-[screen] sm:flex sm:px-[0px] md:px-[0px] sm:items-center sm:justify-between">
          <div className="flex justify-start flex-col  gap-4">
            <SiRoadmapdotsh className="flex text-white text-5xl sm:text-5xl" />
            <h1 className="text-gray-50 font-semibold text-4xl sm:text-4xl">
              Om Banna Tour and Travels
            </h1>
            <p className="text-gray-200">A Tour And Travel agency</p>
          </div>
          <div className="mt-10  sm:mt-0 leading-10 text-xl font-semibold  text-gray-100">
            <Link
              to="/"
              className="flex items-center gap-4 hover:text-gray-300"
            >
              <CiLocationArrow1 />
              Home
            </Link>
            <Link
              to="/"
              className="flex items-center gap-4 hover:text-gray-300"
            >
              <CiLocationArrow1 />
              About
            </Link>
            <Link
              to="/"
              className="flex items-center gap-4 hover:text-gray-300"
            >
              <CiLocationArrow1 />
              Contact
            </Link>
            <Link
              to="/"
              className="flex items-center gap-4 hover:text-gray-300"
            >
              <CiLocationArrow1 />
              Company
            </Link>
          </div>
          <div className="mt-10  sm:mt-0 leading-10 text-xl font-semibold  text-gray-100">
            <Link
              to="/"
              className="flex items-center gap-4 hover:text-gray-300"
            >
              <MdOutlineMarkEmailRead />
              Mail us
            </Link>
            <Link
              to="/"
              className="flex items-center gap-4 hover:text-gray-300"
            >
              <MdOutlineAddIcCall />
              Contact Us
            </Link>
            <Link
              to="/"
              className="flex items-center gap-4 hover:text-gray-300"
            >
              <IoLocationSharp />
              Location
            </Link>
            <Link
              to="/"
              className="flex items-center gap-4 hover:text-gray-300"
            >
              <IoSettingsSharp />
              Services
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
