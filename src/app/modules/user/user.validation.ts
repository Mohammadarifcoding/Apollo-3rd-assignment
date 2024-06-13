import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email("Invalid email address"),
    role: z.enum(['user', 'admin']),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    phone: z.string(),
    address: z.string()
  })
   
});

export const UserValidation = {
  userValidationSchema,
};
