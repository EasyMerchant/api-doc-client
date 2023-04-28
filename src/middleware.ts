import { NextRequest, NextResponse } from 'next/server';
import { parse as domainParse } from 'tldts';

// docs.easymerchant.io
// developers.lyfepay.io

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
      const { domainWithoutSuffix } = domainParse(req.url);
      if (domainWithoutSuffix) {
        currentHost = domainWithoutSuffix;
      }

      break;

    case 'development':
      // Get hostname of request (e.g. demo.example.pub, demo.localhost:3000)
      const hostname = req.headers.get('host');
      if (hostname) {
        currentHost = hostname.replace(`.localhost:3000`, '');
      }
      break;
  }

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname;

  let rewritePath = new URL('/', req.url);

  BRANDS_NAMES.forEach((brand) => {
    if (currentHost === brand) {
      rewritePath = new URL(`/${brand}${path}`, req.url);
    }
  });

  return NextResponse.rewrite(rewritePath);
}
