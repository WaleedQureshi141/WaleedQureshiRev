import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useAuth(): UseQueryResult<{token: string}>
{
    return useQuery(
        {
            queryKey: ["auth"],
            staleTime: 1000 * 60 * 15,  // 15 min
            gcTime: 1000 * 60 * 15,     // 15 min
        }
    )
}