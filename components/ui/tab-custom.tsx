import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type TabItem = {
  href: string
  icon: ReactNode
  title: string
  isActive?: boolean
}

interface TabCustomProps {
  tabs: TabItem[]
  className?: string
  buttonClassName?: string
  activeClassName?: string
}

export default function TabCustom({
  tabs,
  className = "",
  buttonClassName = "",
  activeClassName = "",
}: TabCustomProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className={cn(
            "text-muted-foreground hover:text-foreground transition-colors relative group",
            buttonClassName,
            tab.isActive && ["text-foreground", activeClassName]
          )}
          title={tab.title}
          onClick={() => (window.location.href = tab.href)}
          role="link"
        >
          {tab.icon}
          <span
            className={cn(
              "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full",
              tab.isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              "transition-opacity"
            )}
          />
        </Button>
      ))}
    </div>
  )
}
