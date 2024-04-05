"use client"

import { Separator } from "@/components/ui/separator"
import { AccountForm } from "@/app/profile/account-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Аккаунт</h3>
        <p className="text-sm text-muted-foreground">
          Обновите настройки своей учетной записи. Установите предпочитаемые интересы.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}