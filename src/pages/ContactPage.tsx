import { Mail, MapPin, ChevronRight, Send } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import company from '@/data/company.json'

export function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0A2540] text-white py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#00C2FF] text-sm mb-3">
              <span>연락처</span>
              <ChevronRight className="h-4 w-4" />
              <span>Contact</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">연락처</h1>
            <p className="text-slate-300 text-lg">
              사업 문의, 협력 제안 등 언제든지 연락해 주세요.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A2540]">
                <Mail className="h-5 w-5 text-[#00C2FF]" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">이메일</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-base font-medium text-[#0A2540] hover:text-[#00C2FF] transition-colors"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A2540]">
                <MapPin className="h-5 w-5 text-[#00C2FF]" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">주소</p>
                <p className="text-base font-medium text-[#0A2540]">{company.address}</p>
              </div>
            </div>
          </div>

          {/* Simple Email CTA */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 text-center">
            <Send className="h-10 w-10 text-[#00C2FF] mx-auto mb-4" />
            <h2 className="text-xl font-bold text-[#0A2540] mb-2">이메일로 문의하기</h2>
            <p className="text-slate-500 text-sm mb-6">
              PCB 제조, AI 솔루션 도입, 사업 협력에 관한 문의를 환영합니다.
              이메일로 연락해 주시면 빠르게 답변 드리겠습니다.
            </p>
            <a
              href={`mailto:${company.email}?subject=[KS Module Tech] 문의`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A2540] px-8 py-3 text-sm font-semibold text-white hover:bg-[#0A2540]/90 transition-colors"
            >
              <Mail className="h-4 w-4" />
              {company.email}
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
