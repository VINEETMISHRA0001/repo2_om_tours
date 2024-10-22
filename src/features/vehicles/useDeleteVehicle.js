import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVehicle as apiDeleteVehicle } from "../../services/apiVehicles";
import toast from "react-hot-toast";

export function useDeleteVehicle() {
  const queryClient = useQueryClient();
  const { mutate: deleteVehicle, isPending: isDeleting } = useMutation({
    mutationFn: ({ accessToken, id }) => apiDeleteVehicle({ accessToken, id }),
    onSuccess: () => {
      toast.success("Vehicle successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["vehicle"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteVehicle, isDeleting };
}
