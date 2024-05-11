import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getApiUrl } from "../utils/api/api.js";

const useFollow = () => {
  const queryClient = useQueryClient();

  const { mutate: follow, isPending } = useMutation({
    mutationFn: async (userId) => {
      try {
        const res = await fetch(getApiUrl(`api/users/follow/${userId}`), {
          method: "POST",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["suggestedUsers"] });
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { follow, isPending };
};

export default useFollow;
