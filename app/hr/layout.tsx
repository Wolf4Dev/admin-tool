import { UnifiedLayout } from "@/app/components/layouts/UnifiedLayout"

export default function HRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UnifiedLayout role="hr" showHeader={false}>
      {children}
    </UnifiedLayout>
  );
}