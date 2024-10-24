import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SiRoadmapdotsh } from 'react-icons/si';
import { Link, Outlet } from 'react-router-dom';
import navigation from './../utils/list';

const HomePageLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  return (
    <div className="bg-gray-100">
      <header className="fixed backdrop-blur-md inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              to="/"
              className="flex flex-row-reverse gap-5 items-center -m-1.5 p-1.5"
            >
              <span className="text-small text-bold text-2xl text-gray-900">
                Om Banna Tours and Travels
              </span>
              {/* <ing className="h-[40px] w-[40px]" /> */}
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="/assets/XX.jpg"
                alt=""
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Main navigation for larger screens */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.name === 'Tour Packages' ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="text-xl font-semibold leading-6 text-gray-900">
                    {item.name}
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <Link
                          to="/tour-packages/europe"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Europe
                        </Link>
                        <Link
                          to="/tour-packages/asia"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Asia
                        </Link>
                        <Link
                          to="/tour-packages/america"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          America
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xl font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <SiRoadmapdotsh className="h-[40px] w-[40px]" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Page content */}
      <Outlet />
    </div>
  );
};

export default HomePageLayout;
