import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { AllUsers } from "../column-defs/all-users-defs";
import { userAdminInstance } from "@/lib/axios-config";

export function useAllUsers(): UseQueryResult<AllUsers[]>
{
    const queryClient = useQueryClient();

    return useQuery<AllUsers[]>(
        {
            queryKey: ["all-users"],
            queryFn: async () =>
            {
                const token = "Bearer " + queryClient.getQueryData(["auth"]);
                console.log();
                const res = await userAdminInstance.get("/users", 
                    {
                        headers:
                        {
                            "withCredentials" : true,
                            "Authorization" : token,
                            "Content-Type": "application/json",
                        }
                    }
                );
                // console.log(queryClient.getQueryData(["auth"]));
                return res.data;
            }
        }
    )
}