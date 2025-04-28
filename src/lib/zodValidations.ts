// import { z } from "zod";

// export const formSchema = z.object({
//   username: z.string().min(2, { message: "Username must be at least 2 characters." }),
//   email: z.string().email({ message: "Invalid email address." }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters." }),
//   skills: z.array(z.string()).min(1, { message: "At least one skill is required." }),
// });

// export const loginSchema = z.object({
//   email: z.string().email({ message: "Invalid email address." }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters." }),
// });

// export type SignupFormValues = z.infer<typeof formSchema>;
// export type LoginFormValues = z.infer<typeof loginSchema>;




import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  skills: z.array(z.string().trim().min(1, { message: "Skill cannot be empty." }))
    .min(1, { message: "At least one skill is required." }).optional(),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export type SignupFormValues = z.infer<typeof formSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;