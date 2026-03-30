import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(container).toBeTruthy()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('displays the company tagline', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(screen.getByText(/기술로 연결하는 미래/)).toBeInTheDocument()
  })

  it('displays core business section', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(screen.getByText('핵심 사업 분야')).toBeInTheDocument()
  })

  it('has navigation links to business and contact pages', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    const businessLinks = screen.getAllByText(/사업 분야/)
    const contactLinks = screen.getAllByText(/연락하기|문의하기/)

    expect(businessLinks.length).toBeGreaterThan(0)
    expect(contactLinks.length).toBeGreaterThan(0)
  })
})
