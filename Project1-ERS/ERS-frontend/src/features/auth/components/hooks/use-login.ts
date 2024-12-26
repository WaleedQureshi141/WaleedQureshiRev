import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginSchema } from "../../schemas/login-schema";
import { authInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export function useLogin()
{
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values: LoginSchema) =>
            {
                const res = await authInstance.post("/login", values);
                return res.data;
            },
            onSuccess: (data) =>
            {
                queryClient.invalidateQueries(
                    {
                        queryKey: ["auth"],
                    }
                );
                // const token = data as string;
                // token.substring(7);
                queryClient.setQueryData(["auth"], data);
                console.log(queryClient.getQueryData(["auth"]));
                toast.message("Logged In");
            }
        }
    )
}