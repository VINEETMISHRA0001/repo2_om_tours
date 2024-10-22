import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyProfile } from "../../services/apiUsers";
import toast from "react-hot-toast";

export function useUpdateMe() {
  //   const queryClient = useQueryClient();

  const { mutate: updateMe, isLoading: isUpdating } = useMutation({
    mutationFn: updateMyProfile,
    onSuccess: () => {
      toast.success("Your Profile updated successfully");
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  return { updateMe, isUpdating };
}
