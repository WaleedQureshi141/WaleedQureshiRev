import { z } from "zod";

export const updateUserSchema = z.object(
    {
        id: z.number(),
    }
);

export type UserUpdateSchema = z.infer<typeof updateUserSchema>;