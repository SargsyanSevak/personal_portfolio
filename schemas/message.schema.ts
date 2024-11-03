import * as z from "zod";

export const messageSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, {
      message: "Email should contain a minimum of 3 characters",
    })
    .email("Invalid email address"),
  full_name: z.string().min(1, "Full name is required").min(2, {
    message: "The full name field must be between 2 and 50 characters.",
  }),
  company: z.string().optional(),
  message: z.string().min(1, "Message text is missing").min(2, {
    message: "The message text must be between 1 and 5000 characters.",
  }),
});
