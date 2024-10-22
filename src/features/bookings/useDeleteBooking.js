import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as apiDeleteBooking } from "../../services/apiBooking";
import toast from "react-hot-toast";

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: apiDeleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteBooking, isDeleting };
};
