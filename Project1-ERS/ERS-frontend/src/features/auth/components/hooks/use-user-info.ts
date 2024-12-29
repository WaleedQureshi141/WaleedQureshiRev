import { userInstance } from "@/lib/axios-config";
import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";

export function useUserInfo(): UseQueryResult<{
    firstName: string, lastName: string, username: string, roleId: number, role: string}>
{
    const queryClient = useQueryClient();

    return useQuery(
        {
            queryKey: ["firstName", "lastName", "username", "role"],
            queryFn: async () =>
            {
                const token: string = "Bearer " + queryClient.getQueryData(["auth"])
                const res = await userInstance.get("/user", 
                    {
                        headers:
                        {
                            "withCredentials" : true,
                            "Authorization" : token,
                            "Content-Type": "application/json",
                        }
                    });
                console.log(res.data);
                // queryClient.invalidateQueries(
                //     {
                //         queryKey: ["auth"]
                //     }
                // );

                return res.data;
            }
        }
    )
}