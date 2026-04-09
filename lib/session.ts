export function getSessionId(): string {
    if (typeof window === 'undefined') return ''
    
    const key = 'ttl4g_session_id'
    let sessionId = localStorage.getItem(key)
    
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
      localStorage.setItem(key, sessionId)
    }
    
    return sessionId
  }
  