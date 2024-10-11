'use client'

import { useAuth } from '@saas-ui/auth'
import { LoginView } from '@saas-ui/auth'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  if (isAuthenticated) {
    router.push('/dashboard')
    return null
  }

  return <LoginView />
}
