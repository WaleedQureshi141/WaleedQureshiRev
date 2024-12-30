import { z } from "zod";

export const delUserSchema = z.object(
    {
        id: z.number(),
    }
)

export type TicketDelSchema = z.infer<typeof delUserSchema>;