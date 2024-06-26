import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function ListTask() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Курс 1.</p>
          <p className="text-sm text-muted-foreground">
            Задание: Запостить котиков....
          </p>
        </div>
        <div className="ml-auto font-medium">Сдано</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Курс 1.</p>
          <p className="text-sm text-muted-foreground">
            Задание: Запостить котиков....
          </p>
        </div>
        <div className="ml-auto font-medium">Сдано</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Курс 1.</p>
          <p className="text-sm text-muted-foreground">
            Задание: Запостить котиков....
          </p>
        </div>
        <div className="ml-auto font-medium">Сдано</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Курс 1.</p>
          <p className="text-sm text-muted-foreground">
            Задание: Запостить котиков....
          </p>
        </div>
        <div className="ml-auto font-medium">Сдано</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Курс 1.</p>
          <p className="text-sm text-muted-foreground">
            Задание: Запостить котиков....
          </p>
        </div>
        <div className="ml-auto font-medium">Сдано</div>
      </div>
    </div>
  )
}
