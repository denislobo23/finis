import Image from 'next/image'
import Link from 'next/link'

const capabilities = [
  {
    id: 'CAP_01',
    title: 'AI Process Modelling & Digital Twin',
    desc: 'Construct a machine-readable model of your operational processes. We use BPMN 2.0 notation, event log data and ML inference engines to build a living digital twin of your business — one that can be simulated, stress-tested and optimised before any real-world change is made.',
    tags: ['BPMN 2.0', 'digital twin', 'ML inference', 'simulation'],
  },
  {
    id: 'CAP_02',
    title: 'Process Mining & Discovery',
    desc: 'Extract event logs from your existing ERP, CRM and operational systems to reconstruct how work actually flows. Conformance checking identifies every deviation, loop and bottleneck with quantified cost.',
    tags: ['event log analysis', 'conformance checking', 'root cause AI'],
  },
  {
    id: 'CAP_03',
    title: 'Intelligent Workflow Redesign',
    desc: 'Applying constraint theory, queuing mathematics and behavioural design to rebuild your workflows from the ground up. Every redesign is simulated in our process model before implementation.',
    tags: ['constraint theory', 'queuing models', 'behavioural design'],
  },
  {
    id: 'CAP_04',
    title: 'Automation Architecture & Deployment',
    desc: 'Designing the full automation stack — from RPA for repetitive tasks through to LLM-powered decision support and AI agents for complex knowledge work. We build the integration architecture that makes disparate tools work as a coherent system.',
    tags: ['RPA', 'LLM agents', 'API integration', 'orchestration'],
  },
  {
    id: 'CAP_05',
    title: 'Execution Intelligence & OKR Systems',
    desc: 'Building the real-time performance infrastructure — dashboards, AI-generated insights, exception alerts and accountability frameworks — that ensure strategy translates into daily execution at every level.',
    tags: ['OKR design', 'real-time KPIs', 'AI alerts', 'leadership cadence'],
  },
  {
    id: 'CAP_06',
    title: 'AI Adoption & Change Architecture',
    desc: 'The technology is the easy part. We design the human systems — training, incentive structures, communication strategies and cultural scaffolding — that determine whether an AI transformation delivers lasting change.',
    tags: ['adoption design', 'training architecture', 'culture mapping'],
  },
]

export default function CapabilitiesPage() {
  return (
    <>
      <section className="bg-navy px-[5%] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyan bg-grid opacity-100" />
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/ai-process.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow">Full Capability Stack</p>
          <h1 className="font-serif text-5xl text-white font-bold leading-tight mb-6">
            Everything required to transform how your organisation executes
          </h1>
          <p className="text-lg text-white/40 font-light leading-relaxed">
            From initial process discovery through to embedded AI deployment — we own the full transformation stack.
          </p>
        </div>
      </section>

      <section className="bg-white px-[5%] py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mist">
          {capabilities.map((c) => (
            <div key={c.id} className="cap-card">
              <div className="cap-number">{c.id}</div>
              <h3 className="font-serif text-[1.15rem] text-navy mb-3">{c.title}</h3>
              <p className="text-[0.875rem] text-slate leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-2 px-[5%] py-20 text-center">
        <h2 className="font-serif text-3xl text-white font-bold mb-4">Ready to see our method in action?</h2>
        <p className="text-white/40 font-light mb-8 max-w-md mx-auto">Book a 90-minute discovery session and we'll model your highest-friction process live.</p>
        <Link href="/contact" className="btn-primary">Book a Discovery Session</Link>
      </section>
    </>
  )
}
