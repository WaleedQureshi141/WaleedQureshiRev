import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TicketDelSchema } from "../../schemas/del-user-schema";
import { userAdminInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export function useDelReimbs()
{
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values: TicketDelSchema) =>
            {
                const {id} = values;
                const token = "Bearer " + queryClient.getQueryData(["auth"]);

                const res = await userAdminInstance.delete(`/delete/${id}`,
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
                toast.success("USER DELETED")
                queryClient.invalidateQueries(
                    {
                        queryKey: ["all-users"]
                    }
                )
            }
        }
    )
}