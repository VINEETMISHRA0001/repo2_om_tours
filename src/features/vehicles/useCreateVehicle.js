import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createVehicle as apiCreateVehicle } from "../../services/apiVehicles";
import toast from "react-hot-toast";

export function useCreateVehicle() {
  const queryClient = useQueryClient();
  const { mutate: createVehicle, isPending: isCreating } = useMutation({
    mutationFn: apiCreateVehicle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vehicle"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createVehicle, isCreating };
}
