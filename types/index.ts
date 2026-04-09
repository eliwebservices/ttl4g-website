export type LeadStatus = 'new' | 'qualified' | 'booked' | 'client' | 'cold'
export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'
export type MessageStatus = 'unread' | 'read' | 'replied'

export interface Lead {
  id: string
  full_name: string
  email: string
  phone?: string
  organization?: string
  role?: string
  country?: string
  team_size?: string
  service_interest?: string
  challenge?: string
  source: string
  status: LeadStatus
  notes?: string
  created_at: string
}

export interface Booking {
  id: string
  lead_id?: string
  calendar_event_id?: string
  scheduled_at?: string
  status: BookingStatus
  intake_submitted: boolean
  notes?: string
  created_at: string
}

export interface Subscriber {
  id: string
  email: string
  full_name?: string
  subscribed: boolean
  source?: string
  created_at: string
}

export interface Message {
  id: string
  full_name: string
  email: string
  phone?: string
  subject?: string
  message: string
  status: MessageStatus
  created_at: string
}

export interface Post {
  id: string
  title: string
  slug: string
  excerpt?: string
  content?: string
  category?: string
  cover_image?: string
  published: boolean
  published_at?: string
  author: string
  created_at: string
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export interface ChatSession {
  id: string
  session_id: string
  messages: ChatMessage[]
  lead_captured: boolean
  lead_id?: string
  created_at: string
  updated_at: string
}
