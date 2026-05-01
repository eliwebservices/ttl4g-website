'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'discovery-call' })
      cal('ui', {
        styles: { branding: { brandColor: '#D4A017' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <Cal
      namespace="discovery-call"
      calLink="eli-web-services/free-discovery-call"
      style={{ width: '100%', height: '100%', minHeight: '600px', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  )
}
