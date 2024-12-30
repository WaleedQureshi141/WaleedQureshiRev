import { z } from "zod";

export const updateTicketSchema = z.object(
    {
        id: z.number(),
        status: z.string(),
    }
)

export type TicketUpdateSchema = z.infer<typeof updateTicketSchema>;