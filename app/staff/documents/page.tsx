import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileText, Download, Search, BookOpen, Shield, Calendar, FileCheck } from 'lucide-react'

export default function DocumentsPage() {
  const documentCategories = [
    {
      title: 'Nội quy công ty',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10',
      documents: [
        { name: 'Nội quy lao động', date: '01/01/2025', size: '2.4 MB' },
        { name: 'Quy định về trang phục', date: '01/01/2025', size: '1.2 MB' },
        { name: 'Quy định về giờ làm việc', date: '01/01/2025', size: '980 KB' },
      ],
    },
    {
      title: 'Chính sách nhân sự',
      icon: FileCheck,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10',
      documents: [
        { name: 'Chính sách tuyển dụng', date: '15/03/2025', size: '3.1 MB' },
        { name: 'Chính sách đào tạo', date: '15/03/2025', size: '2.8 MB' },
        { name: 'Chính sách thăng tiến', date: '15/03/2025', size: '1.9 MB' },
      ],
    },
    {
      title: 'Chính sách nghỉ phép',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/10',
      documents: [
        { name: 'Quy định nghỉ phép năm', date: '01/01/2025', size: '1.5 MB' },
        { name: 'Quy định nghỉ ốm', date: '01/01/2025', size: '1.2 MB' },
        { name: 'Quy định nghỉ thai sản', date: '01/01/2025', size: '1.8 MB' },
      ],
    },
    {
      title: 'Quy định bảo mật',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-500/10',
      documents: [
        { name: 'Chính sách bảo mật thông tin', date: '01/02/2025', size: '2.2 MB' },
        { name: 'Hướng dẫn sử dụng email', date: '01/02/2025', size: '1.4 MB' },
        { name: 'Quy định về GDPR', date: '01/02/2025', size: '3.5 MB' },
      ],
    },
    {
      title: 'SOP nội bộ',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-500/10',
      documents: [
        { name: 'SOP quy trình làm việc', date: '10/04/2025', size: '4.2 MB' },
        { name: 'SOP báo cáo công việc', date: '10/04/2025', size: '2.1 MB' },
        { name: 'SOP xử lý khiếu nại', date: '10/04/2025', size: '1.9 MB' },
      ],
    },
  ]

  return (
    <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-balance">Documents</h1>
          <p className="text-muted-foreground mt-1">
            Tài liệu nội bộ, chính sách và quy định của công ty
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Tìm kiếm tài liệu..."
            className="pl-10"
          />
        </div>

        {/* Document Categories */}
        <div className="space-y-6">
          {documentCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.bgColor}`}>
                      <Icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.documents.map((doc, docIndex) => (
                      <div
                        key={docIndex}
                        className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">
                              PDF • {doc.size} • Cập nhật: {doc.date}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Tải xuống
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Help Section */}
        <Card className="shadow-sm bg-muted/30 border-dashed">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Không tìm thấy tài liệu bạn cần?{' '}
              <Button variant="link" className="h-auto p-0 text-primary">
                Liên hệ bộ phận HR
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
  )
}
