import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, req) => {
  const { userId } = auth();
  const url = new URL(req.url);

  // Redirect authenticated users from `/` to `/dashboard`
  if (url.pathname === '/' && userId) {
    return Response.redirect(new URL('/dashboard', req.url));
  }

  // Protect all routes except `/`, `/sign-in`, `/sign-up`
  const isPublic = ['/', '/sign-in', '/sign-up'].some((route) =>
    url.pathname.startsWith(route)
  );

  if (!isPublic) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Apply middleware to all routes except static files and Next.js internals
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
