import { Cpu, BrainCircuit, Building2, CheckCircle2, ChevronRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import businessData from '@/data/business.json'

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu className="h-10 w-10" />,
  'brain-circuit': <BrainCircuit className="h-10 w-10" />,
  'building-2': <Building2 className="h-10 w-10" />,
}

const sectionColors: Record<string, string> = {
  pcb: 'from-slate-900 to-[#0A2540]',
  'ai-ax': 'from-[#0A2540] to-indigo-900',
  other: 'from-slate-700 to-slate-900',
}

export function BusinessPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0A2540] text-white py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#00C2FF] text-sm mb-3">
              <span>사업 분야</span>
              <ChevronRight className="h-4 w-4" />
              <span>Business</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">사업 분야</h1>
            <p className="text-slate-300 text-lg">
              PCB 전기전자 제조, AI/AX 기술 솔루션, 부동산·전자상거래까지
              다양한 사업 포트폴리오로 지속 성장합니다.
            </p>
          </div>
        </Container>
      </section>

      {/* Business Sections */}
      <div>
        {businessData.map((biz, idx) => (
          <section
            key={biz.id}
            id={biz.id}
            className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
          >
            <Container className="py-16 md:py-20">
              {/* Section Header */}
              <div className="flex items-start gap-6 mb-10">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${sectionColors[biz.id] ?? 'from-slate-700 to-slate-900'} text-[#00C2FF]`}
                >
                  {iconMap[biz.icon] ?? <Cpu className="h-10 w-10" />}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">{biz.title}</h2>
                    <Badge variant="secondary" className="text-xs">
                      {biz.titleEn}
                    </Badge>
                  </div>
                  <p className="text-slate-500 text-base">{biz.summary}</p>
                </div>
              </div>

              <Separator className="mb-10" />

              {/* Description + Item Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Description */}
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3">
                    Overview
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{biz.description}</p>
                </div>

                {/* Service Cards */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {biz.items.map((item) => (
                    <Card
                      key={item.name}
                      className="border-slate-200 hover:border-[#00C2FF]/50 hover:shadow-md transition-all duration-200"
                    >
                      <CardHeader className="pb-2 pt-5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#00C2FF] shrink-0" />
                          <CardTitle className="text-base text-[#0A2540]">{item.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-5">
                        <CardDescription className="text-sm text-slate-500 leading-relaxed">
                          {item.detail}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <section className="bg-[#0A2540] text-white py-14">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold mb-1">사업 협력 문의</h2>
              <p className="text-slate-400 text-sm">
                PCB 제조, AI 솔루션 도입에 관심이 있으시면 언제든지 연락해 주세요.
              </p>
            </div>
            <a
              href="/#/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#00C2FF] px-6 py-3 text-sm font-semibold text-[#0A2540] hover:bg-[#00C2FF]/90 transition-colors"
            >
              문의하기 <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
