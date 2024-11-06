import Image from "next/image"

const Footer = () => {
  return (
    <div className="w-full h-auto py-[50px]">
        <div className="w-[85%] m-auto h-auto">
            <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col gap-5">
                <h1 className="text-[#222222] text-[24px]">Топ категории</h1>
                <div className="grid gap-2">
                  <p className="text-[#222222] text-[14px]">Тексты и переводы</p>
                  <p className="text-[#222222] text-[14px]">Разработка</p>
                  <p className="text-[#222222] text-[14px]">Дизайн</p>
                  <p className="text-[#222222] text-[14px]">Аудио, видео монтаж</p>
                  <p className="text-[#222222] text-[14px]">Соцсети и реклама</p>
                  <p className="text-[#222222] text-[14px]">Бизнес и жизнь</p>
                  <p className="text-[#222222] text-[14px]">SEO и оптимизация</p>
                </div>
              </div>


              <div className="flex flex-col gap-5">
                <h1 className="text-[#222222] text-[24px]">О Проекте</h1>
                <div className="grid gap-2">
                  <p className="text-[#222222] text-[14px]">О Нас</p>
                  <p className="text-[#222222] text-[14px]">Как Это Работает</p>
                  <p className="text-[#222222] text-[14px]">Политика Приватности</p>
                  <p className="text-[#222222] text-[14px]">Правила Пользования </p>
                  <p className="text-[#222222] text-[14px]">Пресса о нас</p>
                </div>
              </div>



              <div className="flex flex-col gap-5">
                <h1 className="text-[#222222] text-[24px]">Поддержка</h1>
                <div className="grid gap-2">
                  <p className="text-[#222222] text-[14px]">Контакты</p>
                  <p className="text-[#222222] text-[14px]">Политика Безопасности</p>
                  <p className="text-[#222222] text-[14px]">FAQ</p>
                 
                </div>
              </div>



              <div className="flex flex-col gap-5">
                <h1 className="text-[#222222] text-[24px]">Follow</h1>
                <div className="flex gap-2">
                  <Image src="/facebook.svg" alt="facebook" width={50} height={50} />
                  <Image src="/twinter.svg" alt="facebook" width={50} height={50} />
                  <Image src="/insta.svg" alt="facebook" width={50} height={50} />
                  <Image src="/in.svg" alt="facebook" width={50} height={50} />
                </div>
              </div>
              
            </div>

            <h1 className="text-center text-[16px] text-[#222222] my-[50px]">Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</h1>

        </div>
    </div>
  )
}

export default Footer
