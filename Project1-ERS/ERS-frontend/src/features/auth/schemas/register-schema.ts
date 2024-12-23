import { z } from "zod"

export const registerFormSchema = z.object(
    {
        firstName: 
        z.string({required_error: "Please Enter A First Name",})
        .regex(/^[a-zA-Z]+(-[a-zA-Z]+)*$/, "Please Use Alphabets Only"),
        lastName: 
        z.string({required_error: "Please Enter A Last Name",})
        .regex(/^[a-zA-Z]+(-[a-zA-Z]+)*$/, "Please Use Alphabets Only"),
        username: 
        z.string({required_error: "Please Enter A Username",}),
        password:
        z.string({required_error: "Please Enter A Password"}),
        confirm_password:
        z.string({required_error: "Please Enter A Password"}),
    }
);

export type RegisterSchema = z.infer<typeof registerFormSchema>;