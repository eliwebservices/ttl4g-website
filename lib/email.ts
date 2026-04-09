import { Resend } from 'resend'
import type { ContactInput, BookingInput } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY!)
const FROM = process.env.RESEND_FROM_EMAIL!
const NOTIFY = process.env.NOTIFICATION_EMAIL!

// ── Contact form notification to client ──
export async function sendContactNotification(data: ContactInput) {
  await resend.emails.send({
    from: FROM,
    to: NOTIFY,
    subject: `New Contact Message: ${data.subject}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #1A3320;">New Contact Message — TTL4G</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Name</td><td>${data.full_name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td>${data.email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td>${data.phone ?? 'Not provided'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Subject</td><td>${data.subject}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
          <strong>Message:</strong>
          <p>${data.message}</p>
        </div>
        <p style="color: #888; font-size: 12px; margin-top: 24px;">Sent from TTL4G website contact form</p>
      </div>
    `,
  })
}

// ── Booking notification to client ──
export async function sendBookingNotification(data: BookingInput) {
  await resend.emails.send({
    from: FROM,
    to: NOTIFY,
    subject: `🔔 New Discovery Call Request — ${data.full_name} (${data.organization})`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #1A3320;">New Discovery Call Request — TTL4G</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Name</td><td>${data.full_name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td>${data.email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td>${data.phone ?? 'Not provided'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Organization</td><td>${data.organization}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Role</td><td>${data.role}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Service Interest</td><td>${data.service_interest}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Team Size</td><td>${data.team_size ?? 'Not provided'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Country</td><td>${data.country ?? 'Not provided'}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
          <strong>Their Challenge:</strong>
          <p>${data.challenge}</p>
        </div>
        <p style="color: #888; font-size: 12px; margin-top: 24px;">Sent from TTL4G booking form</p>
      </div>
    `,
  })
}

// ── Booking confirmation to visitor ──
export async function sendBookingConfirmation(email: string, name: string) {
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: `Your Discovery Call Request — TTL4G`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #1A3320;">Thank You, ${name}!</h2>
        <p>We have received your discovery call request and our team will be in touch within <strong>24 hours</strong> to confirm your session.</p>
        <div style="margin: 24px 0; padding: 20px; background: #1A3320; border-radius: 8px; color: white;">
          <p style="margin: 0; font-size: 16px;">What to expect on your call:</p>
          <ul style="margin-top: 12px;">
            <li>30-minute free consultation</li>
            <li>Discussion of your leadership and organizational challenges</li>
            <li>Tailored recommendations from our team</li>
            <li>A clear next step — no pressure</li>
          </ul>
        </div>
        <p>In the meantime, feel free to explore our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/insights" style="color: #D4A017;">latest leadership insights</a>.</p>
        <p>Talk soon,<br/><strong>The TTL4G Team</strong></p>
      </div>
    `,
  })
}

// ── Welcome email to new subscriber ──
export async function sendWelcomeEmail(email: string, name?: string) {
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: `Welcome to TTL4G Insights!`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #1A3320;">Welcome${name ? `, ${name}` : ''}!</h2>
        <p>You are now subscribed to <strong>TTL4G Weekly Insights</strong> — practical leadership wisdom, cross-cultural intelligence, and performance strategies delivered to your inbox.</p>
        <p>Look out for your first edition soon.</p>
        <p>— The TTL4G Team</p>
      </div>
    `,
  })
}

// ── Lead magnet delivery email ──
export async function sendLeadMagnetEmail(email: string, name: string) {
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: `Your Free Guide: 5 Cultural Mistakes That Kill Nigeria-China Business Deals`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #1A3320;">Here is Your Free Guide, ${name}!</h2>
        <p>Thank you for your interest in TTL4G's Sino-Africa expertise. Your free guide is attached to this email.</p>
        <div style="margin: 24px 0; padding: 20px; background: #D4A017; border-radius: 8px; color: #1A3320;">
          <strong>📘 5 Cultural Mistakes That Kill Nigeria-China Business Deals</strong>
          <p style="margin-top: 8px; margin-bottom: 0;">Inside: Real workplace scenarios, communication pitfalls, and how to build lasting Sino-Africa partnerships.</p>
        </div>
        <p>Ready to go deeper? <a href="${process.env.NEXT_PUBLIC_SITE_URL}/book" style="color: #D4A017;">Book a free discovery call</a> with our cross-cultural specialists.</p>
        <p>— The TTL4G Team</p>
      </div>
    `,
  })
}
