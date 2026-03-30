import { Cpu, Mail, MapPin } from 'lucide-react'
import { Container } from './Container'
import { NavLink } from 'react-router-dom'
import company from '@/data/company.json'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0A2540] text-white mt-auto">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-[#00C2FF]/10 border border-[#00C2FF]/30">
                <Cpu className="h-4 w-4 text-[#00C2FF]" />
              </div>
              <span className="font-bold text-white">{company.nameEn}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{company.description}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              바로가기
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/about', label: '회사 소개' },
                { to: '/business', label: '사업 분야' },
                { to: '/legal', label: '정관' },
                { to: '/contact', label: '연락처' },
              ].map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="text-slate-400 hover:text-[#00C2FF] transition-colors"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              연락처
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#00C2FF] shrink-0" />
                <span>{company.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#00C2FF] shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-[#00C2FF] transition-colors">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
          © {year} {company.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
