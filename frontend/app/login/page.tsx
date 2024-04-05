"use client"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/app/login/components/user-auth-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Почта должна содержать не менее 2 символов и иметь @.",
  }),
  password: z.string().min(1, {
    message: "Пароль не может быть пустым!",
  }),
})
 


export default function LoginPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Вы ввели следующие значения:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
 

  return (
    <>
      <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
        <Link
          href="/register"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Регистрация
        </Link>
        <div className="flex items-center h-dvh">
          <div className="mx-auto self-center flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Войти в учетную запись
              </h1>
              <p className="text-sm text-muted-foreground">
                Введите свой адрес электронной почты и пароль ниже, чтобы войти в свою учетную запись
              </p>
            </div>
            <Form className="w-full" {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="example@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="password" type="password" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">Войти</Button>
              </form>
            </Form>
            <p className="px-8 text-center text-sm text-muted-foreground">
               Текущие условия сервиса - {" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              и {" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}