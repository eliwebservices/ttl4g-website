'use client'

import { useState } from 'react'
import Link from 'next/link'

const countries = [
  {
    flag: "🇨🇳", country: "China",
    dynamics: "Chinese business culture is built on Guanxi (relationships) and Mianzi (face). Decision-making is hierarchical, and trust is established over time through personal connections rather than contracts alone.",
    pitfalls: "Rushing negotiations, ignoring hierarchy, being too direct with criticism, failing to build personal relationships before business discussions, and misunderstanding the role of banquets in deal-making.",
    approach: "We train teams in Guanxi-building, face-saving communication, hierarchical respect, banquet etiquette, and negotiation pacing adapted for Sino-African partnerships.",
  },
  {
    flag: "🇩🇪", country: "Germany",
    dynamics: "German business culture values precision, punctuality, and thorough preparation. Communication is direct and fact-based. Decisions are made through consensus after careful analysis.",
    pitfalls: "Arriving late, being unprepared with data, making emotional appeals over factual presentations, and confusing directness with rudeness.",
    approach: "Our programs cover German meeting protocols, presentation standards, decision-making processes, and how to build credibility through competence and reliability.",
  },
  {
    flag: "🇮🇳", country: "India",
    dynamics: "Indian business is relationship-driven with respect for hierarchy and seniority. Communication can be indirect, and flexibility in timelines is common. Family values often influence business decisions.",
    pitfalls: "Being too rigid with timelines, failing to respect seniority, missing the nuances of indirect communication, and underestimating the importance of personal rapport.",
    approach: "We help teams navigate Indian business hierarchy, interpret indirect communication, build rapport across the relationship-first culture, and manage flexible timelines effectively.",
  },
  {
    flag: "🇬🇧", country: "United Kingdom",
    dynamics: "British business culture is formal yet understated. Humor and understatement are common. Meetings follow strict agendas, and politeness is paramount even in disagreement.",
    pitfalls: "Taking British politeness at face value, missing subtle disagreement cues, being too informal too quickly, and underestimating the importance of proper introductions.",
    approach: "Our training covers British communication subtleties, meeting etiquette, networking protocols, and how to read between the lines of polite British discourse.",
  },
  {
    flag: "🇺🇸", country: "United States",
    dynamics: "American business culture is fast-paced, results-oriented, and relatively informal. Networking is aggressive, pitches are expected to be concise, and individual achievement is celebrated.",
    pitfalls: "Being too formal, lengthy presentations without clear ROI, hesitating to self-promote, and underestimating the importance of personal branding.",
    approach: "We train teams in American pitch culture, networking strategies, direct communication styles, and how to navigate the fast-paced deal-making environment.",
  },
  {
    flag: "🇳🇬", country: "Nigeria (Home Base)",
    dynamics: "Nigerian business culture blends traditional respect for elders and hierarchy with entrepreneurial dynamism. Relationships and trust are foundational, and adaptability is a key strength.",
    pitfalls: "For international partners: underestimating Nigerian business sophistication, applying stereotypes, ignoring regional cultural differences, and failing to respect relationship-building timelines.",
    approach: "We help international teams understand Nigeria's diverse business landscape, regional dynamics, communication styles, and how to build authentic partnerships that last.",
  },
]

export default function CountrySelector() {
  const [selected, setSelected] = useState(0)

  return (
    <>
      {/* Country Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {countries.map((c, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`px-5 py-3 rounded-xl border text-sm font-semibold transition-all ${
              selected === i
                ? 'bg-[#D4A017] text-[#1A3320] border-[#D4A017] shadow-lg'
                : 'bg-white border-gray-200 text-[#1A3320] hover:border-[#D4A017]/50'
            }`}
          >
            {c.flag} {c.country}
          </button>
        ))}
      </div>

      {/* Selected Country Detail Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{countries[selected].flag}</span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1A3320]">
                {countries[selected].country}
              </h3>
              <p className="text-sm text-gray-400">Cultural Intelligence Profile</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-2">
                Key Cultural Dynamics
              </h4>
              <p className="text-gray-500 leading-relaxed">
                {countries[selected].dynamics}
              </p>
            </div>
            <div>
              <h4 className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-2">
                Common Business Pitfalls
              </h4>
              <p className="text-gray-500 leading-relaxed">
                {countries[selected].pitfalls}
              </p>
            </div>
            <div>
              <h4 className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-2">
                TTL4G's Approach
              </h4>
              <p className="text-gray-500 leading-relaxed">
                {countries[selected].approach}
              </p>
            </div>
          </div>

          <Link
            href="/book"
            className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full inline-block mt-8 hover:bg-[#b8880f] transition-colors"
          >
            Request Training for This Region
          </Link>
        </div>
      </div>
    </>
  )
}
