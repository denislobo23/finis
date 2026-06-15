import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'The Neuroscience of Finishing: Why Smart Teams Leave Work Incomplete — Finis Business Solutions',
  description: 'The Zeigarnik effect, cognitive switching costs and the planning fallacy all conspire against completion. Understanding the science changes how you design work systems.',
}

const effects = [
  {
    id: 'E_01',
    title: 'The Zeigarnik Effect',
    body: 'In 1927, Soviet psychologist Bluma Zeigarnik documented that people remember uncompleted tasks far better than completed ones. The brain keeps an open loop for every unfinished item — a background process that consumes cognitive resources even when you\'re not consciously thinking about the task. In a modern knowledge worker\'s day, with dozens of open loops running simultaneously, this creates a chronic cognitive load that degrades focus, decision quality and execution speed.',
    implication: 'System implication: work systems that generate large numbers of open loops — multiple concurrent projects, unclear handoffs, no explicit task closure — impose a hidden cognitive tax on everyone in them.',
  },
  {
    id: 'E_02',
    title: 'The Planning Fallacy',
    body: 'First described by Daniel Kahneman and Amos Tversky in 1979, the planning fallacy is the systematic tendency to underestimate the time, cost and risk of future actions while overestimating the benefits. It affects experts as much as novices. It persists even when people are explicitly warned about it. And it is dramatically worse for complex, novel tasks — exactly the kind that constitute most meaningful business work.',
    implication: 'System implication: planning processes that rely on individual estimation without reference to historical data, process models or base rates will systematically produce timelines that cannot be met.',
  },
  {
    id: 'E_03',
    title: 'Cognitive Switching Costs',
    body: 'Every time a knowledge worker switches between tasks, there is a neurological cost: the prefrontal cortex must disengage from one task\'s context and load another\'s. Research from the American Psychological Association estimates that switching costs can reduce productivity by up to 40%. For complex tasks requiring deep focus, the cost is higher still — it can take 20+ minutes to fully re-engage with a task after an interruption.',
    implication: 'System implication: work environments and meeting cultures that fragment attention across multiple priorities simultaneously don\'t just slow people down — they structurally prevent the kind of deep work that complex tasks require.',
  },
  {
    id: 'E_04',
    title: 'The Ovsiankina Effect',
    body: 'A lesser-known cousin of the Zeigarnik effect, documented by Maria Ovsiankina in 1928: interrupted tasks create a quasi-need state — a psychological tension that compels resumption. When resumption is blocked by competing priorities, this tension doesn\'t dissipate. It accumulates, creating the experience that many knowledge workers describe as being "overwhelmed" without being able to identify a specific cause.',
    implication: 'System implication: task management systems that allow work to be interrupted and re-queued indefinitely — without explicit prioritisation or closure — create chronic Ovsiankina tension across the workforce.',
  },
]

const designs = [
  { id: 'D_01', title: 'Explicit task closure', desc: 'Every piece of work must have a defined completion state. Not "in progress" or "ongoing" — a specific, verifiable condition that constitutes done. This closes the Zeigarnik loop and frees cognitive resources.' },
  { id: 'D_02', title: 'Single-priority sequencing', desc: 'Rather than parallel workstreams competing for attention, high-value work is sequenced so that one thing is the explicit priority at any given time. Context switching is scheduled, not reactive.' },
  { id: 'D_03', title: 'Reference class forecasting', desc: 'Planning estimates are anchored to historical data from comparable work, not individual intuition. This directly counters the planning fallacy by replacing inside-view estimation with outside-view evidence.' },
  { id: 'D_04', title: 'Protected deep work blocks', desc: 'Uninterrupted blocks of time are built into team schedules by design, not left to individuals to carve out against competing meeting demands. The system protects focus rather than leaving it to willpower.' },
  { id: 'D_05', title: 'Visible work-in-progress limits', desc: 'Inspired by Toyota\'s production system, WIP limits cap the number of items a team can have in progress simultaneously. When the limit is reached, no new work starts until existing work finishes.' },
]

export default function NeuroscienceFinishingPage() {
  return (
    <>
      <header className="bg-navy relative overflow-hidden pt-[66px]">
        <div className="absolute inset-0 bg-grid-cyan bg-grid" />
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog-adoption.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        </div>
        <div className="relative z-10 max-w-[760px] mx-auto px-[5%] py-20">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/35 text-sm hover:text-white transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-finis rounded-full" />
            <span className="font-mono text-[0.68rem] text-cyan-finis tracking-[0.18em] uppercase">Execution Science · Insights</span>
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] text-white font-bold leading-[1.18] tracking-tight mb-6">
            The Neuroscience of Finishing: Why Smart Teams Leave Work Incomplete
          </h1>
          <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl mb-10">
            The Zeigarnik effect, cognitive switching costs and the planning fallacy all conspire against completion. Understanding the science changes how you design work systems.
          </p>
          <div className="flex gap-10 flex-wrap border-t border-white/7 pt-6">
            {[['Published', 'April 2026'], ['Read time', '7 min'], ['Author', 'Finis Research Team'], ['Category', 'Execution Science']].map(([k, v]) => (
              <div key={k}>
                <span className="font-mono text-[0.62rem] text-white/25 tracking-[0.1em] uppercase block mb-0.5">{k}</span>
                <span className="font-mono text-[0.72rem] text-white/60 font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <article className="max-w-[760px] mx-auto px-[5%] py-16">

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-6">
          In the 1920s, a Soviet psychologist named Bluma Zeigarnik noticed something odd while observing waiters in a Vienna café. The waiters could recall the details of unpaid orders with remarkable accuracy — but as soon as an order was settled, it vanished from memory almost instantly. The act of completion, she theorised, closed a cognitive loop that the brain had been actively holding open.
        </p>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-6">
          A century later, that observation sits at the heart of one of the most persistent and expensive problems in modern organisations: the inability of smart, well-resourced, highly motivated teams to finish what they start.
        </p>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-12">
          This is not a motivation problem. It is not a talent problem. It is a system design problem — and the neuroscience tells us exactly why.
        </p>

        <hr className="border-mist mb-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">The Four Neurological Forces Working Against Completion</h2>

        <div className="flex flex-col gap-6 mb-12">
          {effects.map((e) => (
            <div key={e.id} className="bg-white border border-mist rounded p-8">
              <div className="font-mono text-[0.65rem] font-medium text-cyan-finis tracking-[0.1em] mb-3">{e.id}</div>
              <h3 className="font-serif text-[1.2rem] text-navy mb-3">{e.title}</h3>
              <p className="text-[0.875rem] text-slate leading-relaxed mb-4">{e.body}</p>
              <div className="bg-fog border-l-2 border-cyan-finis pl-4 py-2">
                <p className="text-[0.8rem] text-slate leading-relaxed font-medium">{e.implication}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-mist mb-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">What the Research Tells Us About Knowledge Work</h2>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-8">
          The combined effect of these four neurological forces in a typical knowledge work environment is significant. A 2024 study by the University of California found that the average knowledge worker is interrupted every 3 minutes and 5 seconds — and takes an average of 23 minutes and 15 seconds to fully return to a task after an interruption. In an 8-hour workday, this arithmetic produces a striking result: most knowledge workers achieve less than 3 hours of genuinely focused, productive work per day.
        </p>

        <div className="grid grid-cols-3 gap-px bg-mist mb-12">
          {[
            { num: '3min', label: 'Average time between interruptions for knowledge workers', source: 'UC Irvine, 2024' },
            { num: '23min', label: 'Average time to fully regain focus after an interruption', source: 'UC Irvine, 2024' },
            { num: '40%', label: 'Productivity loss attributable to task switching', source: 'American Psychological Association' },
          ].map((s) => (
            <div key={s.num} className="bg-white p-6 text-center">
              <div className="font-serif text-[2rem] font-bold text-navy mb-1">{s.num}</div>
              <div className="text-[0.72rem] text-steel leading-snug mb-2">{s.label}</div>
              <div className="font-mono text-[0.58rem] text-mist">{s.source}</div>
            </div>
          ))}
        </div>

        <hr className="border-mist mb-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">Designing Work Systems That the Brain Can Actually Finish</h2>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-8">
          The insight from the neuroscience is not that people need to try harder or manage their time better. It is that the work systems most organisations use are structurally misaligned with how the human brain actually operates. Fixing the incompletion problem means redesigning those systems — not exhorting people to be more disciplined within them.
        </p>

        <div className="flex flex-col gap-px bg-mist mb-12">
          {designs.map((d) => (
            <div key={d.id} className="bg-white p-6 flex gap-5">
              <div className="font-mono text-[0.65rem] font-medium text-cyan-finis tracking-[0.1em] w-10 flex-shrink-0 pt-0.5">{d.id}</div>
              <div>
                <h4 className="text-[0.95rem] font-semibold text-navy mb-2">{d.title}</h4>
                <p className="text-[0.875rem] text-slate leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-6">
          None of these design principles are new. What is new is the ability to model, simulate and implement them at organisational scale — to move from individual productivity advice to systemic workflow redesign grounded in process intelligence.
        </p>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-12">
          Bluma Zeigarnik's waiters closed their loops as soon as the bill was paid. The challenge for modern organisations is to build work systems that make closing loops the default — not the exception.
        </p>

        <div className="bg-navy-2 rounded p-10 text-center">
          <h3 className="font-serif text-2xl text-white font-bold mb-3">Redesign your work systems around finishing</h3>
          <p className="text-white/40 font-light text-sm mb-8 max-w-md mx-auto leading-relaxed">
            We apply process intelligence and behavioural science to build work systems that close loops, reduce switching costs and actually get things done.
          </p>
          <Link href="/contact" className="btn-primary">Request a Discovery Session</Link>
        </div>

      </article>
    </>
  )
}