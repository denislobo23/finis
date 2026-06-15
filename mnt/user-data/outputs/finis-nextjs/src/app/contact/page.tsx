'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Mail, MapPin, Building2, Globe } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="bg-navy px-[5%] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyan bg-grid" />
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow">Engage Finis</p>
          <h1 className="font-serif text-5xl text-white font-bold leading-tight mb-4">
            Start with a process intelligence session
          </h1>
          <p className="text-white/40 font-light text-lg leading-relaxed">
            In 90 minutes, we'll map your highest-friction process, identify where AI can intervene, and give you a quantified estimate of what's recoverable. No obligation. Real findings.
          </p>
        </div>
      </section>

      <section className="bg-white px-[5%] py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20">

          {/* Left */}
          <div>
            <h2 className="font-serif text-2xl text-navy font-bold mb-2">Get in touch</h2>
            <p className="text-sm text-slate font-light mb-10 leading-relaxed">We work with businesses across Australia remotely and on-site in Melbourne and surrounding regions.</p>

            {[
              { icon: <Mail size={18} />, label: 'Email', value: 'info@finis.com.au' },
              { icon: <MapPin size={18} />, label: 'Location', value: 'Melbourne, Victoria, Australia' },
              { icon: <Building2 size={18} />, label: 'Registered', value: 'Finis Business Solutions' },
              { icon: <Globe size={18} />, label: 'Service area', value: 'Australia-wide · Remote & On-site' },
            ].map((d) => (
              <div key={d.label} className="flex gap-4 items-start mb-6">
                <div className="w-10 h-10 bg-cyan-finis/10 border border-cyan-finis/20 rounded flex items-center justify-center text-cyan-finis flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <span className="font-mono text-[0.62rem] font-medium tracking-[0.12em] uppercase text-steel block mb-0.5">{d.label}</span>
                  <span className="text-[0.9rem] text-navy">{d.value}</span>
                </div>
              </div>
            ))}

            <div className="mt-10 relative h-48 rounded overflow-hidden border border-mist">
              <Image src="/images/melbourne-city.jpg" alt="Melbourne Australia" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-navy/40" />
              <div className="absolute bottom-4 left-4 font-mono text-[0.62rem] text-white/50 tracking-[0.1em] uppercase">Melbourne · Victoria · Australia</div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-mist rounded p-10">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-cyan-finis/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-finis text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-xl text-navy font-bold mb-2">Message received</h3>
                <p className="text-sm text-slate font-light">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl text-navy font-bold mb-1">Request a Discovery Session</h3>
                <p className="text-sm text-slate font-light mb-8">We respond within one business day.</p>

                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase text-steel">First Name</label>
                      <input type="text" placeholder="First name" className="border-[1.5px] border-mist rounded-sm px-4 py-3 text-[0.875rem] text-navy bg-fog focus:border-cyan-finis focus:bg-white outline-none transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase text-steel">Last Name</label>
                      <input type="text" placeholder="Last name" className="border-[1.5px] border-mist rounded-sm px-4 py-3 text-[0.875rem] text-navy bg-fog focus:border-cyan-finis focus:bg-white outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase text-steel">Business Email</label>
                    <input type="email" placeholder="you@yourcompany.com.au" className="border-[1.5px] border-mist rounded-sm px-4 py-3 text-[0.875rem] text-navy bg-fog focus:border-cyan-finis focus:bg-white outline-none transition-colors" />
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase text-steel">Organisation</label>
                      <input type="text" placeholder="Company name" className="border-[1.5px] border-mist rounded-sm px-4 py-3 text-[0.875rem] text-navy bg-fog focus:border-cyan-finis focus:bg-white outline-none transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase text-steel">Team Size</label>
                      <select className="border-[1.5px] border-mist rounded-sm px-4 py-3 text-[0.875rem] text-navy bg-fog focus:border-cyan-finis focus:bg-white outline-none transition-colors">
                        <option value="">Select size</option>
                        <option>1–10 employees</option>
                        <option>11–50 employees</option>
                        <option>51–200 employees</option>
                        <option>200+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase text-steel">Primary Challenge</label>
                    <select className="border-[1.5px] border-mist rounded-sm px-4 py-3 text-[0.875rem] text-navy bg-fog focus:border-cyan-finis focus:bg-white outline-none transition-colors">
                      <option value="">Select focus area</option>
                      <option>AI Process Modelling</option>
                      <option>Workflow Redesign</option>
                      <option>Automation Architecture</option>
                      <option>Process Mining</option>
                      <option>Execution & Performance Systems</option>
                      <option>AI Adoption & Change</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase text-steel">Describe your situation</label>
                    <textarea rows={4} placeholder="What's the process or execution challenge you're trying to solve?" className="border-[1.5px] border-mist rounded-sm px-4 py-3 text-[0.875rem] text-navy bg-fog focus:border-cyan-finis focus:bg-white outline-none transition-colors resize-y" />
                  </div>

                  <button onClick={() => setSent(true)} className="w-full bg-navy text-white font-semibold text-sm py-4 rounded-sm hover:bg-navy-3 transition-colors">
                    Request Discovery Session →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
