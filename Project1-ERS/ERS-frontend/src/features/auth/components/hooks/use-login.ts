import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginSchema } from "../../schemas/login-schema";
import { authInstance } from "@/lib/axios-config";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";
import { useUserInfo } from "./use-user-info";

export function useLogin()
{
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation(
        {
            mutationFn: async (values: LoginSchema) =>
            {
                const res = await authInstance.post("/login", values);
                return res.data;
            },
            onSuccess: (values) =>
            {
                queryClient.invalidateQueries(
                    {
                        queryKey: ["auth"],
                    }
                );
                queryClient.setQueryData(["auth"], values);
                // console.log(queryClient.getQueryData(["auth"]));
                toast.message("Logged In");

                // const {data} = useUserInfo();

                // if (data?.role === "USER")
                // {
                //     router.navigate({to: "/admin/all-users"});
                // }
                // else if (data?.role === "ADMIN")
                // {
                //     router.navigate({to: "/reimb/reimb-table"});
                // }

                router.navigate({to: "/auth/checkpoint"});
            },
            onError: () =>
            {
                toast.error("INCORRECT CREDENTIALS");
            }
        }
    )
}