import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { BusinessPage } from './BusinessPage'

describe('BusinessPage', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <BusinessPage />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: '사업 분야' })).toBeInTheDocument()
  })

  it('displays business data from JSON', () => {
    render(
      <BrowserRouter>
        <BusinessPage />
      </BrowserRouter>
    )
    // Check for PCB business section
    expect(screen.getByText(/PCB 전기전자 제조/)).toBeInTheDocument()
    // Check for AI/AX business section
    expect(screen.getByText(/AI\/AX 기술 솔루션/)).toBeInTheDocument()
  })

  it('displays contact CTA section', () => {
    render(
      <BrowserRouter>
        <BusinessPage />
      </BrowserRouter>
    )
    expect(screen.getByText('사업 협력 문의')).toBeInTheDocument()
  })

  it('uses Link component for contact button (not hardcoded href)', () => {
    const { container } = render(
      <BrowserRouter>
        <BusinessPage />
      </BrowserRouter>
    )
    // Should not have href="/#/contact" anymore
    const badLinks = container.querySelectorAll('a[href="/#/contact"]')
    expect(badLinks.length).toBe(0)
  })
})
