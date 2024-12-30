import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TicketUpdateSchema } from "../../schemas/update-reimb-schema";
import { reimbAdminInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export function useReimbUpdate()
{
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values: TicketUpdateSchema) =>
            {
                const {id, status} = values;
                const token = "Bearer " + queryClient.getQueryData(["auth"])
                // console.log(token);
                const res = await reimbAdminInstance.patch(`/${id}/${status}`, {},
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
                        queryKey: ["pending-reimbs"]
                    }
                )
            }
        }
    )
}