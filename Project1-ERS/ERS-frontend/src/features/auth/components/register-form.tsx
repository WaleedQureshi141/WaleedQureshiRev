import { useState } from "react";
import { FormField, 
    FormItem, 
    FormLabel, 
    FormControl, 
    FormDescription, 
    FormMessage, 
    Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema, RegisterSchema } from "../schemas/register-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRegister } from "./hooks/use-register";
import { toast } from "sonner";
    
export function RegisterForm()
{
    const {mutate: register, isPending} = useRegister();

    // 1. Define your form.
    const form = useForm<RegisterSchema>(
        {
            resolver: zodResolver(registerFormSchema),
            defaultValues: {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                confirm_password: "",
            },
        }
    )

    // 2. Define a submit handler.
    function onSubmit(values: RegisterSchema) 
    {
        if (values.confirm_password !== values.password)
        {
            form.setError("confirm_password", {message: "PASSWORDS DO NOT MATCH"});
            return;
        }

        register(values);
        form.reset();
    }
 
    return (
        <div className="flex h-screen justify-center items-center bg-gray-600">
            <Card className="w-[350px] dark text-white shadow-lg">
                <CardHeader>
                    <CardTitle>REGISTER</CardTitle>
                    <CardDescription>Create A New Account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="First Name" {...field} />
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Last Name" {...field} />
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="username" {...field} />
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirm_password"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Confirm Password" {...field}/>
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-center gap-9">
                                <Button type="submit" disabled={isPending}>REGISTER</Button>
                                <Button variant={"destructive"} disabled={isPending}>LOGIN INSTEAD</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )

    // const [firstName, setFirstName] = useState<string>("");
    // const [lastName, setLastName] = useState<string>("");
    // const [username, setUsername] = useState<string>("");
    // const [password, setPassword] = useState<string>("");

    // return (


    //     <div>
    //     <FormHeader/>
    //     <FormContent
    //         firstName={firstName}
    //         setFirstName={setFirstName}
    //         lastName={lastName}
    //         setLastName={setLastName}
    //         username={username}
    //         setUsername={setUsername}
    //         password={password}
    //         setPassword={setPassword}
    //         />
    //     </div>
    // )
// }

// function FormHeader()
// {
//     return (
//         <div>
//             <h1>REGISTER</h1>
//             <p>Please Enter Your Information</p>
//         </div>
//     )
// }

// interface FormContentProps
// {
//     firstName: string;
//     setFirstName: (firstName: string) => void;
//     lastName: string;
//     setLastName: (lastName: string) => void;
//     username: string;
//     setUsername: (username: string) => void;
//     password: string;
//     setPassword: (password: string) => void;
// }

// function FormContent({firstName, setFirstName
//     , lastName, setLastName
//     , username, setUsername
//     , password, setPassword}: FormContentProps)
// {
//     return (
//         <div className="flex flex-col w-64">
//             <Input value={firstName} setValue={setFirstName} placeholder="First Name"/>
//             <Input value={lastName} setValue={setLastName} placeholder="Last Name"/>
//             <Input value={username} setValue={setUsername} placeholder="Username"/>
//             <Input value={password} setValue={setPassword} placeholder="Password" type="password"/>

//             <Button>ENTER</Button>
//         </div>
//     )
}