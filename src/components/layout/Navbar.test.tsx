import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the company name', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    expect(screen.getByText('KS Module Tech')).toBeInTheDocument()
  })

  it('renders all navigation items on desktop', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    expect(screen.getByText('홈')).toBeInTheDocument()
    expect(screen.getByText('회사 소개')).toBeInTheDocument()
    expect(screen.getByText('사업 분야')).toBeInTheDocument()
    expect(screen.getByText('주주 현황')).toBeInTheDocument()
    expect(screen.getByText('연락처')).toBeInTheDocument()
  })

  it('toggles mobile menu and updates aria-label', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    const user = userEvent.setup()
    const menuButton = screen.getByRole('button', { name: /메뉴/ })

    // Initially should say "메뉴 열기"
    expect(menuButton).toHaveAttribute('aria-label', '메뉴 열기')

    // Click to open
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-label', '메뉴 닫기')

    // Click to close
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-label', '메뉴 열기')
  })
})
