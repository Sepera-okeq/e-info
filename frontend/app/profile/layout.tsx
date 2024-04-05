"use client"

import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/app/profile/components/sidebar-nav"


const sidebarNavItems = [
  {
    title: "Профиль",
    href: "/profile",
  },
  {
    title: "Внешний вид",
    href: "/profile/appearance",
  },
  {
    title: "Уведомления",
    href: "/profile/notifications",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}


import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { CalendarDateRangePicker } from "@/app/dashboard/components/date-range-picker"
import { MainNav } from "@/app/dashboard/components/main-nav"
import { Overview } from "@/app/dashboard/components/overview"
import { ListTask } from "@/app/dashboard/components/list-task"
import { Search } from "@/app/dashboard/components/search"
import CourseSwitcher from "@/app/dashboard/components/course-switcher"
import { UserNav } from "@/app/dashboard/components/user-nav"

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-8">
            <CourseSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-4 pt-6">
          <div className="space-y-6 p-10 pb-16 md:block">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight">Настройки</h2>
              <p className="text-muted-foreground">
                Управляйте настройками своей учетной записи и устанавливайте настройки электронной почты.
              </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className="-mx-4 lg:w-1/5">
                <SidebarNav items={sidebarNavItems} />
              </aside>
              <div className="flex-1 lg:max-w-2xl">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}