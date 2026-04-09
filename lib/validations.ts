import { z } from 'zod'

export const contactSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const bookingSchema = z.object({
  full_name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  organization: z.string().min(2, 'Organization is required'),
  role: z.string().min(2, 'Your role is required'),
  service_interest: z.string().min(1, 'Please select a service'),
  team_size: z.string().optional(),
  country: z.string().optional(),
  challenge: z.string().min(10, 'Please describe your challenge'),
})

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  full_name: z.string().optional(),
  source: z.string().optional(),
})

export const leadSchema = z.object({
  full_name: z.string().min(2),
  email: z.string().email(),
  source: z.string().default('lead_magnet'),
})

export const chatSchema = z.object({
  message: z.string().min(1).max(1000),
  session_id: z.string(),
  history: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
export type BookingInput = z.infer<typeof bookingSchema>
export type NewsletterInput = z.infer<typeof newsletterSchema>
export type LeadInput = z.infer<typeof leadSchema>
export type ChatInput = z.infer<typeof chatSchema>
