import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useVisibility()
{
    return useQuery(
        {
            queryKey: ["auth", false],
        }
    )
}