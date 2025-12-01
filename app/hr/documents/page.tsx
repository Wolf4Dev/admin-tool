"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Download, Plus, FolderOpen } from "lucide-react";
import { useState } from "react";

const documentCategories = [
  {
    id: "1",
    name: "SOP HR",
    count: 8,
    icon: FolderOpen,
  },
  {
    id: "2",
    name: "Nội quy",
    count: 5,
    icon: FolderOpen,
  },
  {
    id: "3",
    name: "Chính sách công ty",
    count: 12,
    icon: FolderOpen,
  },
  {
    id: "4",
    name: "Quy định nghỉ phép",
    count: 3,
    icon: FolderOpen,
  },
  {
    id: "5",
    name: "Quy trình onboarding",
    count: 6,
    icon: FolderOpen,
  },
  {
    id: "6",
    name: "Biểu mẫu HR",
    count: 15,
    icon: FolderOpen,
  },
];

const documents = [
  {
    id: "1",
    name: "Quy định chấm công.pdf",
    category: "Nội quy",
    updatedDate: "15/11/2025",
    size: "2.4 MB",
  },
  {
    id: "2",
    name: "Chính sách nghỉ phép.docx",
    category: "Quy định nghỉ phép",
    updatedDate: "10/11/2025",
    size: "1.2 MB",
  },
  {
    id: "3",
    name: "Biểu mẫu đăng ký nghỉ phép.xlsx",
    category: "Biểu mẫu HR",
    updatedDate: "08/11/2025",
    size: "0.8 MB",
  },
  {
    id: "4",
    name: "Quy trình tuyển dụng.pdf",
    category: "SOP HR",
    updatedDate: "05/11/2025",
    size: "3.1 MB",
  },
  {
    id: "5",
    name: "Hướng dẫn onboarding nhân viên mới.pdf",
    category: "Quy trình onboarding",
    updatedDate: "01/11/2025",
    size: "4.2 MB",
  },
  {
    id: "6",
    name: "Chính sách làm việc từ xa.docx",
    category: "Chính sách công ty",
    updatedDate: "28/10/2025",
    size: "1.5 MB",
  },
  {
    id: "7",
    name: "Biểu mẫu đánh giá hiệu suất.xlsx",
    category: "Biểu mẫu HR",
    updatedDate: "25/10/2025",
    size: "0.9 MB",
  },
  {
    id: "8",
    name: "Quy định bảo mật thông tin.pdf",
    category: "Nội quy",
    updatedDate: "20/10/2025",
    size: "2.8 MB",
  },
];

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-foreground">
                Tài liệu
              </h1>
              <p className="text-muted-foreground mt-1">
                Quản lý tài liệu và chính sách công ty
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Tải lên tài liệu
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {documentCategories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.name;
              return (
                <Card
                  key={category.id}
                  className={`p-4 cursor-pointer hover:shadow-md transition-all ${
                    isSelected ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                  onClick={() =>
                    setSelectedCategory(isSelected ? null : category.name)
                  }
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div
                      className={`rounded-lg p-3 ${
                        isSelected ? "bg-primary/20" : "bg-primary/10"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          isSelected ? "text-primary" : "text-primary"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{category.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {category.count} tài liệu
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm tài liệu..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {selectedCategory && (
                <Badge variant="secondary" className="gap-2">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="ml-1 hover:text-foreground"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>

            <div className="space-y-3">
              {filteredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{doc.name}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {doc.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Cập nhật: {doc.updatedDate}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {doc.size}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
    </div>
  );
}
