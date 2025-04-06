let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts - allow self and specific CDNs
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://app.posthog.com",
              // Styles - allow self and unsafe-inline for Next.js
              "style-src 'self' 'unsafe-inline'",
              // Images - allow self and specific image hosts
              "img-src 'self' data: https: blob:",
              // Fonts - allow self and Google Fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Connect - allow specific APIs
              "connect-src 'self' https://app.posthog.com https://vitals.vercel-insights.com",
              // Media - restrict to self
              "media-src 'self'",
              // Object/Embed - restrict completely
              "object-src 'none'",
              // Frame - restrict to self
              "frame-src 'self'",
              // Base URI - restrict to self
              "base-uri 'self'",
              // Form actions - restrict to self
              "form-action 'self'",
              // Manifest - allow self
              "manifest-src 'self'"
            ].join('; ')
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  }
}

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return nextConfig
  }

  const mergedConfig = { ...nextConfig }

  for (const key in userConfig) {
    if (
      typeof mergedConfig[key] === 'object' &&
      !Array.isArray(mergedConfig[key])
    ) {
      mergedConfig[key] = {
        ...mergedConfig[key],
        ...userConfig[key],
      }
    } else {
      mergedConfig[key] = userConfig[key]
    }
  }

  return mergedConfig
}

export default mergeConfig(nextConfig, userConfig)
