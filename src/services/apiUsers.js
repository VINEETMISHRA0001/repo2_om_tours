import axios from "axios";
import toast from "react-hot-toast";
const url = "/api/v1/users";

export const authLoginUser = async (userCredentials) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${url}/login`,
      data: userCredentials,
    });

    toast.success("Logged In");
    return data;
  } catch (err) {
    const errorMessage = err.response.data.error;
    toast.error(`${errorMessage}`);
  }
};

export const authSignupUser = async (userData) => {
  const { data } = await axios({
    method: "post",
    url: `${url}/signup`,
    data: userData,
    withCredentials: false,
  });

  return data;
};

export const authRefresh = async () => {
  const { data } = await axios({
    method: "get",
    url: `${url}/refresh`,
    withCredentials: true,
  });

  return data;
};

export const authLogout = async () => {
  await axios({
    method: "post",
    url: `${url}/logout`,
    withCredentials: true,
  });
};

export const updateMyProfile = async ({ data, accessToken }) => {
  await axios({
    method: "patch",
    url: `${url}/updateMe`,
    data: data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
