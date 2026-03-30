import { useState, useMemo } from 'react'
import { Scale, Search, ChevronRight, BookOpen } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import articlesData from '@/data/articles.json'

interface Article {
  no: number
  title: string
  content: string
}

interface Chapter {
  chapter: number
  title: string
  articles: Article[]
}

export function LegalPage() {
  const [query, setQuery] = useState('')

  const filtered: Chapter[] = useMemo(() => {
    if (!query.trim()) return articlesData as Chapter[]
    const q = query.toLowerCase()
    return (articlesData as Chapter[])
      .map((ch) => ({
        ...ch,
        articles: ch.articles.filter(
          (a) =>
            a.title.toLowerCase().includes(q) ||
            a.content.toLowerCase().includes(q) ||
            String(a.no).includes(q),
        ),
      }))
      .filter((ch) => ch.articles.length > 0 || ch.title.toLowerCase().includes(q))
  }, [query])

  const totalArticles = articlesData.reduce((acc, ch) => acc + ch.articles.length, 0)

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0A2540] text-white py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#00C2FF] text-sm mb-3">
              <span>법적 문서</span>
              <ChevronRight className="h-4 w-4" />
              <span>정관</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <Scale className="h-8 w-8 text-[#00C2FF]" />
              정관
            </h1>
            <p className="text-slate-300 text-base">
              케이에스모듈텍 주식회사 정관 — {articlesData.length}개 장, 제{totalArticles}조
            </p>
          </div>
        </Container>
      </section>

      {/* Search + Content */}
      <Container className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="조항 검색 (예: 상호, 대표이사, 배당...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition"
            />
          </div>

          {/* Chapter index pills */}
          {!query && (
            <div className="flex flex-wrap gap-2 mb-8">
              {articlesData.map((ch) => (
                <a
                  key={ch.chapter}
                  href={`#chapter-${ch.chapter}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-[#0A2540] hover:text-white hover:border-[#0A2540] transition-colors"
                >
                  <BookOpen className="h-3 w-3" />
                  제{ch.chapter}장 {ch.title}
                </a>
              ))}
            </div>
          )}

          {/* No results */}
          {query && filtered.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              <Search className="h-10 w-10 mx-auto mb-3 opacity-40" />
              <p>"{query}"에 해당하는 조항이 없습니다.</p>
            </div>
          )}

          {/* Accordion */}
          <Accordion type="multiple" className="space-y-3">
            {filtered.map((ch) => (
              <div
                key={ch.chapter}
                id={`chapter-${ch.chapter}`}
                className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                {/* Chapter header */}
                <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 border-b border-slate-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A2540] text-xs font-bold text-white">
                    {ch.chapter}
                  </span>
                  <h2 className="font-semibold text-[#0A2540]">
                    제{ch.chapter}장 {ch.title}
                  </h2>
                  <span className="ml-auto text-xs text-slate-400">
                    제{ch.articles[0]?.no}조 ~ 제{ch.articles[ch.articles.length - 1]?.no}조
                  </span>
                </div>

                {/* Articles */}
                <Accordion type="multiple">
                  {ch.articles.map((article) => (
                    <AccordionItem
                      key={article.no}
                      value={`article-${article.no}`}
                      className="border-b border-slate-100 last:border-0 px-5"
                    >
                      <AccordionTrigger className="text-sm font-medium text-slate-700 hover:text-[#0A2540] hover:no-underline py-3.5">
                        <span className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[#00C2FF] min-w-[2.5rem]">
                            제{article.no}조
                          </span>
                          <span>{article.title}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="bg-slate-50 rounded-lg p-4 ml-12 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                          {article.content}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </Accordion>

          {/* Footer note */}
          {!query && (
            <p className="mt-8 text-xs text-slate-400 text-center">
              본 정관은 회사 설립등기일로부터 시행됩니다. 법적 효력은 등기된 원본을 기준으로 합니다.
            </p>
          )}
        </div>
      </Container>
    </div>
  )
}
