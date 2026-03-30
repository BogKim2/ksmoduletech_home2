import { NavLink } from 'react-router-dom'
import { Cpu, BrainCircuit, ArrowRight, CheckCircle2, MapPin, Shield } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import company from '@/data/company.json'
import businessData from '@/data/business.json'

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu className="h-8 w-8" />,
  'brain-circuit': <BrainCircuit className="h-8 w-8" />,
}

const highlights = [
  { icon: <Shield className="h-5 w-5" />, text: '신뢰할 수 있는 기술 파트너' },
  { icon: <Cpu className="h-5 w-5" />, text: 'PCB 전기전자 제조 전문' },
  { icon: <BrainCircuit className="h-5 w-5" />, text: 'AI/AX 디지털 전환 지원' },
  { icon: <MapPin className="h-5 w-5" />, text: '부산 기반 지역 기업' },
]

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #00C2FF 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0066CC 0%, transparent 40%)',
          }}
        />
        <Container className="relative py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 px-4 py-1.5 text-sm text-[#00C2FF] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
              {company.nameEn}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {company.tagline
                .split(' · ')
                .map((word, i) => (
                  <span key={i}>
                    {i > 0 && <span className="text-[#00C2FF]"> · </span>}
                    {i === 1 ? <span className="text-[#00C2FF]">{word}</span> : word}
                  </span>
                ))}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              {company.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/business"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00C2FF] px-6 py-3 text-sm font-semibold text-[#0A2540] hover:bg-[#00C2FF]/90 transition-colors"
              >
                사업 분야 보기 <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                연락하기
              </NavLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights strip */}
      <section className="border-b border-slate-100 bg-slate-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-5 text-sm text-slate-700">
                <span className="text-[#0A2540]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Business Cards */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2540] mb-3">핵심 사업 분야</h2>
            <p className="text-slate-500 text-lg">
              PCB 제조와 AI/AX 솔루션으로 기술로 연결하는 미래
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {businessData.map((biz) => (
              <Card
                key={biz.id}
                className="group hover:shadow-lg transition-all duration-200 border-slate-200 hover:border-[#00C2FF]/40"
              >
                <CardHeader className="pb-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0A2540] text-[#00C2FF] mb-4 group-hover:bg-[#00C2FF] group-hover:text-[#0A2540] transition-colors">
                    {iconMap[biz.icon] ?? <Cpu className="h-8 w-8" />}
                  </div>
                  <CardTitle className="text-xl text-[#0A2540]">{biz.title}</CardTitle>
                  <CardDescription className="text-slate-500">{biz.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-5">
                    {biz.items.map((item) => (
                      <li key={item.name} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-[#00C2FF] shrink-0" />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  <NavLink
                    to={`/business#${biz.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#0A2540] hover:text-[#00C2FF] transition-colors"
                  >
                    자세히 보기 <ArrowRight className="h-3.5 w-3.5" />
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 border-t border-slate-100 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4">
              함께 성장하는 파트너
            </h2>
            <p className="text-slate-500 mb-8">
              PCB 제조, AI 솔루션, 사업 협력에 관한 문의를 환영합니다.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A2540] px-8 py-3 text-sm font-semibold text-white hover:bg-[#0A2540]/90 transition-colors"
            >
              문의하기 <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </Container>
      </section>
    </div>
  )
}
