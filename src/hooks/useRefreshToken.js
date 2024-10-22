import { loginVerifiedUser } from "../features/users/userSlice";
import { authRefresh } from "../services/apiUsers";
import { useDispatch } from "react-redux";

export function useRefreshToken() {
  const dispatch = useDispatch();
  const refresh = async () => {
    const response = await authRefresh();
    const user = response.data.user;
    const accessToken = response.accessToken;

    dispatch(loginVerifiedUser(user, accessToken));

    return accessToken;
  };
  return refresh;
}
