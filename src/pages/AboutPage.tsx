import { MapPin, Calendar, Building, ChevronRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Card, CardContent } from '@/components/ui/card'
import company from '@/data/company.json'

const facts = [
  { icon: <Building className="h-5 w-5" />, label: '회사명', value: company.name },
  { icon: <Building className="h-5 w-5" />, label: '영문명', value: company.nameEn },
  { icon: <Calendar className="h-5 w-5" />, label: '설립연도', value: `${company.established}년` },
  { icon: <MapPin className="h-5 w-5" />, label: '소재지', value: company.location },
]

export function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0A2540] text-white py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#00C2FF] text-sm mb-3">
              <span>회사 소개</span>
              <ChevronRight className="h-4 w-4" />
              <span>About</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">회사 소개</h1>
            <p className="text-slate-300 text-lg">{company.tagline}</p>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Text */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A2540] mb-5">케이에스모듈텍 주식회사</h2>
            <p className="text-slate-600 leading-relaxed text-base mb-6">{company.about}</p>
            <p className="text-slate-600 leading-relaxed text-base">
              전기전자 제조의 기반 위에 AI와 AX(AI Transformation) 기술을 결합하여 고객사의
              디지털 전환을 지원합니다. 부산을 중심으로 대한민국 산업의 미래를 함께 만들어 나갑니다.
            </p>
          </div>

          {/* Company Facts */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
              회사 개요
            </h3>
            {facts.map((fact) => (
              <Card key={fact.label} className="border-slate-200">
                <CardContent className="flex items-center gap-4 py-4 px-5">
                  <span className="text-[#00C2FF]">{fact.icon}</span>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">{fact.label}</p>
                    <p className="text-sm font-medium text-[#0A2540]">{fact.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mt-14 rounded-2xl bg-[#0A2540] text-white p-8 md:p-12">
          <h2 className="text-xl font-bold text-[#00C2FF] mb-4">미션</h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            "기술과 신뢰로 고객과 함께 성장하며, PCB 제조와 AI 혁신으로 산업의 디지털 전환을 이끈다."
          </p>
        </div>
      </Container>
    </div>
  )
}
