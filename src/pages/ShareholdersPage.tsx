import { ChevronRight, Users } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import shareholdersData from '@/data/shareholders.json'

interface Shareholder {
  name: string
  shares: number
  percentage: number
  role: string
  note: string
}

export function ShareholdersPage() {
  const shareholders = shareholdersData as Shareholder[]
  const totalShares = shareholders.reduce((acc, s) => acc + s.shares, 0)

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0A2540] text-white py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#00C2FF] text-sm mb-3">
              <span>주주 현황</span>
              <ChevronRight className="h-4 w-4" />
              <span>Shareholders</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-[#00C2FF]" />
              주주 현황
            </h1>
            <p className="text-slate-300">케이에스모듈텍 주식회사 지분 구조</p>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <div className="max-w-3xl mx-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="text-xs text-slate-400 mb-1">발행주식 총수</p>
              <p className="text-2xl font-bold text-[#0A2540]">{totalShares.toLocaleString()}</p>
              <p className="text-xs text-slate-400 mt-0.5">주</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="text-xs text-slate-400 mb-1">1주 금액</p>
              <p className="text-2xl font-bold text-[#0A2540]">500</p>
              <p className="text-xs text-slate-400 mt-0.5">원</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm col-span-2 md:col-span-1">
              <p className="text-xs text-slate-400 mb-1">주주 수</p>
              <p className="text-2xl font-bold text-[#0A2540]">{shareholders.length}</p>
              <p className="text-xs text-slate-400 mt-0.5">명</p>
            </div>
          </div>

          {/* Shareholders Table */}
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A2540] text-white">
                    <th className="px-5 py-3.5 text-left font-semibold">주주(명칭)</th>
                    <th className="px-5 py-3.5 text-left font-semibold">직책</th>
                    <th className="px-5 py-3.5 text-right font-semibold">보유 주식 수</th>
                    <th className="px-5 py-3.5 text-right font-semibold">지분율</th>
                    <th className="px-5 py-3.5 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody>
                  {shareholders.map((s, i) => (
                    <tr
                      key={i}
                      className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-5 py-4 font-medium text-[#0A2540]">{s.name}</td>
                      <td className="px-5 py-4 text-slate-600">{s.role}</td>
                      <td className="px-5 py-4 text-right text-slate-700">
                        {s.shares.toLocaleString()}주
                      </td>
                      <td className="px-5 py-4 text-right">
                        <span className="inline-flex items-center rounded-full bg-[#0A2540]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0A2540]">
                          {s.percentage.toFixed(1)}%
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-400 text-xs">{s.note || '—'}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-slate-200 bg-slate-50">
                    <td colSpan={2} className="px-5 py-3.5 font-semibold text-[#0A2540]">
                      합계
                    </td>
                    <td className="px-5 py-3.5 text-right font-semibold text-[#0A2540]">
                      {totalShares.toLocaleString()}주
                    </td>
                    <td className="px-5 py-3.5 text-right font-semibold text-[#0A2540]">
                      100.0%
                    </td>
                    <td className="px-5 py-3.5" />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-400 text-center">
            본 주주 현황은 최근 주주명부 기준이며, 변경 시 업데이트됩니다.
          </p>
        </div>
      </Container>
    </div>
  )
}
