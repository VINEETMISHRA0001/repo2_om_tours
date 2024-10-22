import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkoutBooking as apiCheckoutBooking } from "../../services/apiBooking";
import toast from "react-hot-toast";

export const useCheckoutBooking = () => {
  const queryClient = useQueryClient();
  const { mutate: checkoutBooking, isPending: isCreating } = useMutation({
    mutationFn: ({ formData, accessToken, vehicleId }) => {
      apiCheckoutBooking({ formData, accessToken, vehicleId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { checkoutBooking, isCreating };
};
