import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Главная
      </Link>
      <Link
        href="/dashboard/courses"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Курсы
      </Link>
      <Link
        href="/dashboard/tasks"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Задания
      </Link>
      <Link
        href="/dashboard/calendar"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Календарь
      </Link>
    </nav>
  )
}
