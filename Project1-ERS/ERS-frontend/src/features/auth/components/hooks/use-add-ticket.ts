import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTicketSchema } from "../../schemas/add-ticket-schema";
import { reimbInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export function useAddTicket()
{
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: async (values: AddTicketSchema) =>
            {
                const token = "Bearer " + queryClient.getQueryData(["auth"])
                console.log(token);
                const res = await reimbInstance.post("/add", values, 
                    {headers: 
                        {
                            "withCredentials" : true,
                            "Authorization" : token,
                            "Content-Type": "application/json",
                        }
                    });
                console.log(res.data);
                return res.data;
            },
            onSuccess: () =>
            {
                toast.message("Ticket Added");
            }
        }
    )
}