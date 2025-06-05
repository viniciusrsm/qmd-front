import { decrypt } from '@/app/lib/encryption'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
 
const protectedRoutes = ['/dividas', '/devedores']
const publicRoutes = ['/login', '/']
 
export default async function middleware(req: NextRequest) {
    console.log('Middleware triggered for:', req.nextUrl.pathname)
    const path = req.nextUrl.pathname
    if (path.startsWith('/login')) {
      return NextResponse.next()
    }
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

 
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
 
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
 
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/dividas')
  ) {
    return NextResponse.redirect(new URL('/dividas', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}