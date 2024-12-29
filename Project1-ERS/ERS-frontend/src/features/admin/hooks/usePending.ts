import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { PendingReimbs } from "../column-defs/pending-reimb-defs";
import { reimbAdminInstance } from "@/lib/axios-config";

export function usePending(): UseQueryResult<PendingReimbs[]>
{
    const queryClient = useQueryClient();

    return useQuery<PendingReimbs[]>(
        {
            queryKey: ["pending-reimbs"],
            queryFn: async () =>
            {
                const token = "Bearer " + queryClient.getQueryData(["auth"]);
                const res = await reimbAdminInstance.get("/pending", 
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