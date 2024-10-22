import axios from "axios";

const url = "/api/v1/vehicles";

export const getVehicles = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: "https://om-tours-backend.vercel.app/api/admin/vehicles",
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const createVehicle = async ({ formData, accessToken, id }) => {
  try {
    if (!id) {
      const { data } = await axios({
        method: "post",
        url,
        data: formData,
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return data;
    } else {
      const { data } = await axios({
        method: "patch",
        url: `${url}/${id}`,
        data: formData,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      return data;
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteVehicle = async ({ accessToken, id }) => {
  try {
    await axios({
      method: "delete",
      url: `${url}/${id}`,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  } catch (err) {
    console.log(err.message);
  }
};
