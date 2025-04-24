// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';


// export function middleware(request: NextRequest) {
//     const userCookie = request.cookies.get('loggedInUser');
//     console.log('User Cookie:', userCookie);
    
  
//     const path = request.nextUrl.pathname;
  
//     const isDashboardRoute = path === '/' || path.startsWith('/dashboard');
//     const isAuthRoute = path === '/login' || path === '/signup';
  
//     // Redirect to login if accessing dashboard without login
//     if (!userCookie && isDashboardRoute) {
//       return NextResponse.redirect(new URL('/login', request.url));
//     }
  
//     // Redirect to dashboard if already logged in and tries to access login/signup
//     if (userCookie && isAuthRoute) {
//       return NextResponse.redirect(new URL('/dashboard', request.url));
//     }
  
//     return NextResponse.next();
//   }
  

// export const config = {
//   matcher: [
//     '/',
//     '/dashboard',
//     '/login',
//     '/signup',
//   ],
// };




import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_PATHS = [ '/dashboard',"/"];
const AUTH_PATHS = ['/login', '/signup',,'/forgotpassword','/verifyemail'];
// let count = 0

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userCookie = request.cookies.get('loggedInUser');
  
  const isProtectedRoute = PROTECTED_PATHS.includes(pathname) 

const isAuthRoute = AUTH_PATHS.includes(pathname);

// console.log('User Cookie:', userCookie, count++,isAuthRoute,isProtectedRoute);

  //  Redirect unauthenticated user login
  if (!userCookie && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Reject authenticated user access login/signup
  if (userCookie && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/login', '/signup','/forgotpassword','/verifyemail'],
};
