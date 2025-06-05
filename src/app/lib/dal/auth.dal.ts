import 'server-only'
 
import { decrypt } from '@/app/lib/encryption'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { cache } from 'react'
 
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
 
  if (!session?.userId) {
    redirect('/login')
  }
 
  return { isAuth: true, userId: session.userId }
})