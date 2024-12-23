import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addTicketFormSchema, AddTicketSchema } from "../schemas/add-ticket-schema";
import { Textarea } from "@/components/ui/textarea";

export function AddTicketForm()
{
    // 1. Define your form.
    const form = useForm<AddTicketSchema>(
        {
            resolver: zodResolver(addTicketFormSchema),
            defaultValues: {
                description: "",
                amount: 0.0,
            },
        }
    )

    // 2. Define a submit handler.
    function onSubmit(values: AddTicketSchema) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }
 
    return (
        // note to self: try to make this a popup, 
        // if unable to do that, keep this as a page like registration and login
        <div className="flex h-screen justify-center items-center bg-black bg-opacity-80">
            <Card className="w-[400px] dark text-white shadow-lg">
                <CardHeader>
                    <CardTitle>ADD TICKET</CardTitle>
                    <CardDescription>Request Reimbursement</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe your reason for the ticket..." 
                                        className="h-28"
                                        maxLength={150} 
                                        {...field}/>
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-center gap-9 pt-8" >
                                <Button type="submit">LOGIN</Button>
                                <Button variant={"destructive"} type="submit">REGISTER INSTEAD</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}