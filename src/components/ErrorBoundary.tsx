import { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'
import companyData from '@/data/company.json'

const ERROR_MESSAGES = {
  TITLE: '문제가 발생했습니다',
  DESCRIPTION: '죄송합니다. 예상치 못한 오류가 발생했습니다.',
  INSTRUCTION: '페이지를 새로고침하거나 아래 연락처로 문의해 주세요.',
  CONTACT_LABEL: '연락처:',
  RELOAD_BUTTON: '페이지 새로고침',
} as const

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    const { error } = this.state

    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
          <div className="max-w-md text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-primary mb-3">
              {ERROR_MESSAGES.TITLE}
            </h1>

            <p className="text-slate-600 mb-2">
              {ERROR_MESSAGES.DESCRIPTION}
            </p>
            <p className="text-slate-600 mb-6">
              {ERROR_MESSAGES.INSTRUCTION}
            </p>

            <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6 text-left">
              <p className="text-sm text-slate-600">
                <strong>{ERROR_MESSAGES.CONTACT_LABEL}</strong>
                <br />
                이메일: {companyData.email}
              </p>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              {ERROR_MESSAGES.RELOAD_BUTTON}
            </button>

            {process.env.NODE_ENV === 'development' && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <p className="text-xs font-mono text-red-800 break-all">
                  {error.toString()}
                </p>
              </div>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
