"use server"

import { db } from "@/drizzle/db"
import { form } from "@/drizzle/schema"
import { FormAction } from "@/types"

export const formAction = async (params:FormAction)=>{

    try {
        const response = await db.insert(form).values(params).returning()
        if (!response || response.length === 0) {
      throw new Error("Form submission failed.");
    }
            return {success:true,data:response[0]}
    } catch (error:any) {
        return {
      success: false,
      error: error.message ?? "Unknown error occurred",
    };
        
    }

}