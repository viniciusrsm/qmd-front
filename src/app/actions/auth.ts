import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import { createSession, deleteSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';
 
export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  
  // db req

  const user = {
    id: '12345',
  };

  await createSession(user.id);
  redirect('/dados')
}

export async function logout() {
  await deleteSession();
  redirect('/');
}