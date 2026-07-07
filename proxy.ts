import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, password] = atob(authValue).split(':')

    const validUser = process.env.PREVIEW_USERNAME || 'annie'
    const validPassword = process.env.PREVIEW_PASSWORD || 'ttl4g-preview-2026'

    if (user === validUser && password === validPassword) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="TTL4G Preview"',
    },
  })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (so booking/contact forms still work in preview)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}
