import { useMutation } from "@tanstack/react-query";
import { RegisterSchema } from "../../schemas/register-schema";
import { authInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export function useRegister()
{
    return useMutation(
        {
            mutationFn: async (values: RegisterSchema) =>
            {
                const res = await authInstance.post("/register", values);
                return res.data;
            },
            onSuccess: () => 
            {
                toast.success("ACCOUNT REGISTERED");
            },
            onError: () =>
            {
                toast.error("FAILED TO REGISTER ACCOUNT");
            }
        }
    );
}