import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTicketSchema } from "../../schemas/add-ticket-schema";
import { reimbInstance } from "@/lib/axios-config";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";
import { useVisibility } from "./helpers/use-visibility";

export function useAddTicket()
{
    const queryClient = useQueryClient();
    const router = useRouter();

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
                queryClient.invalidateQueries(
                    {
                        queryKey: ["user-reimbs"]
                    }
                );
                toast.message("Ticket Added");
                router.navigate({to:"/reimb/reimb-table"});
            }
        }
    )
}