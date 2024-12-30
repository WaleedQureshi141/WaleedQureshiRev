import { authInstance } from "@/lib/axios-config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";

export function useLogout()
{
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation(
        {
            mutationFn: async () =>
            {
                // const token = "Bearer " + queryClient.getQueryData(["auth"])
                const res = await authInstance.post("/logout"/*, {},
                    {
                        headers:
                        {
                            "withCredentials" : true,
                            "Authorization" : token,
                            "Content-Type": "application/json",
                        }
                    }*/
                );
                return res.data;
            },
            onSuccess: () =>
            {
                queryClient.clear();
                queryClient.invalidateQueries(
                    {
                        queryKey: ["auth"],
                    }
                )
                console.log(queryClient.getQueryData(["auth"]));
                toast.success("LOGGED OUT");
                router.navigate({to:"/"});
            }
        }
    )
}