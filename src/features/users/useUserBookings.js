import { useQuery } from "@tanstack/react-query";
import { getUserBookings } from "../../services/apiBooking";
import { useSelector } from "react-redux";

export function useUserBookings() {
  const accessToken = useSelector((state) => state.user.accessToken);
  const { data, isLoading } = useQuery({
    queryKey: ["myBookings"],
    queryFn: () => getUserBookings(accessToken),
  });

  return { data, isLoading };
}
