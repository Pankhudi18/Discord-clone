// import {
//   clerkMiddleware,
//   createRouteMatcher
// } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher([
//   '/',
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
//   publicRoutes: ["/api/uploadthing"];

//   auth().protect();
// });

// export const config = {
//   matcher: ['/((?!.\\..|_next).)', '/', '/(api|trpc)(.)'],
// };



import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/', 
]);

export default clerkMiddleware((auth, req) => {
  if (!isProtectedRoute(req)) return; 
  
  auth().protect();
});

export const config = {
  api: {
    bodyParser: false, 
  },
};
