"use client"

import { Separator } from "@/components/ui/separator"
import { AppearanceForm } from "@/app/profile/appearance/appearance-form"

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Внешний вид</h3>
        <p className="text-sm text-muted-foreground">
          Настройте внешний вид приложения. Автоматическое переключение между днями и ночные темы.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  )
}
