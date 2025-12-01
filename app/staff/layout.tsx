import { UnifiedLayout } from "@/app/components/layouts/UnifiedLayout"

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UnifiedLayout role="staff" showHeader={false}>
      {children}
    </UnifiedLayout>
  );
}