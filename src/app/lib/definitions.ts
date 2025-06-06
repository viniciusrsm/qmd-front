import { z } from 'zod';

export const SignupFormSchema = z
  .object({
    email: z.string().email({ message: 'Insira um e-mail válido' }).trim(),
    password: z
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
      .trim(),
    confirmPassword: z
      .string()
      .trim()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword']
  });


 
export type FormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
  userId: string;
  expiresAt: Date;
}