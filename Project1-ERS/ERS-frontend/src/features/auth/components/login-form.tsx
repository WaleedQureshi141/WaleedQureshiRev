import { useForm } from "react-hook-form";
import { loginFormSchema, LoginSchema } from "../schemas/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "./hooks/use-login";

export function LoginForm()
{
    const {mutate: login, isPending} = useLogin();

    // 1. Define your form.
    const form = useForm<LoginSchema>(
        {
            resolver: zodResolver(loginFormSchema),
            defaultValues: {
                username: "",
                password: "",
            },
        }
    )

    // 2. Define a submit handler.
    function onSubmit(values: LoginSchema) 
    {
        login(values);
    }
 
    return (
        <div className="flex h-screen justify-center items-center bg-gray-600">
            <Card className="w-[350px] dark text-white shadow-lg">
                <CardHeader>
                    <CardTitle>LOGIN</CardTitle>
                    {/* <CardDescription>Create A New Account</CardDescription> */}
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                            <div className="flex justify-center gap-9 pt-8" >
                                <Button type="submit" disabled={isPending}>LOGIN</Button>
                                <Button variant={"destructive"}>REGISTER INSTEAD</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}