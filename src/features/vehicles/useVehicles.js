import { useQuery } from "@tanstack/react-query";
import { getVehicles } from "../../services/apiVehicles";

export function useVehicles() {
  const { data, isLoading } = useQuery({
    queryKey: ["vehicle"],
    queryFn: getVehicles,
  });

  return { data, isLoading };
}
