import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Datepicker from "react-tailwindcss-datepicker";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import useLoadGoogleMaps from "../hooks/useLoadGoogleApi";
import { useCheckoutBooking } from "../features/bookings/useCheckoutBooking";
import { useParams } from "react-router-dom";
import { useVehicles } from "../features/vehicles/useVehicles";

const BookingPage = () => {
  const { data: vehicles, isLoading } = useVehicles();
  const { checkoutBooking, isCreating } = useCheckoutBooking();
  const { id: vehicleId } = useParams();
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      pickupLocation: "",
      dropoffLocation: "",
      distance: "",
      totalPrice: 0,
    },
  });
  const accessToken = localStorage.getItem("token");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
  });
  const [distance, setDistance] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);
  const [currentVehiclePrice, setCurrentVehiclePrice] = useState(0);
  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);
  const isGoogleMapsLoaded = useLoadGoogleMaps();

  const onSubmit = (data) => {
    checkoutBooking({ formData: data, accessToken, vehicleId });
  };

  useEffect(() => {
    if (vehicles) {
      let price = vehicles.vehicles.find(
        (vehicle) => vehicle._id === vehicleId
      ).price;
      setCurrentVehiclePrice(price);
    }
    if (isGoogleMapsLoaded) {
      const autocompletePickup = new window.google.maps.places.Autocomplete(
        pickupRef.current
      );
      const autocompleteDropoff = new window.google.maps.places.Autocomplete(
        dropoffRef.current
      );

      const calculateDistance = () => {
        const service = new window.google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: [pickupRef.current.value],
            destinations: [dropoffRef.current.value],
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (response, status) => {
            if (
              status === "OK" &&
              response.rows[0].elements[0].status === "OK"
            ) {
              const distanceText = response.rows[0].elements[0].distance.text;
              const distanceValue = parseFloat(
                distanceText.replace(/[^\d.]/g, "")
              );
              setDistance(distanceText);
              setTotalPrice(distanceValue * currentVehiclePrice);
              setValue("distance", distanceValue);
              setValue("totalPrice", distanceValue * currentVehiclePrice);
            } else {
              console.error("Error calculating distance:", status);
            }
          }
        );
      };

      autocompletePickup.addListener("place_changed", calculateDistance);
      autocompleteDropoff.addListener("place_changed", calculateDistance);

      autocompletePickup.addListener("place_changed", () => {
        setValue("pickupLocation", pickupRef.current.value);
        calculateDistance();
      });
      autocompleteDropoff.addListener("place_changed", () => {
        setValue("dropOffLocation", dropoffRef.current.value);
        calculateDistance();
      });

      return () => {
        window.google.maps.event.clearInstanceListeners(autocompletePickup);
        window.google.maps.event.clearInstanceListeners(autocompleteDropoff);
      };
    }
  }, [isGoogleMapsLoaded, currentVehiclePrice, vehicleId, vehicles, setValue]);

  if (isLoading || isCreating) return <div>Loading</div>;

  return (
    <div className="relative w-full py-[10rem] isolate overflow-hidden">
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
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="bg-white rounded-xl sm:max-w-[90rem] mx-auto shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="sm:w-[50%] border-r-2 relative overflow-hidden isolate">
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
            <img
              src="/assets/scorpio1.jpeg"
              className="sm:object-contain object-cover"
              alt=""
            />
            <div className="mt-5 px-[2rem] py-[2rem] relative">
              <h3 className="text-center font-bold text-gray-600 text-3xl pb-2">
                Mahindra Scorpio
              </h3>
              <div className="sm:flex flex flex-col gap-10 sm:flex-col sm:gap-10 py-[2rem] mt-[3rem] border-t-2">
                <div className="flex sm:flex items-center gap-7 text-gray-600 sm:text-lg sm:items-center sm:gap-7">
                  <TbAirConditioning className="sm:text-xl text-xl text-indigo-600" />
                  <span>Air Conditioned</span>
                </div>
                <div className="flex items-center sm:flex gap-7 sm:items-center text-gray-600 sm:text-lg sm:gap-7">
                  <MdAirlineSeatReclineExtra className="sm:text-xl text-xl text-indigo-600" />
                  <span>7 Seater</span>
                </div>
                <div className="sm:flex flex items-center gap-7 text-gray-600 sm:text-lg sm:items-center sm:gap-7">
                  <BsFuelPumpFill className="sm:text-xl text-xl text-indigo-600" />
                  <span>Diesel</span>
                </div>
                <div className="flex sm:flex items-center gap-7 text-gray-600 sm:text-lg sm:items-center sm:gap-7">
                  <GiCommercialAirplane className="sm:text-xl text-xl text-indigo-600" />
                  <span>Free Airport Pickup</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%]">
            <div className="bg-white rounded-lg p-8 m-4 sm:max-w-[36rem] mx-auto border-[1px] border-gray-100">
              <h3 className="text-3xl font-bold text-gray-600 mb-6">
                Booking Details
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-5 mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="pickupLocation"
                      className="block text-gray-600 text-sm mb-2"
                    >
                      Pickup Location
                    </label>
                    <input
                      {...register("pickupLocation")}
                      type="text"
                      id="pickupLocation"
                      ref={pickupRef}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-600"
                      placeholder="Enter pickup location"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dropOffLocation"
                      className="block text-gray-600 text-sm mb-2"
                    >
                      Dropoff Location
                    </label>
                    <input
                      {...register("dropOffLocation")}
                      type="text"
                      id="dropOffLocation"
                      ref={dropoffRef}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-600"
                      placeholder="Enter dropoff location"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mb-6">
                  <div className="w-full">
                    <label className="block text-gray-600 text-sm mb-2">
                      Pickup Date
                    </label>
                    <Datepicker
                      value={dateRange.startDate}
                      onChange={(value) => {
                        setDateRange((prevState) => ({
                          ...prevState,
                          startDate: value,
                        }));
                        setValue("pickupDate", value.startDate);
                      }}
                      asSingle={true}
                      displayFormat="DD/MM/YYYY"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-gray-600 text-sm mb-2">
                      Dropoff Date
                    </label>
                    <Datepicker
                      value={dateRange.endDate}
                      onChange={(value) => {
                        setDateRange((prevState) => ({
                          ...prevState,
                          endDate: value,
                        }));
                        setValue("dropOffDate", value.endDate);
                      }}
                      asSingle={true}
                      displayFormat="DD/MM/YYYY"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mb-6">
                  <div className="w-full">
                    <label className="block text-gray-600 text-sm mb-2">
                      Total Distance
                    </label>
                    <input
                      type="text"
                      {...register("distance")}
                      value={watch("distance")}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-600"
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex gap-5 mb-6">
                  <div className="w-full">
                    <label className="block text-gray-600 text-sm mb-2">
                      Total Price
                    </label>
                    <input
                      type="text"
                      {...register("totalPrice")}
                      value={`$${watch("totalPrice")}`}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-600"
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingPage;
