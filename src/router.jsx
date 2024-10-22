import { createBrowserRouter } from 'react-router-dom';
// import HomePage from './pages/HomePage';

import HomePageLayout from './layouts/HomePageLayout';
import HomePage from './pages/HomePage';
import DisplayVehicles from './pages/DisplayVehicles';
import VehicleDetails from './components/VehicleDetails';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import FeedBackPage from './pages/FeedBackPage';

import ContactPage from './pages/ContactPage';
import Services from './pages/Services';
import JaipurToAgra from './pages/JaipurToAgra';
import CharDhamYatra from './pages/CharDhamYatra';
import SpecialTour from './pages/SpecialTour';
import RajasthanDesert from './pages/RajasthanDesert';
import CulturalTour from './pages/Cultural';
import HeritageTour from './pages/HeritageTour';
import ReligiousTour from './pages/ReligiousTour';
import WildLifePage from './pages/WildlifePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/vehicles',
        element: <DisplayVehicles />,
      },
      {
        path: '/vehicles/vehicle-details/:id',
        element: <VehicleDetails />,
      },

      {
        path: '/rajasthan-tour',
        element: <About />,
      },
      {
        path: '/rating',
        element: <FeedBackPage />,
      },
      {
        path: '/contact-us',
        element: <ContactPage />,
      },

      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/jaipur-to-agra',
        element: <JaipurToAgra />,
      },
      {
        path: '/om-banna-special-tour',
        element: <SpecialTour />,
      },
      {
        path: '/desert-tour-rajasthan',
        element: <RajasthanDesert />,
      },
      {
        path: '/cultural-tour-rajasthan',
        element: <CulturalTour />,
      },
      {
        path: '/heritage-tour-rajasthan',
        element: <HeritageTour />,
      },
      {
        path: '/religious-tour-rajasthan',
        element: <ReligiousTour />,
      },
      {
        path: '/wildlife-adventure-rajasthan',
        element: <WildLifePage />,
      },
    ],
  },

  {
    path: '*',
    element: <ErrorPage />,
  },
]);
