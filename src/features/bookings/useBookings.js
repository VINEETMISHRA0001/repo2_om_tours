import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBooking";

export const useBookings = () => {
  const accessToken = localStorage.getItem("token");
  const { data, isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBookings({ accessToken }),
  });

  return { data, isLoading };
};
