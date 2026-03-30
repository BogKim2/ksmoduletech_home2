import { Component, ErrorInfo, ReactNode } from 'react'
import { Container } from '@/components/layout/Container'
import { AlertTriangle } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <Container>
            <div className="max-w-md mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-[#0A2540] mb-3">
                문제가 발생했습니다
              </h1>
              <p className="text-slate-600 mb-6">
                죄송합니다. 예상치 못한 오류가 발생했습니다.
                <br />
                페이지를 새로고침하거나 아래 연락처로 문의해 주세요.
              </p>
              <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6 text-left">
                <p className="text-sm text-slate-600">
                  <strong>연락처:</strong>
                  <br />
                  이메일: contact@ksmoduletech.com
                  <br />
                  전화: 051-123-4567
                </p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0A2540] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0A2540]/90 transition-colors"
              >
                페이지 새로고침
              </button>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                  <p className="text-xs font-mono text-red-800 break-all">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}
            </div>
          </Container>
        </div>
      )
    }

    return this.props.children
  }
}
