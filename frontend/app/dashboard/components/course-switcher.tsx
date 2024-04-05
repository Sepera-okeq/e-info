"use client"

import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const groups = [
  {
    label: "ЕГЭ",
    courses: [
      {
        label: "Информатика за 90 дней",
        value: "info-90-ege",
      },
    ],
  },
  {
    label: "Университет",
    courses: [
      {
        label: "Курс 1.",
        value: "course1",
      },
      {
        label: "Курс 2.",
        value: "course2",
      },
    ],
  },
]

type Course = (typeof groups)[number]["courses"][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface CourseSwitcherProps extends PopoverTriggerProps {}

export default function CourseSwitcher({ className }: CourseSwitcherProps) {
  const [open, setOpen] = React.useState(false)
  const [showNewCourseDialog, setShowNewCourseDialog] = React.useState(false)
  const [selectedCourse, setSelectedCourse] = React.useState<Course>(
    groups[0].courses[0]
  )

  return (
    <Dialog open={showNewCourseDialog} onOpenChange={setShowNewCourseDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Выбор курса"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedCourse.value}.png`}
                alt={selectedCourse.label}
                className="grayscale"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
              Ваши курсы
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] ml-4 p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Поиск курса..." />
              <CommandEmpty>Курс не найден.</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.courses.map((course) => (
                    <CommandItem
                      key={course.value}
                      onSelect={() => {
                        setSelectedCourse(course)
                        setOpen(true)
                      }}
                      className="text-sm"
                    >
                      <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${course.value}.png`}
                          alt={course.label}
                          className="grayscale"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      {course.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedCourse.value === course.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(true)
                      setShowNewCourseDialog(true)
                    }}
                  >
                    <PlusCircledIcon className="mr-2 h-5 w-5" />
                    Новый курс
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Новый курс</DialogTitle>
          <DialogDescription>
            Добавьте новый курс для развития знаний.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Название курса</Label>
              <Input id="name" placeholder="#СДАЙЕГЭ" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Выбор плана</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите план обучения" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Бесплатно</span> -{" "}
                    <span className="text-muted-foreground">
                      Бесплатно
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Платно</span> -{" "}
                    <span className="text-muted-foreground">
                      999 руб
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewCourseDialog(false)}>
            Отмена
          </Button>
          <Button type="submit">Потвердить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
