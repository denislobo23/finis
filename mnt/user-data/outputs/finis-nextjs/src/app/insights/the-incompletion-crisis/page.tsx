import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: "The Incompletion Crisis: Why Australia's IT Projects Keep Failing — Finis Business Solutions",
  description: "A data-driven analysis of IT project failure rates in Australia, the root causes of incompletion, and how AI process intelligence changes the equation.",
}

const stats = [
  { num: '70%', label: 'of digital transformations fail to meet objectives', source: 'Gartner / MeltingSpot, 2026' },
  { num: '66%', label: 'of technology projects end in partial or total failure', source: 'Standish Group CHAOS, 50,000 projects' },
  { num: '88%', label: 'of business transformations fail to achieve original ambitions', source: 'Bain & Company, 2024' },
  { num: '13%', label: 'of PMI-tracked projects outright fail — rate rising', source: 'PMI Pulse of the Profession, 2025' },
]

const reasons = [
  { id: 'R_01', title: 'Unclear or Evolving Requirements', body: 'The Standish Group identifies lack of clear requirements as the single most common cause of project failure. PMI research shows 37% of executive leaders cite unclear goals as the primary factor. Requirements that evolve mid-project without formal change control create cascading rework that compounds with every iteration.' },
  { id: 'R_02', title: 'Scope Creep and Uncontrolled Change', body: 'Scope creep is implicated in the majority of budget overruns. It occurs when initial objectives aren\'t precisely bounded, stakeholders aren\'t formally engaged in change decisions, and there is no mechanism to calculate the downstream impact of each addition.' },
  { id: 'R_03', title: 'Weak Executive Sponsorship and Governance', body: 'The Standish Group consistently ranks lack of executive sponsorship as the top contributor to project failure, cited in 30% of cases. Without genuine sponsor engagement, scope decisions default to project teams.' },
  { id: 'R_04', title: 'Underestimated Complexity', body: 'Large projects fail at dramatically higher rates. The Standish Group\'s data shows that projects exceeding $10 million are more than ten times more likely to be cancelled than those under $1 million. You cannot accurately scope what you haven\'t modelled.' },
  { id: 'R_05', title: 'Communication Fragmentation and Silos', body: 'Over two-thirds of organisations identify communication breakdowns as a primary factor. When teams are operating from different planning artefacts, misalignment compounds silently until a crisis surfaces it.' },
  { id: 'R_06', title: 'Poor User Adoption of New Systems', body: '70% of all software implementations fail due to poor user adoption. Change management is treated as a communications exercise rather than a redesign of the workflows and incentive structures that determine whether people actually use what\'s been built.' },
  { id: 'R_07', title: 'Absence of Real-Time Execution Intelligence', body: 'PMI\'s 2025 research found 54% of organisations fail to track KPIs in real time. Projects that miss deadlines and budgets often do so because the signals were present weeks earlier — but there was no system to detect them.' },
]

const phases = [
  { id: 'PHASE 01', title: 'Process Discovery', desc: 'We extract event log data from your existing systems and interview your people to reconstruct how work actually flows — not how the documentation says it should.' },
  { id: 'PHASE 02', title: 'AI Modelling', desc: 'We construct a digital twin of your processes, apply constraint analysis and predictive modelling to quantify risk, complexity and automation opportunity before any decision is made.' },
  { id: 'PHASE 03', title: 'Intelligent Design', desc: 'We redesign processes and project governance architecture — simulating outcomes in the model before a single change is committed to in the real world.' },
  { id: 'PHASE 04', title: 'Embedded Delivery', desc: 'We build alongside your team and establish real-time execution intelligence — dashboards, AI alerts and accountability structures that make problems visible before they become crises.' },
]

export default function IncompletionCrisisPage() {
  return (
    <>
      {/* HERO */}
      <header className="bg-navy relative overflow-hidden pt-[66px]">
        <div className="absolute inset-0 bg-grid-cyan bg-grid" />
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/abandoned-project.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        </div>
        <div className="relative z-10 max-w-[760px] mx-auto px-[5%] py-20">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/35 text-sm hover:text-white transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-finis rounded-full" />
            <span className="font-mono text-[0.68rem] text-cyan-finis tracking-[0.18em] uppercase">Research & Analysis · Insights</span>
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] text-white font-bold leading-[1.18] tracking-tight mb-6">
            The Incompletion Crisis: Why Australia's IT Projects Keep Failing — and What It's Actually Costing Us
          </h1>
          <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl mb-10">
            Thirty years of research. Billions in documented waste. The same root causes, repeated. This is the definitive account of why organisations fail to finish — and why AI process intelligence finally changes the equation.
          </p>
          <div className="flex gap-10 flex-wrap border-t border-white/7 pt-6">
            {[['Published', 'June 2026'], ['Read time', '14 min'], ['Author', 'Finis Research Team'], ['Category', 'Process Intelligence']].map(([k, v]) => (
              <div key={k}>
                <span className="font-mono text-[0.62rem] text-white/25 tracking-[0.1em] uppercase block mb-0.5">{k}</span>
                <span className="font-mono text-[0.72rem] text-white/60 font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* BODY */}
      <article className="max-w-[760px] mx-auto px-[5%] py-16">

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-6">
          In 2010, the Queensland Government launched what was supposed to be a routine payroll system upgrade. Queensland Health had 80,000 employees, covered by 12 industrial awards, six industrial agreements, and more than 24,000 distinct pay combinations. IBM won the contract with a $98 million bid. By the time the system limped into operation — after ten failed go-live attempts — the State had spent <strong className="font-semibold text-navy">$1.2 billion</strong>. The official inquiry head, Richard Chesterman QC, called it <em>"possibly the worst failure of public administration in Australian history."</em>
        </p>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-6">
          It was not a one-off. It was a pattern.
        </p>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-12">
          Across federal and state governments, and throughout Australia's private sector, the inability to complete complex projects on time, on budget, and to original specification has become so normalised that we've stopped treating it as a crisis. It isn't. It is a systemic failure with a quantifiable cause — and in 2026, for the first time, we have the tools to fix it.
        </p>

        <hr className="border-mist mb-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">The Numbers Are Worse Than You Think</h2>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-8">
          The global picture has been documented relentlessly since the Standish Group published its first CHAOS Report in 1994 — and across three decades of research, the findings have remained stubbornly consistent.
        </p>

        {/* STAT GRID */}
        <div className="grid grid-cols-2 gap-px bg-mist mb-10">
          {stats.map((s) => (
            <div key={s.num} className="bg-white p-6 text-center">
              <div className="font-serif text-[2.4rem] font-bold text-navy mb-1">{s.num}</div>
              <div className="text-[0.78rem] text-steel leading-snug mb-2">{s.label}</div>
              <div className="font-mono text-[0.58rem] text-mist">{s.source}</div>
            </div>
          ))}
        </div>

        {/* BIG STAT */}
        <div className="bg-navy border-l-[3px] border-cyan-finis rounded-r p-8 mb-12">
          <div className="font-serif text-[3.5rem] font-bold text-white leading-none mb-3">
            $5<span className="text-cyan-finis">.4B</span>
          </div>
          <p className="text-[0.95rem] text-white/45 font-light leading-relaxed mb-2">
            Estimated annual waste from projects that don't deliver a benefit or are abandoned in Australia alone. With a project success rate of approximately 64%, nearly one in three Australian projects never delivers on its original promise.
          </p>
          <span className="font-mono text-[0.62rem] text-white/20">Source: CPA Australia / INTHEBLACK research estimate</span>
        </div>

        <hr className="border-mist mb-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">Australia's Public Sector: A Chronicle of Incompletion</h2>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-8">
          The government sector has the most visible — and most thoroughly documented — record of project failure. PMI's 2025 research identified the government sector as the leading industry for project failure, outpacing even the most complex private-sector environments.
        </p>

        {/* CASE STUDIES */}
        {[
          {
            label: 'Case Study · Queensland',
            title: 'Queensland Health Payroll System (2010)',
            body: 'The most expensive IT project failure in Australian government history. A payroll system for 80,000 health workers, covering 24,000 distinct pay combinations under 12 industrial awards. IBM bid $98 million; the final cost exceeded $1.2 billion. After ten failed go-live attempts, the system went live in March 2010 — and immediately failed catastrophically.',
            nums: [['$1.2B', 'Final cost'], ['$98M', 'Original bid'], ['10×', 'Failed go-lives'], ['1,124%', 'Cost overrun']],
          },
          {
            label: 'Case Study · Victoria',
            title: 'Myki Smart Card System (2005–2012)',
            body: "Victoria's public transport ticketing system was plagued by delays and cost blowouts from inception. What began as a $494 million project eventually cost an estimated $1.4 billion — more than seven years late.",
            nums: [['$1.4B', 'Final cost'], ['$494M', 'Original budget'], ['7+ yrs', 'Behind schedule']],
          },
          {
            label: 'Case Study · Federal Government',
            title: 'Australian Customs Integrated Cargo System (2005)',
            body: 'The Australian Customs Service spent approximately $225 million upgrading its cargo processing system — a 600% blowout from an initial estimate of $30 million. An ANAO review documented 13 contracts with four suppliers and 65 contract variations, with few records of the decisions behind them.',
            nums: [['$225M', 'Final cost'], ['$30M', 'Original estimate'], ['600%', 'Cost overrun'], ['65', 'Contract variations']],
          },
        ].map((c) => (
          <div key={c.title} className="bg-fog border border-mist border-t-[3px] border-t-gold rounded-b mb-6 p-8">
            <div className="font-mono text-[0.62rem] font-medium tracking-[0.15em] uppercase text-gold mb-3">{c.label}</div>
            <h4 className="font-serif text-[1.1rem] text-navy mb-3">{c.title}</h4>
            <p className="text-[0.875rem] text-slate leading-relaxed mb-4">{c.body}</p>
            <div className="flex gap-6 flex-wrap pt-4 border-t border-mist">
              {c.nums.map(([n, l]) => (
                <div key={l} className="text-center">
                  <strong className="font-serif text-xl text-navy block">{n}</strong>
                  <span className="text-[0.7rem] text-steel">{l}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <hr className="border-mist my-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">Why Projects Fail: The Seven Root Causes</h2>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-8">
          After three decades of research across tens of thousands of projects, the causes of failure are not mysterious. They are well-documented, frequently repeated, and almost never addressed at the process level before work begins.
        </p>

        <div className="flex flex-col gap-px bg-mist mb-12">
          {reasons.map((r) => (
            <div key={r.id} className="bg-white p-6 flex gap-5">
              <div className="font-mono text-[0.65rem] font-medium text-cyan-finis tracking-[0.1em] w-10 flex-shrink-0 pt-0.5">{r.id}</div>
              <div>
                <h4 className="text-[0.95rem] font-semibold text-navy mb-2">{r.title}</h4>
                <p className="text-[0.875rem] text-slate leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI stat */}
        <div className="bg-navy border-l-[3px] border-cyan-finis rounded-r p-8 mb-12">
          <div className="font-serif text-[3.5rem] font-bold text-white leading-none mb-3">
            95<span className="text-cyan-finis">%</span>
          </div>
          <p className="text-[0.95rem] text-white/45 font-light leading-relaxed mb-2">
            of enterprise generative AI pilot projects fail to show measurable financial returns within six months. The root causes are identical to traditional IT project failure: unclear objectives, underestimated complexity, and absent process intelligence.
          </p>
          <span className="font-mono text-[0.62rem] text-white/20">Source: MIT "The GenAI Divide: State of AI in Business 2025"</span>
        </div>

        <hr className="border-mist mb-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">The Finis Approach: Process Intelligence as the Foundation</h2>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-8">
          The evidence points to a clear conclusion: the organisations that consistently finish are not the ones with the most money, the best technology, or the most experienced project managers. They are the ones that have invested in process intelligence — the capability to model how work actually flows, identify where it breaks down, and intervene with precision before failure becomes inevitable.
        </p>

        {/* Approach */}
        <div className="bg-navy rounded p-10 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/images/ai-process.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative z-10">
            <div className="font-mono text-[0.65rem] font-medium text-cyan-finis tracking-[0.18em] uppercase mb-8">The Finis Method · Four Phases</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {phases.map((p) => (
                <div key={p.id}>
                  <div className="font-mono text-[0.6rem] text-cyan-finis tracking-[0.12em] mb-2">{p.id}</div>
                  <div className="w-full h-px bg-cyan-finis/30 mb-4" />
                  <h4 className="font-serif text-lg text-white mb-2">{p.title}</h4>
                  <p className="text-[0.8rem] text-white/40 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-6">
          Thirty years of project failure data has produced an enormous body of knowledge about what goes wrong. What it has not produced, until now, is the technology to operationalise that knowledge in real time — to build a living model of a project or operational process that detects the early signals of failure and triggers the right response before the crisis point.
        </p>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-12">
          That technology now exists. The question for Australian organisations in 2026 is not whether to use it. It is whether to use it before the next $1.2 billion failure — or after.
        </p>

        {/* CTA */}
        <div className="bg-navy-2 rounded p-10 text-center">
          <h3 className="font-serif text-2xl text-white font-bold mb-3">Find out what's recoverable in your organisation</h3>
          <p className="text-white/40 font-light text-sm mb-8 max-w-md mx-auto leading-relaxed">
            In a 90-minute process intelligence session, we'll map your highest-risk process, identify the root causes of incompletion, and give you a quantified estimate of what AI-driven redesign could recover.
          </p>
          <Link href="/contact" className="btn-primary">Request a Discovery Session</Link>
        </div>

      </article>
    </>
  )
}
