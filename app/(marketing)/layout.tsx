import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  // Add other metadata properties as needed
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
