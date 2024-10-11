'use client'

import { useAuth } from '@saas-ui/auth'
import { SignupView } from '@saas-ui/auth'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  if (isAuthenticated) {
    router.push('/dashboard')
    return null
  }

  return <SignupView />
}
