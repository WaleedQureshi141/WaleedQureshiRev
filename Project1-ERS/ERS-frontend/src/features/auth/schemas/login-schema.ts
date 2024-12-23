import { z } from "zod";

export const loginFormSchema = z.object(
    {
        username:
        z.string().min(1),
        password:
        z.string().min(8)
    }
);

export type LoginSchema = z.infer<typeof loginFormSchema>;