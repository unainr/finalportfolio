"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validation";
import { Textarea } from "@/components/ui/textarea";
import { Check, Loader2 } from "lucide-react";
import { formAction } from "@/lib/actions/form.action";
import { toast } from "sonner";

const MainForm = () => {
	const [Loading, setLoading] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true)
            const response = await formAction(values)
            if(response.success){
                setLoading(false)
                form.reset()
                toast.success('Message sent successfully!')
            }else{
               toast.error(response.error || "Something went wrong");
            }
           
        } catch (error:any) {
            toast.error(error.message||'Something went wrong')
        }finally{
            setLoading(false)
        }
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Enter your name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Enter your email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Textarea
                                
									className="col-span-3"
									placeholder="Enter your message"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					disabled={Loading}
					className="w-full bg-gradient-to-b cursor-pointer from-rose-500 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
					{Loading ? (
						<span className="flex items-center justify-center">
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Sending...
						</span>
					) : Loading ? (
						<span className="flex items-center justify-center">
							<Check className="mr-2 h-4 w-4" />
							Message Sent!
						</span>
					) : (
						<span>Send Message</span>
					)}
				</Button>
			</form>
		</Form>
	);
};

export default MainForm;
