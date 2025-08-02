import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    email: z.string().min(2,{
      message: "email must be at least 2 characters.",
    }),
    message: z.string().min(10, {
      message: "message must be at least 10 characters.",
    }),
})