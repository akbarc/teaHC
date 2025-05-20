import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl

  // Check if the path starts with /admin and is not the login page
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check if the user is authenticated
    const authCookie = request.cookies.get('admin_auth')
    
    // If no auth cookie exists, redirect to the login page
    if (!authCookie || authCookie.value !== 'true') {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }
  }

  // If the user is already authenticated and tries to access login page, redirect to admin
  if (pathname === '/admin/login') {
    const authCookie = request.cookies.get('admin_auth')
    
    if (authCookie && authCookie.value === 'true') {
      const url = request.nextUrl.clone()
      url.pathname = '/admin'
      return NextResponse.redirect(url)
    }
  }

  // Add cache control headers for admin routes to prevent caching
  if (pathname.startsWith('/admin')) {
    const response = NextResponse.next()
    response.headers.set('Cache-Control', 'no-store, must-revalidate')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
} 