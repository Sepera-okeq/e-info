"use client"

import { Separator } from "@/components/ui/separator"
import { NotificationsForm } from "@/app/profile/notifications/notifications-form"

export default function SettingsNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Уведомления</h3>
        <p className="text-sm text-muted-foreground">
          Настройте способ получения уведомлений.
        </p>
      </div>
      <Separator />
      <NotificationsForm />
    </div>
  )
}
