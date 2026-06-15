import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'The Automation Sequencing Problem: Why Most AI Deployments Fail in Year Two — Finis Business Solutions',
  description: 'Organisations automate the wrong things first. Not because they lack intelligence, but because they lack a process model. Here is the sequencing logic we use with every client.',
}

const mistakes = [
  { id: 'M_01', title: 'Automating the visible, not the valuable', body: 'Organisations reach for the most obvious repetitive tasks — data entry, report generation, email routing. These feel like wins because the automation is easy to build and easy to demo. But they rarely sit on the critical path. The high-value work — complex approvals, exception handling, cross-system coordination — gets left untouched because it\'s harder to automate.' },
  { id: 'M_02', title: 'Automating broken processes', body: 'The single most common automation failure: organisations automate a process that was already broken. The result is that errors happen faster, at greater scale, with less human oversight to catch them. Automation amplifies whatever is upstream of it. If the upstream process is flawed, the automation makes it worse.' },
  { id: 'M_03', title: 'Ignoring dependencies and integration debt', body: 'Automations don\'t exist in isolation. Every automated step touches a system, a data source, a downstream process. Organisations that automate without mapping these dependencies create fragile chains that break whenever an upstream system changes — and in most enterprises, systems change constantly.' },
  { id: 'M_04', title: 'Under-investing in change management', body: 'An automation that nobody uses is not an automation — it\'s a cost. Organisations routinely deploy technically functional automations that employees route around, override, or simply ignore, because the adoption design was an afterthought. The technology worked. The human system didn\'t.' },
  { id: 'M_05', title: 'No measurement framework', body: 'Without a baseline measurement of the process before automation, there is no way to know whether the automation is working. Organisations declare success based on the fact that the automation runs, rather than evidence that it has changed outcomes. Year two arrives and nobody can answer the question: was this worth it?' },
]

const phases = [
  { id: 'PHASE 01', title: 'Process Model First', desc: 'Before any automation decision is made, we build a digital model of the target process — mapping every step, decision point, exception path and system integration. This is non-negotiable.' },
  { id: 'PHASE 02', title: 'Value & Feasibility Scoring', desc: 'Every automatable step is scored on two dimensions: the value it would unlock if automated, and the feasibility of automating it with current tools. High value + high feasibility = automate first.' },
  { id: 'PHASE 03', title: 'Dependency Mapping', desc: 'We map every upstream and downstream dependency for each automation candidate. Any candidate with fragile dependencies gets redesigned before automation begins.' },
  { id: 'PHASE 04', title: 'Baseline & Measure', desc: 'Before deployment, we establish baseline metrics for every process being automated. Post-deployment, we track against those baselines continuously — not as a project, but as an ongoing operational practice.' },
]

export default function AutomationSequencingPage() {
  return (
    <>
      <header className="bg-navy relative overflow-hidden pt-[66px]">
        <div className="absolute inset-0 bg-grid-cyan bg-grid" />
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog-process.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        </div>
        <div className="relative z-10 max-w-[760px] mx-auto px-[5%] py-20">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/35 text-sm hover:text-white transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-finis rounded-full" />
            <span className="font-mono text-[0.68rem] text-cyan-finis tracking-[0.18em] uppercase">AI & Automation · Insights</span>
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] text-white font-bold leading-[1.18] tracking-tight mb-6">
            The Automation Sequencing Problem: Why Most AI Deployments Fail in Year Two
          </h1>
          <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl mb-10">
            Organisations automate the wrong things first. Not because they lack intelligence, but because they lack a process model. Here is the sequencing logic we use with every client.
          </p>
          <div className="flex gap-10 flex-wrap border-t border-white/7 pt-6">
            {[['Published', 'May 2026'], ['Read time', '10 min'], ['Author', 'Finis Research Team'], ['Category', 'AI & Automation']].map(([k, v]) => (
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
          In 2023, a mid-sized Australian logistics company spent $2.3 million automating its invoicing workflow. By 2024, the automation was running flawlessly — processing 94% of invoices without human intervention. By mid-2025, the company had quietly decommissioned it. The problem wasn't the technology. The problem was that invoicing wasn't the bottleneck. The bottleneck was upstream, in the purchase order approval process that fed the invoicing system. The automation had optimised the wrong thing.
        </p>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-12">
          This pattern — automating the visible rather than the valuable — is the defining failure mode of enterprise AI deployment. And it is almost entirely preventable, provided you have a process model before you have an automation strategy.
        </p>

        <hr className="border-mist mb-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">Why Year Two Is When the Cracks Appear</h2>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-6">
          Year one of an automation programme almost always looks like success. Pilots deliver. Demos impress. Early adopters report time savings. Leadership approves expansion. The press release goes out.
        </p>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-8">
          Year two is when the underlying sequencing errors surface. The automations that looked good in isolation start interacting with each other in unexpected ways. The processes that weren't modelled before automation began turn out to have exceptions nobody accounted for. The integrations that seemed stable break when a vendor updates their API. The employees who were never properly onboarded find workarounds that defeat the purpose of the automation entirely.
        </p>

        <div className="bg-navy border-l-[3px] border-cyan-finis rounded-r p-8 mb-12">
          <div className="font-serif text-[3.5rem] font-bold text-white leading-none mb-3">
            85<span className="text-cyan-finis">%</span>
          </div>
          <p className="text-[0.95rem] text-white/45 font-light leading-relaxed mb-2">
            of AI projects fail to deliver on their original business case, according to Gartner. The majority of failures are not technical — they are sequencing and process failures that could have been identified before the first line of automation code was written.
          </p>
          <span className="font-mono text-[0.62rem] text-white/20">Source: Gartner AI Project Failure Analysis, 2025</span>
        </div>

        <hr className="border-mist mb-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">The Five Sequencing Mistakes</h2>

        <div className="flex flex-col gap-px bg-mist mb-12">
          {mistakes.map((m) => (
            <div key={m.id} className="bg-white p-6 flex gap-5">
              <div className="font-mono text-[0.65rem] font-medium text-cyan-finis tracking-[0.1em] w-10 flex-shrink-0 pt-0.5">{m.id}</div>
              <div>
                <h4 className="text-[0.95rem] font-semibold text-navy mb-2">{m.title}</h4>
                <p className="text-[0.875rem] text-slate leading-relaxed">{m.body}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-mist mb-12" />

        <h2 className="font-serif text-[1.9rem] text-navy font-bold mb-6">The Finis Sequencing Framework</h2>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-8">
          The correct sequencing of automation is not intuitive. It requires a process model — a structured, data-driven picture of how work flows, where value is created, and where the real bottlenecks lie. Without that model, automation strategy is essentially guesswork dressed up as digital transformation.
        </p>

        <div className="bg-navy rounded p-10 mb-12">
          <div className="font-mono text-[0.65rem] font-medium text-cyan-finis tracking-[0.18em] uppercase mb-8">The Finis Sequencing Method</div>
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

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-6">
          The organisations that build lasting automation programmes share one characteristic: they invest in understanding the process before they invest in changing it. That investment is not expensive relative to the cost of getting the sequencing wrong. A $50,000 process modelling engagement that prevents a $2 million failed automation is not a cost — it is the highest-returning decision the business makes that year.
        </p>

        <p className="text-[1.05rem] text-[#2A3F58] leading-[1.85] font-light mb-12">
          Year two doesn't have to be when things fall apart. With the right sequencing, it's when the compounding returns of a well-designed automation programme start to become unmistakable.
        </p>

        <div className="bg-navy-2 rounded p-10 text-center">
          <h3 className="font-serif text-2xl text-white font-bold mb-3">Get your automation sequencing right from the start</h3>
          <p className="text-white/40 font-light text-sm mb-8 max-w-md mx-auto leading-relaxed">
            We build the process model first — so every automation decision is grounded in evidence, not assumption.
          </p>
          <Link href="/contact" className="btn-primary">Request a Discovery Session</Link>
        </div>

      </article>
    </>
  )
}