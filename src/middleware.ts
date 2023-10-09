import { NextRequest, NextResponse } from 'next/server';

// inlcude any additional brand name in the array and the matcher regexp
const BRANDS_NAMES = ['lyfepay', 'easymerchant'];

// make sure the brand name is exactly the same in the regexp as in the array above
// this will exlude redirects from the public folders that contain site assets
// like favicons, manifest etc.
export const config = {
  matcher: [`/((?!_next|lyfepay|easymerchant|[\\w-]+\\.\\w+).*)`],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  let currentHost = '';

  switch (process.env.NODE_ENV) {
    case 'production':
      // use your domain suffix to replace here
      const prodHost = req.headers.get('host');
      if (prodHost) {
        const arr = prodHost.replace('.vercel.app', '').split('.'); //  only for vercel deployment
        // const arr = prodHost.split('.');

        BRANDS_NAMES.every((brand) => {
          const hostIndex = arr.indexOf(brand);
          if (hostIndex >= 0) {
            currentHost = arr[hostIndex];

            return false;
          }

          return true;
        });
      }

      break;

    case 'development':
      // Get hostname of request (e.g. demo.example.pub, demo.localhost:3000)
      const localHost = req.headers.get('host');
      if (localHost) {
        currentHost = localHost.replace('.localhost:3000', '');
      }
      break;
  }

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname;

  let rewritePath = new URL('/', req.url);

  BRANDS_NAMES.every((brand) => {
    if (currentHost === brand) {
      rewritePath = new URL(`/${brand}${path}`, req.url);
      return false;
    }

    return true;
  });

  return NextResponse.rewrite(rewritePath);
}
