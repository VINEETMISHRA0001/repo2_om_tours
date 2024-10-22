import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createVehicle as apiCreateVehicle } from "../../services/apiVehicles";
import toast from "react-hot-toast";

export function useEditVehicle() {
  const queryClient = useQueryClient();
  const { mutate: editVehicle, isPending: isEditing } = useMutation({
    mutationFn: ({ formData, accessToken, id }) =>
      apiCreateVehicle({ formData, accessToken, id }),
    onSuccess: () => {
      toast.success("Vehicle successfully edited");
      queryClient.invalidateQueries({ queryKey: ["vehicle"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editVehicle, isEditing };
}
