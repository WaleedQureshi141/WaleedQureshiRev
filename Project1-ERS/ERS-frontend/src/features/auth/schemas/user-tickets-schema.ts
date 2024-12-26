import { z } from "zod";

export const userTicketsTableSchema = z.object(
    {
        id: z.number(),
        description: z.string(),
        amount: z.string(),
        status: z.string(),
    }
);

export type UserTicketsSchema = z.infer<typeof userTicketsTableSchema>;