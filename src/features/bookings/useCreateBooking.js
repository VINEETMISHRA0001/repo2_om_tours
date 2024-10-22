import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSingleBooking as apiCreateSingleBooking } from "../../services/apiBooking";
import toast from "react-hot-toast";

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  const { mutate: createSingleBooking, isPending: isCreating } = useMutation({
    mutationFn: apiCreateSingleBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createSingleBooking, isCreating };
};
