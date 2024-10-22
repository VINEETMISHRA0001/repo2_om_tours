import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const url = "/api/v1/bookings";

export const getBookings = async ({ accessToken, bookingId }) => {
  console.log("accessToken", accessToken);
  if (!bookingId) {
    try {
      const { data } = await axios({
        method: "get",
        url,
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return data;
    } catch (err) {
      console.log(err.message);
    }
  } else {
    try {
      const { data } = await axios({
        method: "get",
        url: `${url}/${bookingId}`,
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }
};

export const getUserBookings = async (accessToken) => {
  const { data } = await axios({
    method: "get",
    url: `${url}/myBookings`,
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data;
};

export const createSingleBooking = async ({ formData, accessToken }) => {
  try {
    const { data } = await axios({
      method: "post",
      data: formData,
      url,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const checkoutBooking = async ({ formData, accessToken, vehicleId }) => {
  try {
    const session = await axios({
      method: "post",
      url: `${url}/checkout-session/${vehicleId}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const stripePromise = loadStripe(
      "pk_test_51P4MHESGC6qsm5wHAC7grQuo97kJiSpHdvWcXWbKTsrXTY18xjzqDj6l1BtP0aFNMtqWw0tgfJqv6TwEv1SOTgJ900w0oHbqvJ"
    );

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteBooking = async ({ bookingId, accessToken }) => {
  const data = await axios({
    method: "delete",
    url: `${url}/${bookingId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};
