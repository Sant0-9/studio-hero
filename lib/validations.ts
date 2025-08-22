import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Tell us a bit more (min 10 chars)").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
