interface Window {
  dataLayer: any[]
  posthog: {
    opt_in_capturing: () => void
    opt_out_capturing: () => void
  }
} 