import { UnifiedLayout } from "@/app/components/layouts/UnifiedLayout"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UnifiedLayout role="admin" showHeader={true}>
      {children}
    </UnifiedLayout>
  )
}