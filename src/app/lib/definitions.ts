import { z } from 'zod'
import { User } from '@/types/auth.types'

export const SignupFormSchema = z.object({
  email: z.string().email({ message: 'Insira um e-mail válido' }).trim(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .trim()
})
 
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