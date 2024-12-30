import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserUpdateSchema } from "../../schemas/update-user-schema";
import { userAdminInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export function useUpdateUser()
{
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values: UserUpdateSchema) =>
            {
                const {id} = values;
                const token = "Bearer " + queryClient.getQueryData(["auth"]);
                const res = await userAdminInstance.patch(`/setadmin/${id}`, {},
                    {
                        headers:
                        {
                            "withCredentials" : true,
                            "Authorization" : token,
                            "Content-Type": "application/json",
                        }
                    }
                );
                return res.data;
            },
            onSuccess: () =>
            {
                toast.success("REIMBURSEMENT UPDATED");
                queryClient.invalidateQueries(
                    {
                        queryKey: ["all-users"],
                    }
                );
            },
            onError: () =>
            {
                toast.error("USER ALREADY AN ADMIN");
            }
        }
    )
}