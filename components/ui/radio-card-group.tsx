"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export interface RadioCardItem {
  id: string
  value: string
  children: React.ReactNode
}

interface RadioCardGroupProps {
  items: RadioCardItem[]
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  itemClassName?: string
}

export function RadioCardGroup({ items, value, onValueChange, className, itemClassName }: RadioCardGroupProps) {
  return (
    <RadioGroup value={value} onValueChange={onValueChange} className={className}>
      {items.map((item) => (
        <Label
          key={item.id}
          htmlFor={item.id}
          className={`relative flex flex-col p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:border-primary/80 ${value === item.value ? 'border-primary bg-primary/5' : 'border-border bg-background/50'} ${itemClassName}`}>
          <RadioGroupItem value={item.value} id={item.id} className="absolute top-3 right-3 h-5 w-5" />
          {item.children}
        </Label>
      ))}
    </RadioGroup>
  )
}
