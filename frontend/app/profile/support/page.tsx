"use client"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { Metadata } from "next"
import Image from "next/image"

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

export default function IndexPage() {
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
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Поддержка</h2>
            <div className="flex items-center space-x-2">

            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            
            <Card className="col-span-4 flex items-center justify-start ">
                <div className="ml-8">Всего вами было создано 0 тикетов, закрыто 0 тикетов.</div>
            </Card>
            <Button>Создать</Button>
          </div>


        </div>
      </div>
    </>
  )
}