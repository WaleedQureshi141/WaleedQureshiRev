import { reimbInstance } from "@/lib/axios-config";
import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { Reimbs } from "../column-defs/user-tickets-def";

export function useUserTickets(): UseQueryResult<Reimbs[]>
// {id: number, description: string, amount: number, status: string}>
{
    const queryClient = useQueryClient();

    return useQuery<Reimbs[]>(
        {
            queryKey: ["user-reimbs"],
            queryFn: async () =>
            {
                const token = "Bearer " + queryClient.getQueryData(["auth"]);
                const res = await reimbInstance.get("/reimbs", 
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
            }
        }
    )
}