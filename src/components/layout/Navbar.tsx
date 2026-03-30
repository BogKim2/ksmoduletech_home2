import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Cpu } from 'lucide-react'
import { Container } from './Container'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: '홈' },
  { to: '/about', label: '회사 소개' },
  { to: '/business', label: '사업 분야' },
  { to: '/shareholders', label: '주주 현황' },
  { to: '/contact', label: '연락처' },
]

const ARIA_LABELS = {
  MENU_OPEN: '메뉴 열기',
  MENU_CLOSE: '메뉴 닫기',
} as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Cpu className="h-5 w-5 text-accent" />
            </div>
            <span className="text-lg font-bold text-primary">KS Module Tech</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-primary',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? ARIA_LABELS.MENU_CLOSE : ARIA_LABELS.MENU_OPEN}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <nav className="md:hidden border-t border-slate-100 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-slate-600 hover:bg-slate-100',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </Container>
    </header>
  )
}

